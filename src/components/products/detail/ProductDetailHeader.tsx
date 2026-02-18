import { Star, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type ProductDetailHeaderProps = {
  category?: string;
  title?: string;
  rating?: number;
  showSeparator?: boolean;
};

export function ProductDetailHeader({
  category = "Danh mục",
  title = "Tên sản phẩm",
  rating = 4.9,
  showSeparator = true,
}: ProductDetailHeaderProps) {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <>
      <div className="flex items-start justify-between">
        <div className="grid gap-2">
          <div className="text-sm text-gray-500">{category}</div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: fullStars }).map((_, i) => (
                <Star key={`full-${i}`} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              ))}
              {Array.from({ length: emptyStars }).map((_, i) => (
                <Star key={`empty-${i}`} className="h-4 w-4 fill-gray-300 text-gray-300" />
              ))}
            </div>
            <span className="text-sm text-gray-500">{rating}</span>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Share2 className="h-5 w-5" />
          <span className="sr-only">Share</span>
        </Button>
      </div>
      {showSeparator && <Separator />}
    </>
  );
}
