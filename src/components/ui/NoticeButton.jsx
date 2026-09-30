"use client";

import { useState } from "react";

export default function NoticeButton({ notice, className, children, ...props }) {
  const [message, setMessage] = useState("");

  return (
    <>
      <button type="button" onClick={() => setMessage(notice)} className={className} {...props}>
        {children}
      </button>
      <span role="status" className="sr-only">
        {message}
      </span>
      {message && (
        <span
          aria-hidden="true"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-3xl bg-shuttle-950/80 px-4 py-2 text-body-xs whitespace-nowrap text-white"
        >
          {message}
        </span>
      )}
    </>
  );
}
