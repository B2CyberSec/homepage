import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md" | "lg";
}

export default function StarRating({ rating, reviewCount, size = "md" }: StarRatingProps) {
  const sizeMap = { sm: 14, md: 18, lg: 22 };
  const iconSize = sizeMap[size];
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.3;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={iconSize}
            className={
              i < fullStars
                ? "fill-amber-400 text-amber-400"
                : i === fullStars && hasHalf
                  ? "fill-amber-400/50 text-amber-400"
                  : "text-muted-foreground/30"
            }
          />
        ))}
      </div>
      <span className="font-mono text-sm font-medium text-foreground">{rating.toFixed(1)}</span>
      {reviewCount !== undefined && (
        <span className="text-sm text-muted-foreground">({reviewCount} Bewertungen)</span>
      )}
    </div>
  );
}
