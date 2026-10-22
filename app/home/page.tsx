import Link from "next/link";
import { ArrowRight, Clock, Library, RefreshCw } from "lucide-react";
import { AlbumArt } from "@/components/album-art";
import { PromptComposer } from "@/components/prompt-composer";
import { historyItems, libraryStats } from "@/lib/mock-data";

export default function HomePage() {
  const recent = historyItems[0];

  return (
    <section className="app-container py-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
                Home
              </p>
              <h1 className="mt-2 text-3xl font-bold">Hi there</h1>
            </div>
            <Link href="/settings" className="secondary-button">
              <RefreshCw size={18} aria-hidden="true" />
              Re-sync
            </Link>
          </div>

          <PromptComposer />
        </div>

        <aside className="space-y-4">
          <div className="surface-card p-5">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-sea text-white">
                <Library size={21} aria-hidden="true" />
              </div>
              <div>
                <p className="text-2xl font-bold">{libraryStats.tracks}</p>
                <p className="text-sm text-ink/55">tracks synced</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-mist p-3">
                <p className="font-bold">{libraryStats.playlists}</p>
                <p className="text-ink/55">playlists</p>
              </div>
              <div className="rounded-lg bg-mist p-3">
                <p className="font-bold">{libraryStats.lastSynced}</p>
                <p className="text-ink/55">last sync</p>
              </div>
            </div>
          </div>

          <div className="surface-card p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="font-bold">Recent Playlists</h2>
              <Link
                href="/history"
                className="inline-flex items-center gap-1 text-sm font-semibold text-accent"
              >
                View all
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
            <Link
              href="/result"
              className="block rounded-lg border border-line bg-white p-3 transition hover:border-accent"
            >
              <div className="flex items-center gap-3">
                <AlbumArt
                  gradient="from-rose-400 via-orange-300 to-amber-300"
                  className="h-14 w-14"
                  label={recent.playlistName}
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold">{recent.playlistName}</p>
                  <p className="truncate text-sm text-ink/55">{recent.prompt}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-ink/45">
                <Clock size={14} aria-hidden="true" />
                {recent.trackCount} tracks - {recent.date}
              </div>
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
