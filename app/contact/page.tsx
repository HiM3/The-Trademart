"use client"

import PageHero from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })

      reset()
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Please try again later.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, orders, or any questions"
        imageSrc="https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg"
        imageAlt="Customer service representative"
      />

      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Whether you're interested in our products, have a question about shipping, or want to discuss a partnership, we're here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Our Location</h3>
                  <p className="text-gray-600 mt-1">
                    123 Agriculture Boulevard, Countryside District, Maharashtra, India - 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Phone Number</h3>
                  <p className="text-gray-600 mt-1">+91 9876543210</p>
                  <p className="text-gray-600">+91 9871234567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Email Address</h3>
                  <p className="text-gray-600 mt-1">info@thetrademates.com</p>
                  <p className="text-gray-600">sales@thetrademates.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Working Hours</h3>
                  <p className="text-gray-600 mt-1">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("subject")}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Product Inquiry"
                />
                {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  {...register("message")}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <div className="h-[400px] w-full bg-gray-300 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.2360395490896!2d72.64627077476894!3d22.978346167978216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84bbbee93333%3A0x5d034c1e3a6cb3d!2sGujarat%20Science%20City!5e0!3m2!1sen!2sin!4v1684321985269!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  )
}
