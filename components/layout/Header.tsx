"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, Leaf, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import logo from './../../pubilc/images/logo/TM-1.png'

import { cn } from '@/lib/utils'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [productDropdownOpen, setProductDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Products', 
      path: '/products',
      dropdown: true,
      subItems: [
        { name: 'Fruits', path: '/products/fruits' },
        { name: 'Vegetables', path: '/products/vegetables' },
        { name: 'Dehydrated Foods', path: '/products/dehydrated-foods' }
      ]
    },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b"
    >
      <div className={cn(
        'fixed w-full top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}>
        <div className="container-custom">
          <div className="flex flex-col w-full">
            {/* Top bar */}
            <div className="hidden md:flex justify-between items-center pb-2 p-2 border-b border-gray-200 bg-white rounded-lg">
              <div className="flex items-center text-sm text-gray-600">
                <div className="flex items-center mr-6 text-black text-bold">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center text-black text-bold">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  <span>info@thetrademates.com</span>
                </div>
              </div>
            </div>
            
            {/* Main header */}
            <div className="flex justify-between items-center pt-2">
              <Link href="/" className="flex items-center">
              <Image src={logo} alt="Logo" width={180} height={80} />

              
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map(link => (
                  <div key={link.name} className="relative group">
                    {link.dropdown ? (
                      <div>
                        <button 
                          onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                          onMouseEnter={() => setProductDropdownOpen(true)}
                          className={cn(
                            "flex items-center space-x-1 nav-item font-medium transition-colors duration-300",
                            pathname.startsWith(link.path) ? "text-secondary" : scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-secondary"
                          )}
                        >
                          <span>{link.name}</span>
                          <ChevronDown className="h-4 w-4" />
                        </button>
                        
                        <div 
                          className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50 transform origin-top-left transition-all duration-200 opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible"
                          onMouseLeave={() => setProductDropdownOpen(false)}
                        >
                          {link.subItems?.map(subItem => (
                            <Link 
                              key={subItem.name} 
                              href={subItem.path}
                              className={cn(
                                "block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-black transition-colors duration-150",
                                pathname === subItem.path && "bg-primary/10 text-primary"
                              )}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.path}
                        className={cn(
                          "nav-item font-medium transition-colors duration-300",
                          pathname === link.path ? "text-secondary" : scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-secondary"
                        )}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Navigation Toggle */}
              <button
                className="md:hidden text-gray-800"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? 
                  <X className={cn("h-6 w-6 transition-colors", scrolled ? "text-gray-800" : "text-white")} /> : 
                  <Menu className={cn("h-6 w-6 transition-colors", scrolled ? "text-gray-800" : "text-white")} />
                }
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <div className="container-custom py-4">
                <nav className="flex flex-col space-y-3">
                  {navLinks.map(link => (
                    <div key={link.name}>
                      {link.dropdown ? (
                        <div>
                          <button 
                            onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                            className={cn(
                              "flex items-center justify-between w-full py-2 nav-item font-medium",
                              pathname.startsWith(link.path) ? "text-secondary" : "text-gray-800"
                            )}
                          >
                            <span>{link.name}</span>
                            <ChevronDown className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              productDropdownOpen && "rotate-180"
                            )} />
                          </button>
                          
                          <AnimatePresence>
                            {productDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 mt-1 border-l-2 border-primary/30 space-y-2"
                              >
                                {link.subItems?.map(subItem => (
                                  <Link 
                                    key={subItem.name} 
                                    href={subItem.path}
                                    className={cn(
                                      "block py-1.5 text-sm",
                                      pathname === subItem.path ? "text-primary font-medium" : "text-gray-600 hover:text-primary"
                                    )}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.path}
                          className={cn(
                            "block py-2 nav-item font-medium",
                            pathname === link.path ? "text-secondary" : "text-gray-800 hover:text-primary"
                          )}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-primary" />
                    <span>   +91 6359621639  <span className='text-white'>|</span> +91 704362827con</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-primary" />
                    <span>info@thetrademates.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header