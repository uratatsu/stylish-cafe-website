import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-cafe-dark text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-serif mb-4">Café Serene</h3>
            <p className="text-gray-300 mb-4">
              A sanctuary in the city where quality coffee meets tranquil ambiance.
              Experience our carefully crafted menu in a space designed for comfort and connection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-300 hover:text-cafe-accent transition-colors">
                Home
              </Link>
              <Link href="/menu" className="text-gray-300 hover:text-cafe-accent transition-colors">
                Menu
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-cafe-accent transition-colors">
                About
              </Link>
              <Link href="/gallery" className="text-gray-300 hover:text-cafe-accent transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-cafe-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif mb-4">Find Us</h3>
            <address className="not-italic text-gray-300 mb-4">
              <p>123 Café Street</p>
              <p>Urban District, City 10001</p>
              <p className="mt-3">Phone: (555) 123-4567</p>
              <p>Email: hello@cafeserene.com</p>
            </address>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cafe-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cafe-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cafe-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="pt-6 mt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {currentYear} Café Serene. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-cafe-accent transition-colors">
              Privacy Policy
            </Link>
            {' · '}
            <Link href="/terms" className="hover:text-cafe-accent transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer