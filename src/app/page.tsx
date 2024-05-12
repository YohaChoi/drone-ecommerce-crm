'use client'
import HeaderEcommerce from '@/components/HeaderEcommerce'
import ShoppingCart from '@/components/ShoppingCart'
import HeroView from '@/views/HeroView'
import ProductsView from '@/views/ProductsView'

export default function Example() {

  return (
    <div className="bg-black">
      <ShoppingCart />

      <HeaderEcommerce />
      <HeroView />
      <ProductsView />
    </div>
  )
}