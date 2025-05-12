import HeroSection from '@/components/home/HeroSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import CountryFlags from '@/components/home/CountryFlags'
import LatestBlogs from '@/components/home/LatestBlogs'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, CheckCircle, Leaf, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="heading-secondary mb-4 text-gray-800">
                Exporting Premium Agricultural Products Since 2005
              </h2>
              <p className="text-gray-600 mb-6">
                At Trademates Exports, we specialize in exporting high-quality fruits, vegetables, and dehydrated food products to markets worldwide. Our produce comes from carefully selected farms across India, ensuring the highest standards of quality and freshness.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800">Premium Quality</h3>
                    <p className="text-sm text-gray-600">Strict quality control at every stage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800">Global Standards</h3>
                    <p className="text-sm text-gray-600">FSSAI and MSME certified products</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800">Timely Delivery</h3>
                    <p className="text-sm text-gray-600">Efficient logistics and shipping</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-800">Sustainable Farming</h3>
                    <p className="text-sm text-gray-600">Environmentally responsible practices</p>
                  </div>
                </div>
              </div>
              <Button 
                asChild
                className="rounded-full bg-primary hover:bg-primary/90"
              >
                <Link href="/about">
                  Learn About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg"
                  alt="Workers examining agricultural products"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 bg-white rounded-lg shadow-lg max-w-[200px]">
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 text-secondary mr-2" />
                  <h3 className="font-semibold text-gray-800">Certified</h3>
                </div>
                <p className="text-xs text-gray-600">
                  Our products meet the highest international quality and safety standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4 text-gray-800">Why Choose Trademates?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are committed to providing the best agricultural products that meet international standards while supporting sustainable farming practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Quality Assurance</h3>
              <p className="text-gray-600">
                We implement rigorous quality control measures at every stage from harvesting to packaging to ensure only the finest products reach our customers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-5">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Competitive Pricing</h3>
              <p className="text-gray-600">
                Our direct relationships with farmers and efficient processes allow us to offer premium products at competitive market prices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-5">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Certified Products</h3>
              <p className="text-gray-600">
                All our exports are FSSAI and MSME certified, meeting international safety and quality standards required for global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CountryFlags />
      
      <LatestBlogs />
    </div>
  )
}