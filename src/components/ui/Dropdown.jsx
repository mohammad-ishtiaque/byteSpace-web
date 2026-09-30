"use client";

import { useEffect, useId, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const variants = {
  outline: {
    button: "h-12 border bg-white px-4 text-label-m text-shuttle-950 hover:border-shuttle-400",
    active: "border-primary",
    idle: "border-shuttle-200",
    chevron: "text-shuttle-400",
    focus: "focus-visible:outline-primary",
  },
  accent: {
    button: "h-12 bg-accent px-6 text-label-l text-shuttle-950 hover:bg-[#c2e80f]",
    active: "",
    idle: "",
    chevron: "text-shuttle-950",
    focus: "focus-visible:outline-white",
  },
};

export default function Dropdown({
  icon,
  label,
  placeholder,
  options,
  value,
  defaultValue = "",
  onChange,
  name,
  submitOnChange = false,
  variant = "outline",
  align = "left",
}) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const listRef = useRef(null);
  const listId = useId();

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;
  const selected = options.find((option) => option.value === currentValue);
  const buttonText = currentValue && selected ? selected.label : placeholder;
  const styles = variants[variant];

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
    setActiveIndex(Math.max(0, options.findIndex((option) => option.value === currentValue)));
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    buttonRef.current.focus();
  }

  function choose(option) {
    if (!isControlled) setInternalValue(option.value);
    onChange?.(option.value);
    close();

    if (submitOnChange && option.value !== currentValue) {
      const form = rootRef.current.closest("form");
      const hiddenInput = form?.elements.namedItem(name);
      if (hiddenInput) hiddenInput.value = option.value;
      form?.requestSubmit();
    }
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
    <div ref={rootRef} className="relative shrink-0 self-center">
      {name && <input type="hidden" name={name} value={currentValue} />}
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
          "flex items-center gap-1 rounded-3xl font-medium transition-colors",
          "focus-visible:outline-2 focus-visible:outline-offset-2",
          styles.button,
          styles.focus,
          currentValue ? styles.active : styles.idle,
        )}
      >
        {icon && <Icon name={icon} className="text-shuttle-700" />}
        <span className="sr-only">{label}: </span>
        {buttonText}
        <Icon name="chevronDown" className={cn("size-5 transition-transform", styles.chevron, isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <ul
          id={listId}
          ref={listRef}
          role="listbox"
          aria-label={label}
          onKeyDown={handleListKeyDown}
          className={cn(
            "absolute top-full z-30 mt-2 min-w-[220px] rounded-2xl border border-shuttle-200 bg-white p-2 text-left shadow-lg",
            align === "right" ? "right-0" : "left-0",
          )}
        >
          {options.map((option, index) => {
            const isSelected = option.value === currentValue;
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
