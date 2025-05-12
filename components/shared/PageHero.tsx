"use client"

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/animations'

interface PageHeroProps {
  title: string
  subtitle?: string
  imageSrc: string
  imageAlt: string
  overlay?: boolean
}

const PageHero = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  overlay = true
}: PageHeroProps) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <section className="relative w-full h-[40vh] md:h-[45vh] lg:h-[50vh]">
      <Image 
        src={imageSrc}
        alt={imageAlt}
        fill
        className={cn(
          "object-cover transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        priority
        onLoad={() => setIsLoading(false)}
        quality={90}
      />
      
      {overlay && (
        <div className="absolute inset-0 bg-black/40" />
      )}
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
        <div className="container max-w-4xl">
          <motion.h1 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
              overlay ? "text-white" : "text-gray-900"
            )}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p 
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className={cn(
                "text-lg md:text-xl max-w-2xl mx-auto",
                overlay ? "text-white/90" : "text-gray-700"
              )}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}

export default PageHero