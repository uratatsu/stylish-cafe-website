'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-cafe-brown">
              Café Serene
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-cafe-dark hover:text-cafe-brown transition-colors">
              Home
            </Link>
            <Link href="/menu" className="text-cafe-dark hover:text-cafe-brown transition-colors">
              Menu
            </Link>
            <Link href="/about" className="text-cafe-dark hover:text-cafe-brown transition-colors">
              About
            </Link>
            <Link href="/gallery" className="text-cafe-dark hover:text-cafe-brown transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="text-cafe-dark hover:text-cafe-brown transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cafe-brown"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4 p-4">
            <Link 
              href="/" 
              className="text-cafe-dark hover:text-cafe-brown transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/menu" 
              className="text-cafe-dark hover:text-cafe-brown transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              href="/about" 
              className="text-cafe-dark hover:text-cafe-brown transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/gallery" 
              className="text-cafe-dark hover:text-cafe-brown transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/contact" 
              className="text-cafe-dark hover:text-cafe-brown transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header