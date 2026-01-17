
import ProductCard from '@/app/ProductCard/page'
import React from 'react'

export default async function CardSection() {
  const res = await fetch('https://grocery-server-sable.vercel.app/latestProducts')
  const data = await res.json()
  console.log(data)
  return (
    <div>
      <div className="text-4xl mt-8  bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-bold text-center">Grocery - Latest Products</div>
      <div className="grid max-w-7xl mt-5 mx-auto  grid-cols-1 gap-4 p-4 md:grid-cols-3 lg:grid-cols-5">
        {data.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

    </div>
  )
}
