import Link from 'next/link'
import Image from 'next/image'
import { Button } from './components/ui/Button'
import { Coffee, Clock, Award, Utensils } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-bg.jpg"
            alt="Stylish café interior"
            fill
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRm knyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
        
        {/* Hero content */}
        <div className="relative z-20 text-center text-white max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 font-bold">
            Welcome to Café Serene
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-100">
            A stylish urban retreat where exceptional coffee meets artful cuisine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-medium">
              <Link href="/menu" className="flex items-center space-x-2">
                <Utensils size={18} />
                <span>Explore Our Menu</span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white text-white">
              <Link href="/contact" className="flex items-center space-x-2">
                <Clock size={18} />
                <span>Reserve a Table</span>
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path 
              d="M12 5V19M12 19L19 12M12 19L5 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 bg-cafe-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-cafe-dark">
            Experience the Difference
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-cafe-brown rounded-full flex items-center justify-center text-white">
                <Coffee size={28} />
              </div>
              <h3 className="text-xl font-serif mb-4 text-cafe-dark">Artisan Coffee</h3>
              <p className="text-gray-600">
                Our beans are ethically sourced from sustainable farms and roasted to perfection in-house for the ultimate cup of coffee.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-cafe-brown rounded-full flex items-center justify-center text-white">
                <Utensils size={28} />
              </div>
              <h3 className="text-xl font-serif mb-4 text-cafe-dark">Seasonal Menu</h3>
              <p className="text-gray-600">
                Our chefs craft a seasonally inspired menu using locally sourced ingredients to ensure the freshest flavors all year round.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-cafe-brown rounded-full flex items-center justify-center text-white">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-serif mb-4 text-cafe-dark">Award-Winning Space</h3>
              <p className="text-gray-600">
                Our thoughtfully designed interior creates the perfect ambiance for working, meeting friends, or simply enjoying a moment of tranquility.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <div className="w-full md:w-1/2 relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/about-preview.jpg"
                alt="Cafe interior"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-cafe-dark">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2018, Café Serene was born from a passion for exceptional coffee and a desire to create a welcoming space where people could connect, work, and unwind.
              </p>
              <p className="text-gray-600 mb-8">
                What began as a small coffee cart has grown into a beloved urban sanctuary, where every detail is carefully considered – from our sustainably sourced beans to our handcrafted pastries.
              </p>
              <Button variant="outline">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Menu Preview */}
      <section className="py-24 bg-cafe-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Explore Our Menu
          </h2>
          <p className="text-xl text-cafe-cream/80 max-w-2xl mx-auto mb-12">
            From signature espresso drinks to chef-crafted cuisine, discover our carefully curated menu
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Menu Category 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h3 className="text-xl font-serif mb-4">Coffee & Beverages</h3>
              <p className="text-cafe-cream/80 mb-6">
                Expertly crafted coffee, tea, and specialty drinks for every palate
              </p>
              <Button variant="secondary" size="sm">View Coffee Menu</Button>
            </div>
            
            {/* Menu Category 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h3 className="text-xl font-serif mb-4">Breakfast & Brunch</h3>
              <p className="text-cafe-cream/80 mb-6">
                Morning favorites and hearty brunch options to start your day right
              </p>
              <Button variant="secondary" size="sm">View Breakfast Menu</Button>
            </div>
            
            {/* Menu Category 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
              <h3 className="text-xl font-serif mb-4">Lunch & Dinner</h3>
              <p className="text-cafe-cream/80 mb-6">
                Seasonal dishes featuring locally sourced ingredients
              </p>
              <Button variant="secondary" size="sm">View Main Menu</Button>
            </div>
          </div>
          
          <Button size="lg">
            <Link href="/menu">View Full Menu</Link>
          </Button>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 bg-cafe-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-cafe-dark">
            What Our Guests Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center text-yellow-400 mb-4">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <p className="text-gray-600 italic mb-4">
                "The perfect atmosphere for both work and relaxation. The coffee is exceptional, and the staff is always friendly and attentive."
              </p>
              <div className="font-medium text-cafe-dark">- Emily Johnson</div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center text-yellow-400 mb-4">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <p className="text-gray-600 italic mb-4">
                "I've tried many cafés in the city, but Café Serene stands out with their attention to detail. The seasonal menu never disappoints!"
              </p>
              <div className="font-medium text-cafe-dark">- Michael Thompson</div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center text-yellow-400 mb-4">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <p className="text-gray-600 italic mb-4">
                "This is my go-to spot for meetings and quiet work sessions. The ambiance is perfect, and their lavender latte is simply unmatched."
              </p>
              <div className="font-medium text-cafe-dark">- Sarah Rodriguez</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-cafe-dark text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Join Us For A Coffee
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Whether you're looking for a morning pick-me-up, a cozy lunch spot, or a tranquil workspace, we'd love to welcome you to Café Serene.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-medium">
              <Link href="/contact">Find Us</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/menu">View Menu</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
