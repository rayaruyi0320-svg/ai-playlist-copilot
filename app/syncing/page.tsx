import Link from "next/link";
import { Database, RefreshCw, SkipForward } from "lucide-react";
import { libraryStats } from "@/lib/mock-data";

export default function SyncingPage() {
  const progress = Math.round((libraryStats.syncedRecent / libraryStats.syncTarget) * 100);

  return (
    <section className="app-container flex min-h-[calc(100vh-4rem)] items-center justify-center py-10">
      <div className="w-full max-w-2xl text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-lg bg-ink text-white">
          <Database size={28} aria-hidden="true" />
        </div>
        <h1 className="mt-6 text-3xl font-bold">Syncing your library...</h1>
        <p className="mx-auto mt-3 max-w-md text-ink/62">
          Pulling in your liked songs so we can find the right ones.
        </p>

        <div className="surface-card mt-8 p-5 text-left">
          <div className="mb-3 flex items-center justify-between text-sm font-semibold">
            <span>
              Synced {libraryStats.syncedRecent} of {libraryStats.syncTarget} recent tracks
            </span>
            <span>{progress}%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-line">
            <div className="h-full rounded-full bg-accent" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-4 rounded-lg bg-sun/15 px-3 py-2 text-sm font-medium text-ink/70">
            This only happens once. Later, the app will keep your library updated
            automatically.
          </p>
        </div>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/home" className="primary-button">
            <RefreshCw size={18} aria-hidden="true" />
            Continue to Home
          </Link>
          <Link href="/home" className="secondary-button">
            <SkipForward size={18} aria-hidden="true" />
            Skip for now
          </Link>
        </div>
      </div>
    </section>
  );
}
