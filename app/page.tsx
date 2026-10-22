import Link from "next/link";
import { ArrowRight, Library, LogIn, Music2, Search, Sparkles } from "lucide-react";
import { AlbumArt } from "@/components/album-art";

export default function LandingPage() {
  return (
    <>
      <section className="section-band">
        <div className="app-container grid gap-10 py-12 md:grid-cols-[1fr_0.92fr] md:items-center md:py-16">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-accent">
              Playlist Copilot
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-normal text-ink sm:text-5xl lg:text-6xl">
              Describe it. We&apos;ll find it.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-ink/68">
              Tell us your mood, scene, or vibe. We search your library for the
              right songs, instantly.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/login" className="spotify-button">
                <LogIn size={18} aria-hidden="true" />
                Login with Spotify
              </Link>
              <Link href="/home" className="secondary-button">
                <Sparkles size={18} aria-hidden="true" />
                Preview the App
              </Link>
            </div>
          </div>

          <div className="surface-card p-4 sm:p-5">
            <div className="rounded-lg border border-line bg-mist p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  Try it
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink/60">
                  15 min
                </span>
              </div>
              <p className="rounded-lg bg-white p-4 text-lg font-semibold text-ink">
                15-min shower, upbeat R&B
              </p>
              <div className="my-4 flex items-center gap-2 text-sm font-semibold text-ink/50">
                <Search size={17} aria-hidden="true" />
                Searching your library
                <ArrowRight size={16} aria-hidden="true" />
              </div>
              <div className="space-y-3">
                {["Warm Tiles", "No Skip Morning", "Bright Water"].map((track, index) => (
                  <div
                    key={track}
                    className="flex min-h-16 items-center gap-3 rounded-lg border border-line bg-white p-3"
                  >
                    <AlbumArt
                      gradient={
                        index === 0
                          ? "from-rose-400 via-orange-300 to-amber-300"
                          : index === 1
                            ? "from-teal-500 via-cyan-300 to-sky-300"
                            : "from-blue-500 via-indigo-300 to-emerald-300"
                      }
                      className="h-11 w-11"
                    />
                    <div>
                      <p className="font-semibold">{track}</p>
                      <p className="text-sm text-ink/50">From your liked songs</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="app-container py-10">
        <div className="grid gap-3 md:grid-cols-3">
          <StepCard
            icon={LogIn}
            title="Connect your Spotify"
            body="Link your account. The real integration will ask only for the permissions the MVP needs."
          />
          <StepCard
            icon={Music2}
            title="Describe your mood"
            body="Say it naturally: rainy day indie, shower R&B, or coffee shop study."
            highlight
          />
          <StepCard
            icon={Library}
            title="Play from your library"
            body="The playlist is built from songs you already saved, then opened in Spotify."
          />
        </div>
      </section>
    </>
  );
}

function StepCard({
  icon: Icon,
  title,
  body,
  highlight = false
}: {
  icon: typeof LogIn;
  title: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`surface-card min-h-48 p-5 ${
        highlight ? "border-accent bg-accent/5" : ""
      }`}
    >
      <div
        className={`mb-5 grid h-11 w-11 place-items-center rounded-lg ${
          highlight ? "bg-accent text-white" : "bg-ink text-white"
        }`}
      >
        <Icon size={21} aria-hidden="true" />
      </div>
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="mt-2 leading-7 text-ink/62">{body}</p>
    </div>
  );
}
