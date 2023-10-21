import React from 'react'
import CarouselSection from './CarouselSection'
import ProductsSection from './ProductsSection'
import CategoriesSection from './CategoriesSection'
import SearchSection from './SearchSection'
export default function Home() {
  return (
    <div>
        <CarouselSection />
        <ProductsSection />
        <CategoriesSection />
        <SearchSection />
    </div>
  )
}
