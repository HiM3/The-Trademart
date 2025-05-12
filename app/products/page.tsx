import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const productCategories = [
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    description: 'Premium quality fresh fruits harvested at peak ripeness and handled with care to maintain freshness during export.',
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg',
    link: '/products/fruits',
    products: ['Alphonso Mangoes', 'Sweet Pomegranates', 'Cavendish Bananas', 'Premium Pineapples']
  },
  {
    id: 'vegetables',
    name: 'Fresh Vegetables',
    description: 'Farm-fresh vegetables sourced from trusted growers, with excellent shelf life and nutritional value.',
    image: 'https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg',
    link: '/products/vegetables',
    products: ['Red Onions', 'Premium Potatoes', 'Fresh Tomatoes']
  },
  {
    id: 'dehydrated-foods',
    name: 'Dehydrated Foods',
    description: 'Preservative-free dehydrated food products processed using state-of-the-art technology to maintain flavor and nutrients.',
    image: 'https://images.pexels.com/photos/4198179/pexels-photo-4198179.jpeg',
    link: '/products/dehydrated-foods',
    products: ['Dehydrated Onions', 'Garlic Flakes', 'Mixed Vegetable Flakes']
  }
]

export default function ProductsPage() {
  return (
    <div>
      <PageHero 
        title="Our Products"
        subtitle="Discover our range of premium agricultural products exported worldwide"
        imageSrc="https://images.pexels.com/photos/1153417/pexels-photo-1153417.jpeg"
        imageAlt="Fresh produce"
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4 text-gray-800">Product Categories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of premium agricultural products sourced from selected farms across India. All our products go through strict quality control to ensure they meet global standards.
            </p>
          </div>
          
          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <div 
                key={category.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                  <h2 className="heading-tertiary mb-4 text-gray-800">{category.name}</h2>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-base font-medium mb-3 text-gray-700">Featured Products:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {category.products.map(product => (
                        <li key={product} className="flex items-center text-gray-600">
                          <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    asChild
                    className="rounded-full bg-primary hover:bg-primary/90"
                  >
                    <Link href={category.link}>
                      View All {category.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
                    <Image 
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Quality Assurance */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="heading-secondary mb-6 text-gray-800">Our Quality Assurance</h2>
              <p className="text-gray-600 mb-6">
                At Trademates, quality is our top priority. We implement comprehensive quality control measures throughout our supply chain, from cultivation to packaging and shipping.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Farm Selection</h3>
                  <p className="text-gray-600">
                    We partner only with farms that follow sustainable agricultural practices and maintain high quality standards.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Harvesting</h3>
                  <p className="text-gray-600">
                    Products are harvested at optimal ripeness to ensure the best flavor, texture, and nutritional value.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Processing & Packaging</h3>
                  <p className="text-gray-600">
                    State-of-the-art facilities with strict hygiene protocols ensure products are processed and packaged to preserve freshness during transport.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Cold Chain Management</h3>
                  <p className="text-gray-600">
                    Temperature-controlled storage and shipping maintain product quality from our facilities to international destinations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="https://images.pexels.com/photos/8885030/pexels-photo-8885030.jpeg"
                alt="Quality control in processing facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}