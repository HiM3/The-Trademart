"use client"

import PageHero from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Loader2
} from 'lucide-react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from 'react'
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "../../components/ui/toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
  })

  const { toast } = useToast();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      toast({
      reset(): "Message sent!",
    } catch (error) {"We'll get back to you as soon as possible.",
      toast({
        title: "Something went wrong.",
        description: "Please try again later.",
        variant: "destructive"
      })title: "Something went wrong.",
    } finally {tion: "Please try again later.",
      setIsSubmitting(false)e"
    } })
  } } finally {
      setIsSubmitting(false)
  return (
    <div>
      <PageHero 
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, orders, or any questions"
        imageSrc="https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg"
        imageAlt="Customer service representative"
      />subtitle="Get in touch with our team for inquiries, orders, or any questions"
        imageSrc="https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg"
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Information */}ng bg-white">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you&apos;re interested in our products, have a question about shipping, or want to discuss a potential partnership, we&apos;re here to help.
              </p>className="text-2xl font-semibold mb-6 text-gray-800">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
              <div className="space-y-6"> in our products, have a question about shipping, or want to discuss a potential partnership, we're here to help.
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>ssName="flex">
                  <div>className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <h3 className="text-lg font-medium text-gray-800">Our Location</h3>
                    <p className="text-gray-600 mt-1">
                      123 Agriculture Boulevard, Countryside District, Maharashtra, India - 400001
                    </p>className="text-lg font-medium text-gray-800">Our Location</h3>
                  </div>lassName="text-gray-600 mt-1">
                </div>123 Agriculture Boulevard, Countryside District, Maharashtra, India - 400001
                    </p>
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>ssName="flex">
                  <div>className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <h3 className="text-lg font-medium text-gray-800">Phone Number</h3>
                    <p className="text-gray-600 mt-1">
                      +91 9876543210
                    </p>className="text-lg font-medium text-gray-800">Phone Number</h3>
                    <p className="text-gray-600">t-1">
                      +91 9871234567
                    </p>
                  </div>lassName="text-gray-600">
                </div>+91 9871234567
                    </p>
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>ssName="flex">
                  <div>className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <h3 className="text-lg font-medium text-gray-800">Email Address</h3>
                    <p className="text-gray-600 mt-1">
                      info@thetrademates.com
                    </p>className="text-lg font-medium text-gray-800">Email Address</h3>
                    <p className="text-gray-600">t-1">
                      sales@thetrademates.com
                    </p>
                  </div>lassName="text-gray-600">
                </div>sales@thetrademates.com
                    </p>
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>ssName="flex">
                  <div>className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <h3 className="text-lg font-medium text-gray-800">Working Hours</h3>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>className="text-lg font-medium text-gray-800">Working Hours</h3>
                    <p className="text-gray-600">t-1">
                      Saturday: 9:00 AM - 1:00 PM6:00 PM
                    </p>
                  </div>lassName="text-gray-600">
                </div>Saturday: 9:00 AM - 1:00 PM
              </div></p>
            </div></div>
                </div>
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h2>
              * Contact Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">>Send Us a Message</h2>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      id="name" <span className="text-red-500">*</span>
                      type="text"
                      {...register("name")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60"
                      placeholder="John Doe"
                    />{...register("name")}
                    {errors.name && (ll px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60"
                      <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                    )}
                  </div>ors.name && (
                      <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      id="email"ess <span className="text-red-500">*</span>
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60"
                      placeholder="john@example.com"
                    />{...register("email")}
                    {errors.email && (l px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60"
                      <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>ors.email && (
                </div><p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                    )}
                <div>iv>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    id="subject"n className="text-red-500">*</span>
                    type="text"
                    {...register("subject")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60"
                    placeholder="Product Inquiry"
                  />{...register("subject")}
                  {errors.subject && (px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60"
                    <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>
                  )}
                </div>ors.subject && (
                    <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textareamlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    id="message"n className="text-red-500">*</span>
                    rows={5}
                    {...register("message")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60"
                    placeholder="Your message here..."
                  ></textarea>er("message")}
                  {errors.message && (px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/60"
                    <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                  )}/textarea>
                </div>ors.message && (
                    <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                  disabled={isSubmitting}
                > type="submit" 
                  {isSubmitting ? ( bg-primary hover:bg-primary/90 text-white py-3"
                    <>bled={isSubmitting}
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...? (
                    </>
                  ) : (Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <>Sending...
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}  <Send className="mr-2 h-4 w-4" />
                </Button>d Message
              </form>/>
            </div>)}
          </div></Button>
        </div></form>
      </section>v>
          </div>
      {/* Map Section */}
      <section className="py-0">
        <div className="h-[400px] w-full bg-gray-300 relative">
        <iframe ction */}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.2360395490896!2d72.64627077476894!3d22.978346167978216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e897fb7789d81%3A0xa687ce92ac1677ad!2sAshirwad%20Flora!5e0!3m2!1sen!2sin!4v1746628010006!5m2!1sen!2sin" 
            width="100%" -[400px] w-full bg-gray-300 relative">
            height="100%" 
            style={{ border: 0 }} maps/embed?pb=!1m18!1m12!1m3!1d3673.2360395490896!2d72.64627077476894!3d22.978346167978216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e897fb7789d81%3A0xa687ce92ac1677ad!2sAshirwad%20Flora!5e0!3m2!1sen!2sin!4v1746628010006!5m2!1sen!2sin" 
            allowFullScreen={false} 
            loading="lazy"
            title="Company Location"
          ></iframe>lScreen={false} 
        </div>ading="lazy"
      </section>e="Company Location"
    </div>></iframe>
  )     </div>
}     </section>
    </div>
  )
}