"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const THUMBNAILS = [
  { src: "https://placehold.co/600x400?text=01", alt: "Product thumbnail 1" },
  { src: "https://placehold.co/600x400?text=02", alt: "Product thumbnail 2" },
  { src: "https://placehold.co/600x400?text=03", alt: "Product thumbnail 3" },
  { src: "https://placehold.co/600x400?text=04", alt: "Product thumbnail 4" },
];

type ProductImageGalleryProps = {
  mainImage?: string;
  mainAlt?: string;
  badge?: string;
};

export function ProductImageGallery({
  mainImage = "https://placehold.co/600x400?text=01",
  mainAlt = "Stonewind Trekker Jacket",
  badge = "New Arrival",
}: ProductImageGalleryProps) {
  return (
    <div className="grid gap-4 md:grid-cols-[100px_1fr] lg:grid-cols-[120px_1fr]">
      <div className="hidden flex-col gap-4 md:flex">
        {THUMBNAILS.map((thumb, i) => (
          <button
            key={thumb.src}
            type="button"
            className="overflow-hidden rounded-lg border transition-colors hover:border-gray-900 dark:hover:border-gray-50"
          >
            <img
              src={thumb.src}
              alt={thumb.alt}
              className="aspect-4/3 object-cover"
            />
            <span className="sr-only">View Image {i + 1}</span>
          </button>
        ))}
      </div>
      <div className="relative">
        <img
          src={mainImage}
          alt={mainAlt}
          className="aspect-4/3 h-[410px] w-full rounded-lg border object-cover"
        />
        {badge && (
          <div className="absolute top-4 left-4 rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white">
            {badge}
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous image</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next image</span>
        </Button>
      </div>
    </div>
  );
}
