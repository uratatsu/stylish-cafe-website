import Image from 'next/image'
import { Button } from '../components/ui/Button'
import Link from 'next/link'
import { Heart, Coffee, UserPlus, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'About Us | Café Serene',
  description: 'Learn about our story, values, and the team behind Café Serene.',
}

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-cafe-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-cafe-dark">Our Story</h1>
            <p className="text-xl text-gray-700 mb-8">
              From humble beginnings to a beloved urban sanctuary
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <div className="w-full md:w-1/2 relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/cafe-story.jpg"
                alt="Café Serene beginnings"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-serif mb-6 text-cafe-dark">
                Where It All Began
              </h2>
              <p className="text-gray-600 mb-6">
                Café Serene was born in 2018 from a simple yet profound vision: to create a space where exceptional coffee and thoughtful cuisine could bring people together in an atmosphere of warmth and tranquility.
              </p>
              <p className="text-gray-600 mb-6">
                Our founders, Emma and David, met while working at specialty coffee shops across Europe and Asia. Inspired by the diverse coffee cultures they experienced, they returned home with a dream to bring those global influences to their community.
              </p>
              <p className="text-gray-600">
                What began as a small coffee cart at the local farmers' market has evolved into the serene urban sanctuary you see today – but our commitment to quality, sustainability, and community remains unchanged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-cafe-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-cafe-dark">
              Our Values
            </h2>
            <p className="text-xl text-gray-700">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-cafe-brown rounded-full flex items-center justify-center text-white">
                <Coffee size={28} />
              </div>
              <h3 className="text-xl font-serif mb-4 text-cafe-dark">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality, from the beans we source to the ingredients we use and the experience we create.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-cafe-brown rounded-full flex items-center justify-center text-white">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-serif mb-4 text-cafe-dark">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to ethical sourcing, reducing waste, and minimizing our environmental footprint in every aspect of our business.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-cafe-brown rounded-full flex items-center justify-center text-white">
                <UserPlus size={28} />
              </div>
              <h3 className="text-xl font-serif mb-4 text-cafe-dark">Community</h3>
              <p className="text-gray-600">
                We strive to create a welcoming space where connections are formed and our local community can thrive and grow together.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-cafe-brown rounded-full flex items-center justify-center text-white">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-serif mb-4 text-cafe-dark">Passion</h3>
              <p className="text-gray-600">
                We pour our heart into everything we do, from crafting the perfect espresso to creating seasonal menus that inspire and delight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-cafe-dark">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-700">
              The passionate people behind Café Serene
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-cafe-cream p-6 rounded-lg shadow-md">
              <div className="relative h-80 mb-6 rounded-md overflow-hidden">
                <Image
                  src="/images/team-member-1.jpg"
                  alt="Emma Chen - Founder & Head Barista"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-2 text-cafe-dark">Emma Chen</h3>
              <p className="text-cafe-brown font-medium mb-4">Founder & Head Barista</p>
              <p className="text-gray-600">
                With over a decade of experience in specialty coffee, Emma brings passion and precision to every cup. She's a certified Q Grader and former national barista championship finalist.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-cafe-cream p-6 rounded-lg shadow-md">
              <div className="relative h-80 mb-6 rounded-md overflow-hidden">
                <Image
                  src="/images/team-member-2.jpg"
                  alt="David Patel - Founder & Executive Chef"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-2 text-cafe-dark">David Patel</h3>
              <p className="text-cafe-brown font-medium mb-4">Founder & Executive Chef</p>
              <p className="text-gray-600">
                David's culinary journey has taken him from fine dining restaurants to street food stalls across the globe. He brings these diverse influences to our seasonal menu of café favorites.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-cafe-cream p-6 rounded-lg shadow-md">
              <div className="relative h-80 mb-6 rounded-md overflow-hidden">
                <Image
                  src="/images/team-member-3.jpg"
                  alt="Maya Rodriguez - Operations Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-2 text-cafe-dark">Maya Rodriguez</h3>
              <p className="text-cafe-brown font-medium mb-4">Operations Manager</p>
              <p className="text-gray-600">
                With her warm smile and attention to detail, Maya ensures that every aspect of your Café Serene experience exceeds expectations. She's the heart and soul of our daily operations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sustainability Section */}
      <section className="py-16 md:py-24 bg-cafe-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Our Commitment to Sustainability
            </h2>
            <p className="text-xl text-gray-300">
              Making a positive impact on our community and the planet
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif mb-6 text-cafe-accent">Ethical Sourcing</h3>
              <p className="text-gray-300 mb-6">
                We work directly with coffee farmers and cooperatives who are committed to sustainable farming practices and fair labor conditions. By establishing these relationships, we ensure that our supply chain reflects our values.
              </p>
              <h3 className="text-2xl font-serif mb-6 text-cafe-accent">Waste Reduction</h3>
              <p className="text-gray-300">
                From composting our coffee grounds to using compostable packaging, we're constantly seeking ways to minimize waste. Our goal is to be a zero-waste café by 2026.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif mb-6 text-cafe-accent">Community Engagement</h3>
              <p className="text-gray-300 mb-6">
                We actively participate in local initiatives, from beach cleanups to urban garden projects. Our monthly "Coffee for a Cause" event donates 15% of the day's proceeds to local environmental nonprofits.
              </p>
              <h3 className="text-2xl font-serif mb-6 text-cafe-accent">Energy Conservation</h3>
              <p className="text-gray-300">
                Our café is powered by 100% renewable energy, and we've implemented energy-efficient equipment and practices to reduce our carbon footprint.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-cafe-cream text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-cafe-dark">
              Come Be Part of Our Story
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              We'd love to welcome you to Café Serene and share our passion for exceptional coffee, food, and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Link href="/contact">Visit Us</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/menu">Explore Our Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
