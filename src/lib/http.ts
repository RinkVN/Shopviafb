import { getEnv } from "./env";

const API_BASE_URL = getEnv("NEXT_PUBLIC_API_BASE_URL") ?? "http://localhost:3000/api";

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const url = path.startsWith("http") ? path : `${API_BASE_URL}${path}`;

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {}),
    },
    // Revalidate ở phía server (Next 16 app router)
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  return (await res.json()) as T;
}

export const httpClient = {
  get<T>(path: string, init?: RequestInit) {
    return request<T>(path, { ...init, method: "GET" });
  },
  post<T>(path: string, body?: unknown, init?: RequestInit) {
    return request<T>(path, {
      ...init,
      method: "POST",
      body: body ? JSON.stringify(body) : undefined,
    });
  },
};

