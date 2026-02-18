import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 py-8 md:py-12">
      {/* Tiêu đề + mô tả */}
      <section className="space-y-4 text-center">
        <h1 className="text-2xl font-extrabold tracking-tight text-blue-600 md:text-3xl">
          GIỚI THIỆU SHOP BNH
        </h1>
        <p className="text-sm leading-relaxed text-slate-600 md:text-base">
          Shop BNH là website cung cấp sản phẩm bản quyền chính hãng và nhiều sản phẩm số khác với
          giá thành tốt, bảo hành trọn gói và hỗ trợ nhanh chóng.
        </p>
      </section>

      {/* Tầm nhìn / Sứ mệnh / Triết lý / Văn hoá */}
      <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              Tầm nhìn
            </h3>
            <p className="text-sm text-slate-600">
              Trở thành nhà cung cấp các sản phẩm công nghệ số và dịch vụ số 1 Việt Nam.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-600">Sứ mệnh</h3>
            <p className="text-sm text-slate-600">
              Cam kết mang đến cho khách hàng những sản phẩm với giá tốt nhất.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              Triết lý kinh doanh
            </h3>
            <p className="text-sm text-slate-600">
              Trở thành nhà cung cấp được nhiều khách hàng yêu thích trong và ngoài nước.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              Văn hóa làm việc
            </h3>
            <div className="space-y-3 text-sm text-slate-600">
              <div>
                <p className="font-semibold">Đối với khách hàng</p>
                <p>
                  Nhận thức rằng khách hàng là người mang lại lợi ích cho công ty. Luôn thân thiện,
                  tôn trọng và hết lòng hỗ trợ khách hàng trong mọi lời nói và hành động.
                </p>
              </div>
              <div>
                <p className="font-semibold">Đối với đối thủ cạnh tranh</p>
                <p>
                  Luôn cầu thị, học hỏi từ đối thủ. Cùng thúc đẩy nhau phát triển để mang lại giá
                  trị tốt hơn cho khách hàng và thị trường.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Vì sao khách hàng chọn ShopBNH */}
      <section className="space-y-6">
        <div>
          <h2 className="text-lg font-bold text-blue-600">1. Vì sao khách hàng chọn Shop BNH?</h2>
          <p className="mt-2 text-sm text-slate-600">
            Hiện nay có rất nhiều đơn vị cung cấp phần mềm trên mạng. Dưới đây là lý do khách hàng
            tin tưởng lựa chọn Shop BNH.
          </p>
        </div>

        <div className="space-y-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div>
            <h3 className="text-sm font-semibold">1. Uy tín luôn được đặt lên hàng đầu</h3>
            <p className="mt-2 text-sm text-slate-600">
              Shop BNH là một tên tuổi lâu đời trong cộng đồng cung cấp sản phẩm số. Trong suốt thời
              gian hoạt động, chúng tôi đã:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>
                <strong>3 năm</strong> liên tiếp là đơn vị chuyên cung cấp sản phẩm số uy tín tại
                Việt Nam.
              </li>
              <li>
                Fanpage Facebook với hơn <strong>20.000 người theo dõi</strong> (
                <Link
                  href="https://www.facebook.com/shopbnh2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Shop BNH – Cung Cấp Bản Quyền Giá Tốt
                </Link>
                ).
              </li>
              <li>
                Xây dựng một cộng đồng lớn mạnh, mang lại nhiều thông tin và cơ hội kết nối cho mọi
                người.
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-dashed border-slate-200">
            <h3 className="text-sm font-semibold">2. Sản phẩm đa dạng</h3>
            <p className="mt-2 text-sm text-slate-600">
              Với hàng trăm sản phẩm trên website{' '}
              <Link
                href="https://shopbnh.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://shopbnh.vn/
              </Link>
              , chúng tôi tự tin mang đến cho khách hàng gần như mọi nhu cầu trong thế giới sản phẩm
              công nghệ số:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>
                Các phần mềm học tập: ELSA Speak, eJOY English, Grammarly Premium, Duolingo,
                Turnitin, Quizizz, Quizlet, Mate Translate Pro, QuillBot Premium…
              </li>
              <li>
                Tài khoản làm việc: Adobe All Apps, Canva Pro, Capcut Pro, PicsArt Gold, Lightroom
                Premium, VSCO, Remini, Doodly…
              </li>
              <li>Tài khoản giải trí: Spotify Premium, Zing MP3 VIP, NhacCuaTui, Apple Music…</li>
              <li>Cùng nhiều phần mềm và tài khoản khác.</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-dashed border-slate-200">
            <h3 className="text-sm font-semibold">3. Hình thức thanh toán</h3>
            <p className="mt-2 text-sm text-slate-600">
              Chúng tôi mang đến trải nghiệm thanh toán thuận tiện, đa dạng hình thức để khách hàng
              dễ dàng lựa chọn:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>
                Chuyển khoản ngân hàng (Vietcombank, ...), ví điện tử MoMo, và nhiều hình thức khác.
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-dashed border-slate-200">
            <h3 className="text-sm font-semibold">4. Chế độ bảo hành và hỗ trợ</h3>
            <p className="mt-2 text-sm text-slate-600">
              Shop BNH cam kết bảo hành rõ ràng cho từng sản phẩm. Bạn luôn nhận được sự hỗ trợ tận
              tâm từ đội ngũ tư vấn 24/7, hoàn toàn miễn phí.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Thông tin liên hệ */}
      <section className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-blue-600">2. Các thông tin liên hệ với Shop BNH</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3 text-sm text-slate-600">
            <div>
              <p className="font-semibold">Email liên hệ</p>
              <ul className="mt-1 space-y-1 pl-4">
                <li>
                  Liên quan đến đơn hàng, dịch vụ:{' '}
                  <Link href="mailto:sales@shopbnh.vn" className="text-blue-600 hover:underline">
                    sales@shopbnh.vn
                  </Link>
                </li>
                <li>
                  Liên quan đến bảo hành, hỗ trợ:{' '}
                  <Link href="mailto:support@shopbnh.vn" className="text-blue-600 hover:underline">
                    support@shopbnh.vn
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-1">
              <p>
                <span className="font-semibold">Zalo:</span>{' '}
                <Link
                  href="http://zalo.me/0329846666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  032 984 6666
                </Link>
              </p>
            </div>

            <div>
              <p>
                <span className="font-semibold">Fanpage:</span>{' '}
                <Link
                  href="https://www.facebook.com/shopbnh2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Shop BNH – Cung Cấp Bản Quyền Giá Tốt
                </Link>
              </p>
            </div>
          </div>

          <div className="space-y-3 text-sm text-slate-600">
            <div>
              <p className="font-semibold">Địa chỉ văn phòng làm việc</p>
              <p>Bắc Ninh.</p>
            </div>
            <div>
              <p className="font-semibold">Giờ làm việc</p>
              <p>08:00 – 22:00, phục vụ tất cả các ngày trong tuần (kể cả Lễ &amp; Tết).</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
