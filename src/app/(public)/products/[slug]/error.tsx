"use client";

interface ProductDetailErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ProductDetailError({
  error,
  reset,
}: ProductDetailErrorProps) {
  return (
    <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
      <h1 className="text-base font-semibold text-red-500">
        Đã xảy ra lỗi khi tải sản phẩm
      </h1>
      <p className="mt-2 text-sm text-slate-600">
        {error.message || "Vui lòng thử lại sau ít phút."}
      </p>
      <button
        onClick={reset}
        className="mt-4 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
      >
        Thử lại
      </button>
    </div>
  );
}

