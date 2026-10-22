"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Circle, ExternalLink, Loader2 } from "lucide-react";

const steps = [
  "Understanding your request...",
  "Searching your library...",
  "Creating your playlist..."
];

export function GeneratingSteps() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStep((current) => Math.min(current + 1, steps.length));
    }, 1200);

    return () => window.clearInterval(timer);
  }, []);

  const isDone = activeStep >= steps.length;

  return (
    <div className="space-y-3">
      {steps.map((step, index) => {
        const complete = activeStep > index;
        const active = activeStep === index;

        return (
          <div
            key={step}
            className={`flex min-h-16 items-center gap-3 rounded-lg border p-4 transition ${
              complete
                ? "border-sea/25 bg-sea/10"
                : active
                  ? "border-accent/40 bg-accent/10"
                  : "border-line bg-white opacity-60"
            }`}
          >
            {complete ? (
              <CheckCircle2 className="text-sea" size={22} aria-hidden="true" />
            ) : active ? (
              <Loader2 className="animate-spin text-accent" size={22} aria-hidden="true" />
            ) : (
              <Circle className="text-ink/30" size={22} aria-hidden="true" />
            )}
            <span className="font-semibold">{step}</span>
          </div>
        );
      })}

      <div className="pt-4">
        <Link
          href="/result"
          className={isDone ? "spotify-button w-full" : "secondary-button w-full"}
        >
          <ExternalLink size={18} aria-hidden="true" />
          {isDone ? "Ready to press play" : "Skip to Result"}
        </Link>
      </div>
    </div>
  );
}
