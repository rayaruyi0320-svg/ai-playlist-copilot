import Link from "next/link";
import { ArrowLeft, CheckCircle2, LogIn, Shield } from "lucide-react";

export default function LoginPage() {
  return (
    <section className="app-container flex min-h-[calc(100vh-4rem)] items-center justify-center py-10">
      <div className="w-full max-w-xl">
        <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-ink/60">
          <ArrowLeft size={17} aria-hidden="true" />
          Back
        </Link>

        <div className="surface-card p-6 sm:p-8">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-lg bg-spotify text-white">
            <Shield size={25} aria-hidden="true" />
          </div>
          <div className="mt-5 text-center">
            <h1 className="text-3xl font-bold">Connect your Spotify</h1>
            <p className="mt-3 text-ink/62">
              We never see your password, email, or private data. You can
              disconnect anytime.
            </p>
          </div>

          <Link href="/syncing" className="spotify-button mt-8 w-full">
            <LogIn size={18} aria-hidden="true" />
            Login with Spotify
          </Link>

          <div className="mt-6 rounded-lg border border-line bg-mist p-4">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-ink/45">
              We&apos;ll ask for permission to
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Read your Liked Songs and playlists",
                "Create new playlists",
                "Add tracks to playlists"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle2 className="mt-0.5 text-sea" size={18} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
