import Link from "next/link";
import { ArrowLeft, HelpCircle, Sparkles } from "lucide-react";
import { GeneratingSteps } from "@/components/generating-steps";
import { detectedTags } from "@/lib/mock-data";

export default function GeneratingPage() {
  return (
    <section className="app-container py-8">
      <Link href="/home" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-ink/60">
        <ArrowLeft size={17} aria-hidden="true" />
        Back to Home
      </Link>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="surface-card p-5 sm:p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-white">
              <Sparkles size={21} aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
                Generating
              </p>
              <h1 className="text-2xl font-bold">Finding the right songs</h1>
            </div>
          </div>

          <GeneratingSteps />
        </div>

        <aside className="space-y-4">
          <div className="surface-card p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
              AI detected
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {detectedTags.map((tag) => (
                <span
                  key={tag.label}
                  className={`rounded-full border px-3 py-1 text-sm font-semibold ${
                    tag.confidence === "high"
                      ? "border-sea/25 bg-sea/10 text-sea"
                      : "border-sun/40 bg-sun/15 text-ink/70"
                  }`}
                >
                  {tag.confidence === "high" ? "Matched" : "Maybe"} {tag.label}
                </span>
              ))}
            </div>
          </div>

          <div className="surface-card border-sun/60 p-5">
            <div className="mb-3 flex items-center gap-2 font-bold">
              <HelpCircle className="text-sun" size={20} aria-hidden="true" />
              Just to make sure
            </div>
            <p className="text-sm leading-6 text-ink/65">
              Did you mean more R&B or more Pop?
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {["R&B", "Pop", "Both"].map((option) => (
                <Link
                  key={option}
                  href="/result"
                  className="secondary-button min-h-10 px-3 py-2 text-xs"
                >
                  {option}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
