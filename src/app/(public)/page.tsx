'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import FlashSaleTet from './_components/FlashSaleTet';
import Hero from './_components/Hero';
import ProductList from './_components/ProductList';
export default function HomePublicPage() {
  return (
    <div className="space-y-6">
      {/* Hero banners */}
      <Hero />
      {/* Flash Sale Section */}
      <FlashSaleTet />

      {/* Category + product list */}
      <ProductList /> 
    </div>
  );
}
