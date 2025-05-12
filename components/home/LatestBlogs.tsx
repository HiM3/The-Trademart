import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const blogs = [
  {
    id: 1,
    title: 'Sustainable Farming Practices for Export-Quality Produce',
    excerpt: 'Learn how modern sustainable farming methods are helping produce better quality fruits and vegetables for the global market.',
    image: 'https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg',
    date: 'May 15, 2023',
    readTime: '5 min read',
    slug: 'sustainable-farming-practices'
  },
  {
    id: 2,
    title: 'The Growing Demand for Indian Mangoes in International Markets',
    excerpt: 'Discover why Indian mangoes, particularly Alphonso and Kesar varieties, are becoming increasingly popular worldwide.',
    image: 'https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg',
    date: 'April 22, 2023',
    readTime: '4 min read',
    slug: 'indian-mangoes-international-markets'
  },
  {
    id: 3,
    title: 'Benefits of Dehydrated Foods in Modern Culinary Applications',
    excerpt: 'Explore how dehydrated foods are revolutionizing cooking processes while maintaining nutritional value and flavor.',
    image: 'https://images.pexels.com/photos/5945660/pexels-photo-5945660.jpeg',
    date: 'March 10, 2023',
    readTime: '6 min read',
    slug: 'benefits-dehydrated-foods'
  }
]

const LatestBlogs = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="heading-secondary mb-4 text-gray-800">Latest from Our Blog</h2>
            <p className="text-gray-600 max-w-2xl">
              Stay updated with the latest trends, insights, and news from the agricultural export industry.
            </p>
          </div>
          <Button 
            asChild
            variant="ghost" 
            className="hidden md:flex items-center mt-4 md:mt-0 text-primary hover:text-primary/90"
          >
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map(blog => (
            <Link 
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="blog-card group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {blog.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="flex items-center text-primary font-medium">
                  <span>Read more</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button 
            asChild
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/5"
          >
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default LatestBlogs