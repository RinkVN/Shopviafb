import { httpClient } from "@/lib/http";
import type { AuthUser, LoginPayload } from "../types";

export async function login(payload: LoginPayload): Promise<AuthUser> {
  const res = await httpClient.post<AuthUser>("/auth/login", payload);
  return res;
}

