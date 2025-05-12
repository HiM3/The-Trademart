import Link from 'next/link'
import { Leaf, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import logo from './../../pubilc/images/logo/TM-1.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
            <Image src={logo} alt="Logo" width={180} height={80} />
            </div>
            <p className="text-gray-400 mb-4">
            Your Trusted Partner in Agricultural Exports
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" className="bg-primary/20 hover:bg-[#1877F2]/20 p-2 rounded-full transition-colors group">
                <Facebook className="h-5 w-5 text-primary group-hover:text-[#1877F2]" />
              </a>
              <a href="https://wa.me/916359621639" className="bg-primary/20 hover:bg-[#25D366]/20 p-2 rounded-full transition-colors group">
                <MessageCircle className="h-5 w-5 text-primary group-hover:text-[#25D366]" />
              </a>
              <a href="mailto:info@thetrademates.com" className="bg-primary/20 hover:bg-[#EA4335]/20 p-2 rounded-full transition-colors group">
                <Mail className="h-5 w-5 text-primary group-hover:text-[#EA4335]" />
              </a>
              <a href="https://www.instagram.com/trademates_global?igsh=bG8weGZrYzFzODBs&utm_source=qr" className="bg-primary/20 hover:bg-[#E4405F]/20 p-2 rounded-full transition-colors group">
                <Instagram className="h-5 w-5 text-primary group-hover:text-[#E4405F]" />
              </a>
              <a href="https://www.linkedin.com/company/trademates-global/" className="bg-primary/20 hover:bg-[#0A66C2]/20 p-2 rounded-full transition-colors group">
                <Linkedin className="h-5 w-5 text-primary group-hover:text-[#0A66C2]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-400 hover:text-primary transition-colors">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/fruits" className="text-gray-400 hover:text-primary transition-colors">
                  Fruits
                </Link>
              </li>
              <li>
                <Link href="/products/vegetables" className="text-gray-400 hover:text-primary transition-colors">
                  Vegetables
                </Link>
              </li>
              <li>
                <Link href="/products/dehydrated-foods" className="text-gray-400 hover:text-primary transition-colors">
                  Dehydrated Foods
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                +91 6359621639  <span className='text-white'>|</span> +91 7043628272
                </span>
              </div>
              <div className="flex">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@thetrademates.com</span>
              </div>
              <div className="flex">
                <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                Shope no. 1 Ashirwad Flora, opp. Ankur International School, New Maninagar, Ahmedabad-382449
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} thetrademates Exports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer