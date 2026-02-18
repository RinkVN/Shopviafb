"use client";

import { Minus, Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useProductOptionsStore, type SizeOption } from "@/stores/product-options-store";

const sizeOptionClass =
  "flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium ring-offset-white hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:outline-none data-[state=checked]:bg-gray-900 data-[state=checked]:text-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:data-[state=checked]:bg-gray-50 dark:data-[state=checked]:text-gray-900";

const colorOptions = [
  { id: "ocean-blue", value: "ocean-blue", label: "Ocean Blue", img: "https://placehold.co/600x400?text=01" },
  { id: "black", value: "black", label: "Black", img: "https://placehold.co/600x400?text=02" },
];

const sizeOptions: SizeOption[] = ["s", "m", "l", "xl", "2xl"];

export function ProductOptions() {
  const color = useProductOptionsStore((s) => s.color);
  const size = useProductOptionsStore((s) => s.size);
  const quantity = useProductOptionsStore((s) => s.quantity);
  const setColor = useProductOptionsStore((s) => s.setColor);
  const setSize = useProductOptionsStore((s) => s.setSize);
  const incrementQuantity = useProductOptionsStore((s) => s.incrementQuantity);
  const decrementQuantity = useProductOptionsStore((s) => s.decrementQuantity);

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="color" className="text-base font-medium">
          Color (Ocean Blue)
        </Label>
        <RadioGroup
          id="color"
          value={color}
          onValueChange={setColor}
          className="flex items-center gap-3"
        >
          {colorOptions.map((opt) => (
            <Label
              key={opt.id}
              htmlFor={`color-${opt.id}`}
              className="relative cursor-pointer rounded-full border-2 border-transparent data-[state=checked]:border-gray-900"
            >
              <RadioGroupItem id={`color-${opt.id}`} value={opt.value} className="sr-only" />
              <img
                src={opt.img}
                alt={opt.label}
                className="aspect-square w-20 rounded-md object-cover"
              />
              <span className="sr-only">{opt.label}</span>
            </Label>
          ))}
        </RadioGroup>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="size" className="text-base font-medium">
          Size
          <a href="#" className="ml-2 text-sm text-gray-500 hover:underline">
            Size Guide
          </a>
        </Label>
        <RadioGroup
          id="size"
          value={size}
          onValueChange={(v) => setSize(v as SizeOption)}
          className="flex items-center gap-2"
        >
          {sizeOptions.map((s) => (
            <Label
              key={s}
              htmlFor={`size-${s}`}
              className={sizeOptionClass}
            >
              <RadioGroupItem id={`size-${s}`} value={s} className="sr-only" />
              {s.toUpperCase()}
            </Label>
          ))}
        </RadioGroup>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="quantity" className="text-base font-medium">
          Quantity
        </Label>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-8 w-8 bg-transparent"
            onClick={decrementQuantity}
          >
            <Minus className="h-4 w-4" />
            <span className="sr-only">Decrease quantity</span>
          </Button>
          <div className="flex h-8 w-12 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium dark:border-gray-800 dark:bg-gray-950">
            {quantity}
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-8 w-8 bg-transparent"
            onClick={incrementQuantity}
          >
            <Plus className="h-4 w-4" />
            <span className="sr-only">Increase quantity</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
