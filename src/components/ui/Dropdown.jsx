"use client";

import { useEffect, useId, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export default function Dropdown({ icon, label, placeholder, value, options, onChange, align = "left" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const listRef = useRef(null);
  const listId = useId();

  const selected = options.find((option) => option.value === value);
  const buttonText = value && selected ? selected.label : placeholder;

  useEffect(() => {
    if (!isOpen) return;
    function handlePointerDown(event) {
      if (!rootRef.current.contains(event.target)) setIsOpen(false);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) listRef.current?.children[activeIndex]?.focus();
  }, [isOpen, activeIndex]);

  function open() {
    setActiveIndex(Math.max(0, options.findIndex((option) => option.value === value)));
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    buttonRef.current.focus();
  }

  function choose(option) {
    onChange(option.value);
    close();
  }

  function handleListKeyDown(event) {
    const last = options.length - 1;
    const moves = {
      ArrowDown: () => setActiveIndex((index) => Math.min(index + 1, last)),
      ArrowUp: () => setActiveIndex((index) => Math.max(index - 1, 0)),
      Home: () => setActiveIndex(0),
      End: () => setActiveIndex(last),
      Escape: close,
      Enter: () => choose(options[activeIndex]),
      " ": () => choose(options[activeIndex]),
    };

    if (event.key === "Tab") setIsOpen(false);
    if (moves[event.key]) {
      event.preventDefault();
      moves[event.key]();
    }
  }

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listId}
        onClick={() => (isOpen ? setIsOpen(false) : open())}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            open();
          }
        }}
        className={cn(
          "flex h-12 items-center gap-1 rounded-3xl border bg-white px-4 text-label-m font-medium text-shuttle-950 transition-colors hover:border-shuttle-400",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          value ? "border-primary" : "border-shuttle-200",
        )}
      >
        <Icon name={icon} className="text-shuttle-700" />
        <span className="sr-only">{label}: </span>
        {buttonText}
        <Icon name="chevronDown" className={cn("size-5 text-shuttle-400 transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <ul
          id={listId}
          ref={listRef}
          role="listbox"
          aria-label={label}
          onKeyDown={handleListKeyDown}
          className={cn(
            "absolute top-full z-30 mt-2 min-w-[220px] rounded-2xl border border-shuttle-200 bg-white p-2 shadow-lg",
            align === "right" ? "right-0" : "left-0",
          )}
        >
          {options.map((option, index) => {
            const isSelected = option.value === value;
            return (
              <li
                key={option.value}
                role="option"
                aria-selected={isSelected}
                tabIndex={index === activeIndex ? 0 : -1}
                onClick={() => choose(option)}
                onMouseEnter={() => setActiveIndex(index)}
                className={cn(
                  "flex cursor-pointer items-center justify-between gap-4 rounded-xl px-4 py-3 text-label-m whitespace-nowrap outline-none",
                  index === activeIndex && "bg-shuttle-50",
                  isSelected ? "font-medium text-primary" : "text-shuttle-700",
                )}
              >
                {option.label}
                {isSelected && <Icon name="tick" className="size-5" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
