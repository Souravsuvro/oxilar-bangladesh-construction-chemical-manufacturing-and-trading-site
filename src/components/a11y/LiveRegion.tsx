import { useEffect, useId, useRef, useState, type ReactNode } from "react";

type Politeness = "polite" | "assertive" | "off";

/**
 * Atomic live region for status messages (filter counts, toasts, form results).
 * Clears and re-sets text so repeated identical announcements still fire.
 */
export function LiveRegion({
  message,
  politeness = "polite",
  atomic = true,
  className = "sr-only",
  id,
}: {
  message: string;
  politeness?: Politeness;
  atomic?: boolean;
  className?: string;
  id?: string;
}) {
  const autoId = useId();
  const [text, setText] = useState("");
  const prev = useRef("");

  useEffect(() => {
    const next = message.trim();
    if (!next) {
      setText("");
      prev.current = "";
      return;
    }
    // Force a DOM change when the same message is announced again
    if (next === prev.current) {
      setText("");
      const t = window.setTimeout(() => {
        setText(next);
        prev.current = next;
      }, 50);
      return () => window.clearTimeout(t);
    }
    setText(next);
    prev.current = next;
  }, [message]);

  return (
    <div
      id={id ?? autoId}
      role={politeness === "assertive" ? "alert" : "status"}
      aria-live={politeness}
      aria-atomic={atomic}
      className={className}
    >
      {text}
    </div>
  );
}

/** Visible status banner that is also announced via aria-live. */
export function StatusBanner({
  children,
  tone = "info",
  politeness = "polite",
}: {
  children: ReactNode;
  tone?: "info" | "success" | "error";
  politeness?: Politeness;
}) {
  const toneClass =
    tone === "success"
      ? "bg-brand-soft text-brand-deep"
      : tone === "error"
        ? "bg-red-50 text-red-800 ring-red-200"
        : "bg-mist text-ink";

  return (
    <div
      role={politeness === "assertive" ? "alert" : "status"}
      aria-live={politeness}
      aria-atomic="true"
      className={`rounded-lg px-4 py-3 text-sm font-medium ring-1 ring-line ${toneClass}`}
    >
      {children}
    </div>
  );
}
