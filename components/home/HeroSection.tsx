"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const heroImages = [
  {
    src: "https://images.pexels.com/photos/2387392/pexels-photo-2387392.jpeg",
    alt: "Mango harvest"
  },
  {
    src: "https://images.pexels.com/photos/2893638/pexels-photo-2893638.jpeg",
    alt: "Fresh vegetables"
  },
  {
    src: "https://images.pexels.com/photos/5529583/pexels-photo-5529583.jpeg",
    alt: "Farm fields"
  }
]

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % heroImages.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero-section">
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image 
            src={heroImages[currentImage].src}
            alt={heroImages[currentImage].alt}
            fill
            className={cn(
              "object-cover transition-opacity duration-300",
              isLoading ? "opacity-0" : "opacity-100"
            )}
            priority
            onLoad={() => setIsLoading(false)}
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      <div className="hero-content">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Premium Agricultural Products Exported Worldwide
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              High-quality fruits, vegetables, and dehydrated foods from the heart of India to the world
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild
                size="lg" 
                className={cn(
                  "bg-primary hover:bg-primary/90 text-white",
                  "rounded-full px-8"
                )}
              >
                <Link href="/products">
                  Explore Products
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className={cn(
                  "bg-secondary hover:bg-secondary/90 text-white",
                  "rounded-full px-8"
                )}
              >
                <Link href="/contact">
                  Contact Us <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              index === currentImage ? "bg-white w-8" : "bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection