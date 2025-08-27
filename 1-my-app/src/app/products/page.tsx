import Link from 'next/link'
import React from 'react'

const Products = () => {
  return (
    <div>
      THIS PAGE FOR PRODUCTS
      <br />
      <Link href="/products/allproducts">All Products</Link>
      <br />
      <Link href="/products/specificproduct">Specefic Product</Link>
    </div>
  )
}

export default Products
