"use client";

import React, { useEffect, useState } from "react";

declare global {
  interface Window {
    $crisp?: any[];
  }
}

export default function ChatLauncher({ inline = false }: { inline?: boolean }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const check = () => {
      if (typeof window !== "undefined" && Array.isArray(window.$crisp)) {
        try {
          // Attempt to hide Crisp native bubble to avoid duplicate triggers
          window.$crisp.push(["config", "hide", true]);
        } catch {}
        setReady(true);
        return true;
      }
      return false;
    };
    if (check()) return;
    const id = setInterval(() => {
      if (check()) clearInterval(id);
    }, 300);
    return () => clearInterval(id);
  }, []);

  if (!ready) return null;

  const button = (
    <button
      type="button"
      onClick={() => {
        try {
          window.$crisp?.push(["do", "chat:open"]);
        } catch {}
      }}
      className="px-4 py-2 rounded-full
                border border-neutral-200/70 dark:border-neutral-800/70
                bg-white/70 dark:bg-neutral-900/60 backdrop-blur-sm
                text-sm text-neutral-900 dark:text-neutral-100
                shadow-sm hover:shadow-md transition-shadow focus:outline-none
                focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500"
      aria-label="Open chat"
    >
      Let&apos;s chat!
    </button>
  );

  if (inline) {
    // On small screens, add bottom margin to avoid overlapping with OS UI
    // Remove the bottom margin on medium+ screens.
    return <div className="mt-6 mb-16 md:mb-0 flex justify-center">{button}</div>;
  }

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40">
      {button}
    </div>
  );
}
