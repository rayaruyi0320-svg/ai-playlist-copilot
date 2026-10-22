import Link from "next/link";
import { ExternalLink, Repeat2 } from "lucide-react";
import { AlbumArt } from "@/components/album-art";
import { historyItems } from "@/lib/mock-data";

export default function HistoryPage() {
  return (
    <section className="app-container py-8">
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
          History
        </p>
        <h1 className="mt-2 text-3xl font-bold">Past prompts</h1>
      </div>

      <div className="grid gap-3">
        {historyItems.map((item, index) => (
          <article key={item.id} className="surface-card p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <AlbumArt
                gradient={
                  index === 0
                    ? "from-rose-400 via-orange-300 to-amber-300"
                    : index === 1
                      ? "from-teal-500 via-cyan-300 to-sky-300"
                      : "from-blue-500 via-indigo-300 to-emerald-300"
                }
                className="h-16 w-16"
                label={item.playlistName}
              />
              <div className="min-w-0 flex-1">
                <p className="text-lg font-bold">{item.prompt}</p>
                <p className="mt-1 text-sm text-ink/55">
                  {item.playlistName} - {item.trackCount} tracks - {item.duration} - {item.date}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link href="/result" className="secondary-button min-h-10 px-4 py-2">
                  <ExternalLink size={16} aria-hidden="true" />
                  Open
                </Link>
                <Link href="/home" className="primary-button min-h-10 px-4 py-2">
                  <Repeat2 size={16} aria-hidden="true" />
                  Reuse
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
