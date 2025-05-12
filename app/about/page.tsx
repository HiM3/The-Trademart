import PageHero from '@/components/shared/PageHero'
import Image from 'next/image'
import { Award, FileText, Target, Lightbulb, CheckCircle } from 'lucide-react'
import CountryFlags from '@/components/home/CountryFlags'

export default function AboutPage() {
  return (
    <div>
      <PageHero 
        title="About Trademates"
        subtitle="Learn about our journey, mission, and commitment to quality in agricultural exports"
        imageSrc="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg"
        imageAlt="Harvesting crops"
      />
      
      {/* Company History */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2005, Trademates Exports began as a small family business exporting premium mangoes from Maharashtra. Today, we have grown into one of India&apos;s leading exporters of fresh fruits, vegetables, and dehydrated food products.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been guided by a simple principle: to connect the finest Indian agricultural produce with global markets while ensuring fair returns for farmers and excellent value for our international clients.
              </p>
              <p className="text-gray-600">
                With a presence in over 7 countries and growing, we continue to expand our reach while maintaining our commitment to quality, sustainability, and ethical business practices.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg"
                  alt="Agricultural field"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md mt-6">
                <Image 
                  src="https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg"
                  alt="Quality inspection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="https://dkglobal.ru/images/uslugi/new/produkty.jpg"
                  alt="Packaging facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md mt-6">
                <Image 
                  src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg"
                  alt="Harvesting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision and Mission */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To bridge the gap between Indian farmers and global markets by providing premium agricultural products while promoting sustainable farming practices and ensuring fair trade.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Deliver exceptional quality produce to international markets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Support farmer communities through fair pricing and education</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Implement sustainable and eco-friendly agricultural practices</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h2>
              <p className="text-gray-600 mb-6">
                To be a globally recognized leader in agricultural exports, known for our unwavering commitment to quality, sustainability, and innovation in the industry.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Expand our global footprint to 20+ countries by 2030</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Pioneer innovative farming and preservation techniques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Achieve carbon-neutral operations by implementing green technologies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4 text-gray-800">Our Certifications</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We adhere to the highest standards of quality and safety. Our products and processes are regularly audited and certified by leading national and international organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Original Certifications */}
            <div className="flex bg-gray-50 p-6 rounded-lg">
              <div className="mr-5">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">FSSAI Certification</h3>
                <p className="text-gray-600 mb-3">
                  All our food products are certified by the Food Safety and Standards Authority of India, ensuring they meet the highest safety standards for consumption.
                </p>
                {/* <p className="text-sm text-gray-500">
                  License No: 10022456789012
                </p> */}
              </div>
            </div>
            
            <div className="flex bg-gray-50 p-6 rounded-lg">
              <div className="mr-5">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                  <FileText className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Global G.A.P Certification</h3>
                <p className="text-gray-600 mb-3">
                  Our farming partners follow Good Agricultural Practices as certified by Global G.A.P, ensuring responsible farming methods and product traceability.
                </p>
                {/* <p className="text-sm text-gray-500">
                  Certification No: GGN 4059883456789
                </p> */}
              </div>
            </div>

            <div className="flex bg-gray-50 p-6 rounded-lg">
              <div className="mr-5">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">ISO 22000 Certification</h3>
                <p className="text-gray-600 mb-3">
                  Our food safety management systems are ISO 22000 certified, demonstrating our commitment to controlling food safety hazards.
                </p>
                {/* <p className="text-sm text-gray-500">
                  Certificate No: ISO22000-IND-5678901
                </p> */}
              </div>
            </div>

            <div className="flex bg-gray-50 p-6 rounded-lg">
              <div className="mr-5">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                  <FileText className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">SGS Certification</h3>
                <p className="text-gray-600 mb-3">
                  Our products undergo rigorous quality testing and certification by SGS, a global leader in inspection and verification.
                </p>
                {/* <p className="text-sm text-gray-500">
                  Certificate No: SGS/IND/2023/789012
                </p> */}
              </div>
            </div>

            {/* New Certifications */}
            <div className="flex bg-gray-50 p-6 rounded-lg">
              <div className="mr-5">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">APEDA Registration</h3>
                <p className="text-gray-600 mb-3">
                  Registered with Agricultural and Processed Food Products Export Development Authority for export of agricultural products.
                </p>
                {/* <p className="text-sm text-gray-500">
                  Registration No: APEDA/REG/2023/12345
                </p> */}
              </div>
            </div>
            
            <div className="flex bg-gray-50 p-6 rounded-lg">
              <div className="mr-5">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                  <FileText className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">IEC Certificate</h3>
                <p className="text-gray-600 mb-3">
                  Import Export Code issued by DGFT, Ministry of Commerce and Industry, Government of India.
                </p>
                {/* <p className="text-sm text-gray-500">
                  IEC No: 0123456789
                </p> */}
              </div>
            </div>
            
            <div className="flex bg-gray-50 p-6 rounded-lg">
              <div className="mr-5">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">MSME Registration</h3>
                <p className="text-gray-600 mb-3">
                  Registered under Micro, Small and Medium Enterprises Development Act, supporting India&apos;s industrial growth.
                </p>
                {/* <p className="text-sm text-gray-500">
                  UDYAM No: UDYAM-MH-01-0023456
                </p> */}
              </div>
            </div>
            
            <div className="flex bg-gray-50 p-6 rounded-lg">
              <div className="mr-5">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                  <FileText className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">GST Registration</h3>
                <p className="text-gray-600 mb-3">
                  Registered under Goods and Services Tax, ensuring compliance with Indian taxation laws.
                </p>
                {/* <p className="text-sm text-gray-500">
                  GSTIN: 27AAAAA0000A1Z5
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CountryFlags />
    </div>
  )
}