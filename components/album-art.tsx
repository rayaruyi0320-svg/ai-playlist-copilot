import { Music2 } from "lucide-react";

type AlbumArtProps = {
  className?: string;
  gradient: string;
  label?: string;
};

export function AlbumArt({ className = "", gradient, label }: AlbumArtProps) {
  return (
    <div
      className={`grid aspect-square place-items-center rounded-lg bg-gradient-to-br ${gradient} ${className}`}
      aria-label={label}
      role={label ? "img" : undefined}
    >
      <Music2 className="text-white drop-shadow" size={24} aria-hidden="true" />
    </div>
  );
}
