'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  
  type GalleryImage = {
    src: string;
    alt: string;
    category: string;
    width: number;
    height: number;
  }
  
  // Gallery image data
  const images: GalleryImage[] = [
    {
      src: '/images/gallery/interior-1.jpg',
      alt: 'Café Serene interior with comfortable seating',
      category: 'interior',
      width: 1200,
      height: 800,
    },
    {
      src: '/images/gallery/interior-2.jpg',
      alt: 'Cozy corner with bookshelves',
      category: 'interior',
      width: 800,
      height: 1200,
    },
    {
      src: '/images/gallery/interior-3.jpg',
      alt: 'Counter and barista station',
      category: 'interior',
      width: 1200,
      height: 800,
    },
    {
      src: '/images/gallery/coffee-1.jpg',
      alt: 'Latte art with heart design',
      category: 'coffee',
      width: 800,
      height: 800,
    },
    {
      src: '/images/gallery/coffee-2.jpg',
      alt: 'Pour over coffee preparation',
      category: 'coffee',
      width: 800,
      height: 1200,
    },
    {
      src: '/images/gallery/coffee-3.jpg',
      alt: 'Espresso shot being pulled',
      category: 'coffee',
      width: 1200,
      height: 800,
    },
    {
      src: '/images/gallery/food-1.jpg',
      alt: 'Avocado toast with poached egg',
      category: 'food',
      width: 1200,
      height: 800,
    },
    {
      src: '/images/gallery/food-2.jpg',
      alt: 'Seasonal fruit and granola bowl',
      category: 'food',
      width: 800,
      height: 800,
    },
    {
      src: '/images/gallery/food-3.jpg',
      alt: 'Grilled cheese sandwich with tomato soup',
      category: 'food',
      width: 1200,
      height: 800,
    },
    {
      src: '/images/gallery/food-4.jpg',
      alt: 'Chocolate espresso cake',
      category: 'food',
      width: 800,
      height: 1200,
    },
    {
      src: '/images/gallery/events-1.jpg',
      alt: 'Coffee tasting event',
      category: 'events',
      width: 1200,
      height: 800,
    },
    {
      src: '/images/gallery/events-2.jpg',
      alt: 'Live music evening',
      category: 'events',
      width: 800,
      height: 1200,
    },
  ]
  
  // Filter images based on active category
  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(image => image.category === activeFilter)
    
  // Category filters
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'interior', name: 'Interior' },
    { id: 'coffee', name: 'Coffee' },
    { id: 'food', name: 'Food' },
    { id: 'events', name: 'Events' },
  ]
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-cafe-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Gallery</h1>
            <p className="text-xl text-gray-300 mb-8">
              A visual journey through our space, creations, and experiences
            </p>
          </div>
        </div>
      </section>
      
      {/* Filter Buttons */}
      <section className="py-8 bg-cafe-cream sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeFilter === category.id
                    ? 'bg-cafe-brown text-white'
                    : 'bg-white text-cafe-dark hover:bg-cafe-brown/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredImages.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No images found for this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                    <p className="text-white p-4 font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close modal"
          >
            <X size={32} />
          </button>
          
          <div 
            className="relative max-w-screen-lg max-h-screen p-2"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-[80vh] w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white text-center mt-4">{selectedImage.alt}</p>
          </div>
        </div>
      )}
      
      {/* Instagram Section */}
      <section className="py-16 bg-cafe-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6 text-cafe-dark">Follow Our Journey</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Stay updated with our latest creations, events, and behind-the-scenes moments by following us on Instagram.
          </p>
          
          <a 
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-cafe-brown text-white rounded-md hover:bg-cafe-brown/90 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @CafeSerene
          </a>
        </div>
      </section>
      
      {/* Photo Submission CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-6 text-cafe-dark">Share Your Experience</h2>
            <p className="text-lg text-gray-600 mb-8">
              We love seeing Café Serene through your eyes! Tag us in your photos on social media using 
              <span className="font-medium text-cafe-brown"> #CafeSereneExperience</span> for a chance to be featured in our gallery.
            </p>
            <div className="p-6 bg-cafe-cream rounded-lg">
              <h3 className="text-xl font-serif mb-4 text-cafe-dark">Monthly Photo Contest</h3>
              <p className="text-gray-600 mb-6">
                Each month, we select one customer photo to win a free coffee and pastry. The winning photo is displayed in our café and featured on our social media.
              </p>
              <p className="text-cafe-brown font-medium">
                Next winner announced: April 1, 2025
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Past Events Gallery */}
      <section className="py-16 bg-cafe-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-cafe-dark text-center">Past Events at Café Serene</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Event 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-60">
                <Image
                  src="/images/gallery/event-coffee-tasting.jpg"
                  alt="Coffee Tasting Workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-cafe-dark mb-2">Coffee Tasting Workshop</h3>
                <p className="text-gray-500 mb-2">February 15, 2025</p>
                <p className="text-gray-600">
                  Our head barista Emma led a workshop on coffee tasting techniques, exploring the flavor profiles of our single-origin beans.
                </p>
              </div>
            </div>
            
            {/* Event 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-60">
                <Image
                  src="/images/gallery/event-jazz-night.jpg"
                  alt="Jazz Night"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-cafe-dark mb-2">Jazz Night</h3>
                <p className="text-gray-500 mb-2">January 28, 2025</p>
                <p className="text-gray-600">
                  Our monthly jazz night featured local musicians playing smooth tunes while guests enjoyed our special evening menu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
