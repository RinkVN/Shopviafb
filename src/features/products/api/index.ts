import { httpClient } from "@/lib/http";
import type { Product } from "../types";

// Tạm thời dùng mock, sau này có thể gọi API thật.
// export async function getProducts() {
//   const res = await httpClient.get<Product[]>("/products");
//   return res;
// }

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const res = await httpClient.get<Product>(`/products/${slug}`);
    return res;
  } catch {
    return null;
  }
}

