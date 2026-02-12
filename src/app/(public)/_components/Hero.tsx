import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import BannerChatGPT from '../assets/images/Banner-CHatGPT.jpg';
import TaiKhoanNetflix from '../assets/images/Tai-khoan-Netflix.jpg';
import TaiKhoanSpotify from '../assets/images/gemini.jpg';
import VPN from '../assets/images/VPN.jpg';

import TaiKhoanCapcutPro from '../assets/images/Tai-khoan-Capcut-Pro.jpg';
import SpotifyChinhChu from '../assets/images/Spotify-chinh-chu.jpg';
import GoogleAIUltra from '../assets/images/Nang-Cap-Tai-Khoan-Google-AI-Ultra.jpg';

export default function Hero() {
  return (
    <section className="space-y-4 md:space-y-0 grid grid-cols-2 md:gap-4">
      {/* LEFT */}
      <div className="relative h-[280px] md:h-[460px] overflow-hidden rounded-2xl">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="h-full"
        >
          {[BannerChatGPT, TaiKhoanNetflix, TaiKhoanSpotify, VPN].map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[280px] md:h-[460px] w-full">
                <Image
                  src={src}
                  alt={`Main banner ${index + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* RIGHT */}
      <div className="grid gap-4 md:h-[460px] md:grid-rows-[1fr,1fr]">
        <div className="relative h-[160px] overflow-hidden rounded-2xl md:h-[300px]">
          <Image src={TaiKhoanCapcutPro} alt="CapCut" fill className="object-cover" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 md:h-[300px]">
          <div className="relative h-[160px] overflow-hidden rounded-2xl md:h-[150px]">
            <Image src={SpotifyChinhChu} alt="Spotify" fill className="object-cover" />
          </div>

          <div className="relative h-[160px] overflow-hidden rounded-2xl md:h-[150px]">
            <Image src={GoogleAIUltra} alt="Google AI Ultra" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
