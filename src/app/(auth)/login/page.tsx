"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email,] = useState("");
  const [password,] = useState("");

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">Đăng nhập</h1>
        <p className="text-[12px] text-slate-500">
          Đăng nhập để quản lý đơn hàng và tài khoản của bạn.
        </p>
      </div>
      <form className="space-y-3">
        <div className="space-y-1">
          <Label>Email</Label>
          <Input
            type="email"
            defaultValue={email}
            className="h-9 rounded-lg px-3 text-sm"
            placeholder="you@example.com"
          />
        </div>
        <div className="space-y-1">
          <Label>Mật khẩu</Label>
          <Input
            type="password"
            defaultValue={password}
            className="h-9 rounded-lg px-3 text-sm"
            placeholder="••••••••"
          />
        </div>
        <Button type="submit" className="mt-2 w-full rounded-full py-2 text-sm">
          Đăng nhập
        </Button>
      </form>
      <p className="text-center text-[12px] text-slate-500">
        Chưa có tài khoản?{" "}
        <span className="cursor-pointer font-semibold text-blue-600">
          Liên hệ hỗ trợ
        </span>
      </p>
    </div>
  );
}

