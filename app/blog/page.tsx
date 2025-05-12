import PageHero from '@/components/shared/PageHero'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

const blogs = [
  {
    id: 1,
    title: 'Sustainable Farming Practices for Export-Quality Produce',
    excerpt: 'Learn how modern sustainable farming methods are helping produce better quality fruits and vegetables for the global market.',
    image: 'https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg',
    date: 'May 15, 2023',
    readTime: '5 min read',
    slug: 'sustainable-farming-practices',
    category: 'Farming'
  },
  {
    id: 2,
    title: 'The Growing Demand for Indian Mangoes in International Markets',
    excerpt: 'Discover why Indian mangoes, particularly Alphonso and Kesar varieties, are becoming increasingly popular worldwide.',
    image: 'https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg',
    date: 'April 22, 2023',
    readTime: '4 min read',
    slug: 'indian-mangoes-international-markets',
    category: 'Market Trends'
  },
  {
    id: 3,
    title: 'Benefits of Dehydrated Foods in Modern Culinary Applications',
    excerpt: 'Explore how dehydrated foods are revolutionizing cooking processes while maintaining nutritional value and flavor.',
    image: 'https://images.pexels.com/photos/5945660/pexels-photo-5945660.jpeg',
    date: 'March 10, 2023',
    readTime: '6 min read',
    slug: 'benefits-dehydrated-foods',
    category: 'Food Processing'
  },
  {
    id: 4,
    title: 'Navigating International Food Safety Standards for Agricultural Exports',
    excerpt: 'A comprehensive guide to understanding and complying with international food safety regulations for agricultural exporters.',
    image: 'https://images.pexels.com/photos/5945674/pexels-photo-5945674.jpeg',
    date: 'February 28, 2023',
    readTime: '7 min read',
    slug: 'food-safety-standards-exports',
    category: 'Regulations'
  },
  {
    id: 5,
    title: 'Cold Chain Management: Preserving Quality in Agricultural Exports',
    excerpt: 'How advanced cold chain solutions are helping maintain freshness and quality of exported produce from farm to international shelves.',
    image: 'https://images.pexels.com/photos/7788948/pexels-photo-7788948.jpeg',
    date: 'January 15, 2023',
    readTime: '5 min read',
    slug: 'cold-chain-management',
    category: 'Logistics'
  },
  {
    id: 6,
    title: 'The Impact of Climate Change on Indian Agriculture and Export Markets',
    excerpt: 'Examining how changing weather patterns are affecting crop production and what it means for the future of agricultural exports.',
    image: 'https://images.pexels.com/photos/5042292/pexels-photo-5042292.jpeg',
    date: 'December 5, 2022',
    readTime: '8 min read',
    slug: 'climate-change-agriculture-exports',
    category: 'Environment'
  }
]

export default function BlogPage() {
  return (
    <div>
      <PageHero 
        title="Our Blog"
        subtitle="Insights, updates, and knowledge from the world of agricultural exports"
        imageSrc="https://www.gov.kz/uploads/2024/3/1/3229925eda423bde48b226fea9295f5d_original.247031.jpg"
        imageAlt="Person writing on a desk"
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="heading-secondary text-gray-800">Latest Articles</h2>
            
            <div className="relative mt-4 md:mt-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60 w-full md:w-64"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map(blog => (
              <Link 
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg flex flex-col h-full"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary/90 text-white text-xs px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2 hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center text-primary font-medium mt-auto">
                    <span>Read more</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="mr-2 border-gray-300">
              Previous
            </Button>
            <Button variant="outline" className="border-gray-300">
              Next
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="py-16 bg-primary/10">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Stay updated with the latest trends, insights, and news from the agricultural export industry. No spam, just valuable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white py-3 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}