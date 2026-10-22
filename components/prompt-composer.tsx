"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, Sparkles } from "lucide-react";
import { sceneChips, vibeChips } from "@/lib/mock-data";

const defaultPrompt = "15-min shower, R&B, upbeat";

export function PromptComposer() {
  const router = useRouter();
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [error, setError] = useState("");

  function useScenePrompt(nextPrompt: string) {
    setPrompt(nextPrompt);
    setError("");
  }

  function addVibe(nextPrompt: string) {
    setPrompt((current) => {
      const base = current.trim();
      if (!base) {
        return nextPrompt;
      }
      if (base.toLowerCase().includes(nextPrompt.toLowerCase())) {
        return base;
      }
      return `${base}, ${nextPrompt}`;
    });
    setError("");
  }

  function submitPrompt() {
    if (!prompt.trim()) {
      setError("Tell us what you want to hear!");
      return;
    }
    router.push("/generating");
  }

  return (
    <section className="rounded-lg border-2 border-accent bg-white p-4 shadow-soft sm:p-6">
      <label htmlFor="playlist-prompt" className="sr-only">
        Describe what you want to hear
      </label>
      <textarea
        id="playlist-prompt"
        value={prompt}
        onChange={(event) => {
          setPrompt(event.target.value);
          setError("");
        }}
        placeholder="Describe what you want to hear..."
        className="min-h-[168px] w-full resize-none rounded-lg border border-line bg-mist p-4 text-lg leading-7 text-ink outline-none transition placeholder:text-ink/35 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/15"
        maxLength={180}
      />

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm text-ink/55">
        <p>Try describing a scene, mood, or activity.</p>
        <span>{prompt.length}/180</span>
      </div>

      {error ? (
        <div className="mt-3 flex items-start gap-2 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-sm font-medium text-accent">
          <AlertCircle size={18} aria-hidden="true" />
          <span>{error}</span>
        </div>
      ) : null}

      <div className="mt-5 space-y-4">
        <ChipGroup title="Scene">
          {sceneChips.map((chip) => {
            const Icon = chip.icon;
            return (
              <button
                key={chip.label}
                type="button"
                className="chip-button"
                onClick={() => useScenePrompt(chip.prompt)}
              >
                <Icon size={16} aria-hidden="true" />
                {chip.label}
              </button>
            );
          })}
        </ChipGroup>

        <ChipGroup title="Vibe">
          {vibeChips.map((chip) => {
            const Icon = chip.icon;
            return (
              <button
                key={chip.label}
                type="button"
                className="chip-button"
                onClick={() => addVibe(chip.prompt)}
              >
                <Icon size={16} aria-hidden="true" />
                {chip.label}
              </button>
            );
          })}
        </ChipGroup>
      </div>

      <button type="button" className="primary-button mt-6 w-full" onClick={submitPrompt}>
        <Sparkles size={18} aria-hidden="true" />
        Generate Playlist
      </button>
    </section>
  );
}

function ChipGroup({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-ink/45">
        {title}
      </p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}
