import Link from "next/link";
import { ArrowLeft, ExternalLink, Plus, Sparkles } from "lucide-react";
import { AlbumArt } from "@/components/album-art";
import { detectedTags, playlistTracks } from "@/lib/mock-data";

export default function ResultPage() {
  return (
    <section className="app-container py-8">
      <Link href="/home" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-ink/60">
        <ArrowLeft size={17} aria-hidden="true" />
        Back to Home
      </Link>

      <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
        <aside className="surface-card h-fit p-5 text-center sm:p-6">
          <AlbumArt
            gradient="from-rose-400 via-orange-300 to-amber-300"
            className="mx-auto h-36 w-36"
            label="Upbeat R&B Shower"
          />
          <h1 className="mt-5 text-3xl font-bold">Upbeat R&B Shower</h1>
          <p className="mt-2 text-ink/55">15 tracks - 52 min</p>

          <a href="#" className="spotify-button mt-6 w-full">
            <ExternalLink size={18} aria-hidden="true" />
            Open in Spotify
          </a>
          <p className="mt-3 text-sm text-ink/50">
            Your playlist is already saved in Spotify.
          </p>

          <Link href="/home" className="secondary-button mt-5 w-full">
            <Plus size={18} aria-hidden="true" />
            New Prompt
          </Link>
        </aside>

        <div className="space-y-4">
          <div className="surface-card p-5">
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-sea text-white">
                <Sparkles size={19} aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-bold">Matched because</h2>
                <p className="mt-2 leading-7 text-ink/65">
                  Matched your upbeat R&B shower vibe using songs from your
                  library for a short session.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {detectedTags
                    .filter((tag) => tag.confidence === "high")
                    .map((tag) => (
                      <span
                        key={tag.label}
                        className="rounded-full border border-sea/25 bg-sea/10 px-3 py-1 text-sm font-semibold text-sea"
                      >
                        {tag.label}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="surface-card overflow-hidden">
            <div className="border-b border-line p-5">
              <h2 className="font-bold">Track List</h2>
            </div>
            <div className="divide-y divide-line">
              {playlistTracks.map((track, index) => (
                <div key={track.id} className="flex min-h-20 items-center gap-3 p-4">
                  <span className="w-6 text-sm font-semibold text-ink/35">
                    {index + 1}
                  </span>
                  <AlbumArt
                    gradient={track.coverClass}
                    className="h-12 w-12"
                    label={track.album}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold">{track.title}</p>
                    <p className="truncate text-sm text-ink/55">{track.artist}</p>
                  </div>
                  <span className="text-sm font-medium text-ink/45">{track.duration}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-dashed border-line bg-white p-4 text-center">
            <p className="text-sm font-semibold text-ink/45">Quick Refine is planned for V1.1</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {["More R&B", "Less pop", "Shorter"].map((label) => (
                <button key={label} type="button" className="chip-button opacity-60" disabled>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
