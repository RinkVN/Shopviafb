import { notFound } from "next/navigation";
import { productsMock } from "@/features/products/mock";
import Link from "next/link";

interface ProductDetailPageProps {
  params: { slug: string };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = productsMock.find((p) => p.slug === params.slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)]">
      <div className="space-y-4 rounded-2xl bg-white p-4 shadow-sm">
        <div className="relative h-60 w-full overflow-hidden rounded-2xl bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-700 opacity-90" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[11px] text-yellow-500">
            <span>★★★★★</span>
            <span className="text-slate-500">
              (20 đánh giá) | {product.sold.toLocaleString("vi-VN")} đã bán
            </span>
          </div>
          <h1 className="text-lg font-semibold text-slate-900">
            {product.name}
          </h1>
        </div>
        <div className="space-y-2 text-[13px] text-slate-600">
          <p>
            Tài khoản chính chủ, sử dụng ổn định, bảo hành trong suốt thời gian
            gói. Giao tài khoản tự động ngay sau khi thanh toán.
          </p>
          <ul className="list-disc space-y-1 pl-4">
            <li>Hỗ trợ cài đặt, hướng dẫn sử dụng chi tiết.</li>
            <li>Bảo mật thông tin khách hàng, thanh toán an toàn.</li>
            <li>Cam kết đúng mô tả, hoàn tiền nếu không đúng dịch vụ.</li>
          </ul>
        </div>
      </div>

      <aside className="space-y-3 rounded-2xl bg-white p-4 shadow-sm">
        <div>
          <p className="text-xs text-slate-500">Giá bán</p>
          <div className="flex items-end gap-2">
            <p className="text-xl font-semibold text-red-500">
              {product.price.toLocaleString("vi-VN")}đ
            </p>
            {product.originalPrice && (
              <p className="text-xs text-slate-400 line-through">
                {product.originalPrice.toLocaleString("vi-VN")}đ
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2 text-[12px] text-slate-600">
          <p>Loại gói: <span className="font-medium">Pro - Chính chủ</span></p>
          <p>Thời hạn: <span className="font-medium">1 tháng</span></p>
          <p>Bảo hành: <span className="font-medium">Trọn thời gian sử dụng</span></p>
        </div>

        <div className="flex items-center gap-2 text-[12px] text-emerald-600">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <p>Còn hàng • Giao ngay sau 1-5 phút</p>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 rounded-full bg-blue-600 py-2 text-sm font-semibold text-white">
            Thêm vào giỏ hàng
          </button>
          <button className="flex-1 rounded-full border border-blue-600 py-2 text-sm font-semibold text-blue-600">
            Mua ngay
          </button>
        </div>

        <div className="mt-2 space-y-1 rounded-xl bg-slate-50 p-3 text-[11px] text-slate-600">
          <p className="font-semibold text-slate-800">
            Lưu ý khi mua sản phẩm
          </p>
          <p>• Bảo hành toàn bộ thời gian sử dụng.</p>
          <p>• Đầy đủ tính năng theo gói.</p>
          <p>• Hỗ trợ đổi tài khoản nếu gặp lỗi trong 24h đầu.</p>
        </div>

        <Link
          href="/products"
          className="mt-1 block text-center text-[12px] font-medium text-blue-600 hover:underline"
        >
          ← Quay lại danh sách sản phẩm
        </Link>
      </aside>
    </div>
  );
}

