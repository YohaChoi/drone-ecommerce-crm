'use client'
import HeaderEcommerce from '@/components/HeaderEcommerce'
import ShoppingCart from '@/components/ShoppingCart'
import ProductView from '@/views/ProductView'
import React from 'react'

function page() {
  return (
    <div>
        <ShoppingCart />
        <HeaderEcommerce />
        <ProductView />
    </div>
  )
}

export default page