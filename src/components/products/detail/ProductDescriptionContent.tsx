import { ChatGPTComparisonTable } from './ChatGPTComparisonTable';

const introParagraph =
  'Bạn đang tìm kiếm một trợ lý AI mạnh mẽ, có khả năng nâng cao năng suất và khơi dậy sự sáng tạo không giới hạn? Tài khoản ChatGPT Plus (GPT-5.2) chính là lựa chọn tối ưu với công nghệ AI tiên tiến nhất từ OpenAI, mang đến khả năng xử lý ngôn ngữ tự nhiên vượt trội, tốc độ phản hồi nhanh chóng và nhiều tính năng hữu ích cho công việc và học tập.';

const section1 = {
  title: '1. Giới thiệu ChatGPT Plus (GPT-5.2)',
  content:
    'ChatGPT Plus là phiên bản đăng ký cao cấp, cung cấp quyền truy cập vào các mô hình AI mới nhất của OpenAI. GPT-5 tiếp nối thành công của GPT-3.5 và GPT-4 với nhiều cải tiến về khả năng hiểu ngữ cảnh, phát triển ý tưởng và phản ứng linh hoạt hơn. Với tài khoản ChatGPT Plus GPT-5, bạn sẽ khai thác hiệu quả sức mạnh AI trong nhiều lĩnh vực như sáng tạo nội dung, dịch thuật, lập trình, phân tích dữ liệu và hỗ trợ trả lời tự động.',
};

const section2 = {
  title: '2. Lợi ích khi sử dụng Tài khoản ChatGPT Plus GPT-5.2',
  items: [
    'Phiên bản AI tiên tiến nhất: GPT-5.2 được trang bị thuật toán tối ưu hóa, nâng cao khả năng nhận diện và xử lý các yêu cầu phức tạp.',
    'Tốc độ ưu tiên và kết nối ổn định: Giúp tránh tình trạng nghẽn mạng hay chậm trễ trong phản hồi để công việc diễn ra liên tục.',
    'Bảo mật thông tin cao: Đảm bảo an toàn dữ liệu cá nhân và doanh nghiệp.',
    'Đáp ứng đa dạng nhu cầu: Hỗ trợ viết bài chuẩn SEO, phát triển ý tưởng marketing, tạo nội dung học thuật cũng như hỗ trợ lập trình.',
    'Hướng dẫn chi tiết cùng dịch vụ hỗ trợ 24/7: Đảm bảo người dùng có trải nghiệm tốt nhất.',
  ],
};

const section3Title = '3. So sánh các gói ChatGPT (Free – Go – Plus – Pro)';

const section4Paragraph =
  'Người dùng cá nhân hoặc thử nghiệm có thể sử dụng miễn phí GPT-3.5. Những người làm nội dung hoặc doanh nghiệp nhỏ nên cân nhắc chọn GPT-4 để nâng cao hiệu quả làm việc. Nếu bạn cần một giải pháp AI siêu việt với khả năng xử lý dữ liệu phức tạp cùng tốc độ nhanh chóng thì tài khoản ChatGPT Plus GPT-5.2 là lựa chọn hợp lý.';

const section5 = {
  title: '5. Hướng dẫn mua Tài khoản ChatGPT Plus (GPT – 5.2)',
  steps: [
    'Truy cập trang web để bắt đầu quá trình đặt hàng.',
    'Điền thông tin cần thiết khi đặt hàng.',
    'Chọn phương thức thanh toán tự động.',
    'Nhận tài khoản kích hoạt nhanh chóng sau khi thanh toán.',
    'Nếu cần hỗ trợ, hãy yêu cầu tư vấn trực tiếp.',
    'Sử dụng dịch vụ hỗ trợ 24/7 để đảm bảo trải nghiệm mượt mà và an toàn.',
  ],
};

const section6 = {
  title: '6. Kết luận: Đầu tư thông minh cùng Tài khoản ChatGPT Plus (GPT – 5.2)',
  content:
    'Trong kỷ nguyên số hiện nay, trí tuệ nhân tạo đóng vai trò quan trọng trong việc gia tăng hiệu suất làm việc cũng như sự sáng tạo không giới hạn của con người. Tài khoản ChatGPT Plus (GPT – 5.1) mang lại giải pháp AI hiện đại đáp ứng mọi nhu cầu từ cá nhân đến tổ chức lớn.',
  cta: 'Hãy đặt mua tài khoản ChatGPT Plus GPT – 5.1 tại ShopBNH ngay hôm nay để khám phá bước tiến mới cho công việc và học tập của bạn đồng thời mở rộng giới hạn sáng tạo cùng công nghệ AI.',
};

export function ProductDescriptionContent() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-none space-y-6 text-sm">
      <p className="text-gray-700 dark:text-gray-300">{introParagraph}</p>

      <section>
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
          {section1.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">{section1.content}</p>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
          {section2.title}
        </h3>
        <ul className="list-inside list-disc space-y-1.5 text-gray-700 dark:text-gray-300">
          {section2.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
          {section3Title}
        </h3>
        <ChatGPTComparisonTable />
        <p className="mt-4 text-gray-700 dark:text-gray-300">{section4Paragraph}</p>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
          {section5.title}
        </h3>
        <ol className="list-inside list-decimal space-y-1.5 text-gray-700 dark:text-gray-300">
          {section5.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
          {section6.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">{section6.content}</p>
        <p className="mt-2 font-medium text-gray-900 dark:text-gray-100">{section6.cta}</p>
      </section>
    </div>
  );
}
