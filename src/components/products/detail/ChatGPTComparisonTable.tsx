const TABLE_HEAD = ["Tiêu chí", "GPT-3.5 (Miễn phí)", "GPT-4 (ChatGPT Plus)", "GPT-5.2 (ChatGPT Plus nâng cao)"] as const;

const TABLE_ROWS = [
  {
    criterion: "Khả năng hiểu ngữ cảnh",
    values: ["Cơ bản", "Tốt hơn với khả năng xử lý phức tạp", "Nâng cao với độ sâu trong câu chuyện"],
  },
  {
    criterion: "Tốc độ phản hồi",
    values: ["Chậm và dễ gặp phải nghẽn mạng", "Tốt với tốc độ ưu tiên", "Nhanh nhất ngay cả giờ cao điểm"],
  },
  {
    criterion: "Chất lượng nội dung",
    values: ["Ổn định cho yêu cầu đơn giản", "Nội dung sáng tạo và chính xác hơn", "Rất sáng tạo với phong cách đa dạng"],
  },
  {
    criterion: "Tính năng hỗ trợ",
    values: ["Giới hạn", "Thêm mô hình đa nhiệm", "Hỗ trợ mở rộng cho sáng tạo nâng cao"],
  },
  {
    criterion: "Giá cả",
    values: ["Miễn phí", "Phí hàng tháng", "Gói cao cấp hơn nhưng giá trị tương xứng"],
  },
  {
    criterion: "Độ ổn định truy cập",
    values: [
      "Thường xuyên bị nghẽn",
      "Ổn định nhưng có thể hạn chế giờ cao điểm",
      "Luôn ưu tiên truy cập gần như không gián đoạn",
    ],
  },
];

export function ChatGPTComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
            {TABLE_HEAD.map((cell, i) => (
              <th
                key={cell}
                className={`px-4 py-3 font-semibold text-gray-900 dark:text-gray-100 ${
                  i > 0 ? "border-l border-gray-200 dark:border-gray-800" : ""
                }`}
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map((row, rowIndex) => (
            <tr
              key={row.criterion}
              className="border-b border-gray-100 last:border-0 dark:border-gray-800"
            >
              <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                {row.criterion}
              </td>
              {row.values.map((value, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border-l border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-800 dark:text-gray-400"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
