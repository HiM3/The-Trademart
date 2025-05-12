'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import FreshPomegranates from "../../pubilc/images/FreshPomegranates.jpg" 
import { motion } from 'framer-motion'
import { staggerChildren, fadeIn } from '@/lib/animations'

const products = [
  {
    id: 1,
    name: 'Fresh Mangoes',
    category: 'Fruits',
    image: 'https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg',
    description: 'Sweet and juicy alphonso mangoes, freshly harvested and export-ready',
    link: '/products/fruits'
  },
  {
    id: 2,
    name: 'Premium Onions',
    category: 'Vegetables',
    image: 'https://images.pexels.com/photos/144206/pexels-photo-144206.jpeg',
    description: 'High-quality red and yellow onions with excellent shelf life',
    link: '/products/vegetables'
  },
  {
    id: 3,
    name: 'Dehydrated Garlic',
    category: 'Dehydrated Foods',
    image: 'https://images.pexels.com/photos/4198179/pexels-photo-4198179.jpeg',
    description: 'Preservative-free dehydrated garlic flakes with rich aroma',
    link: '/products/dehydrated-foods'
  }
]

const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="heading-secondary mb-4 text-gray-800">Our Featured Products</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our premium selection of agricultural products, harvested at peak freshness and processed with care for export worldwide.
            </p>
          </div>
          <Button 
            asChild
            variant="ghost" 
            className="hidden md:flex items-center mt-4 md:mt-0 text-primary hover:text-primary/90"
          >
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <motion.div 
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {products.map(product => (
            <motion.div
              key={product.id}
              variants={fadeIn}
            >
              <Link 
                href={product.link}
                className="product-card group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-secondary/90 text-white text-xs px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                  <div className="flex items-center text-primary font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 text-center md:hidden">
          <Button 
            asChild
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/5"
          >
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts