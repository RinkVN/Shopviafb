export function ProductPurchaseNotice() {
  const items = [
    {
      title: 'Loại Chính chủ:',
      text: 'ShopBNH sẽ nâng cấp tài khoản của quý khách lên gói Plus.',
    },
    {
      title: 'Loại Dùng chung:',
      text: 'ShopBNH sẽ gửi thông tin đăng nhập ChatGPT Plus sau khi quý khách thanh toán thành công đơn hàng. Dùng chung với 2-3 người khác đảm bảo sự ổn định.',
    },
    'Bảo hành trọn thời gian sử dụng.',
    'Hoàn tiền 100% nếu không bảo hành được.',
    'Tiết kiệm đến 75% – Giá tốt nhất thị trường.',
    'Sản phẩm chính hãng – Full tính năng.',
  ];

  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50/80 p-4 dark:border-amber-800 dark:bg-amber-950/30">
      <h3 className="mb-3 text-base font-bold text-amber-900 dark:text-amber-100">
        ❗ LƯU Ý KHI MUA SẢN PHẨM
      </h3>
      <ul className="list-inside list-disc space-y-2 text-sm text-gray-700 dark:text-gray-300">
        {items.map((item, i) => (
          <li key={i}>
            {typeof item === 'string' ? (
              item
            ) : (
              <>
                <span className="font-medium">{item.title}</span> {item.text}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
