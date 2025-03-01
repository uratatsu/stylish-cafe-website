'use client'

import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { MapPin, Clock, Phone, Mail, Send, Calendar } from 'lucide-react'
import { cn, isValidEmail } from '../lib/utils'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    reservationType: 'general',
    date: '',
    time: '',
    guests: '2',
  })
  
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when field is changed
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }
  
  const validateForm = () => {
    const errors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Please enter a valid email'
    }
    
    if (formData.reservationType === 'reservation') {
      if (!formData.date) {
        errors.date = 'Date is required for reservations'
      }
      
      if (!formData.time) {
        errors.time = 'Time is required for reservations'
      }
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    }
    
    return errors
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    
    // Handle form submission - would connect to API in real application
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      reservationType: 'general',
      date: '',
      time: '',
      guests: '2',
    })
  }
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-cafe-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6 text-cafe-dark">Contact Us</h1>
            <p className="text-xl text-gray-700 mb-8">
              We'd love to hear from you! Get in touch with our team or visit us at Café Serene.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info + Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif mb-8 text-cafe-dark">Find Us</h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-cafe-brown text-white p-3 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2 text-cafe-dark">Our Location</h3>
                    <address className="not-italic text-gray-600">
                      <p>123 Café Street</p>
                      <p>Urban District, City 10001</p>
                    </address>
                    <a 
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cafe-brown hover:underline mt-2 inline-block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                
                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-cafe-brown text-white p-3 rounded-full">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2 text-cafe-dark">Hours</h3>
                    <dl className="text-gray-600 grid grid-cols-2 gap-1">
                      <dt className="font-medium">Monday - Friday</dt>
                      <dd>7:00 AM - 9:00 PM</dd>
                      <dt className="font-medium">Saturday</dt>
                      <dd>8:00 AM - 10:00 PM</dd>
                      <dt className="font-medium">Sunday</dt>
                      <dd>8:00 AM - 8:00 PM</dd>
                    </dl>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-cafe-brown text-white p-3 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2 text-cafe-dark">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+15551234567" className="hover:text-cafe-brown">(555) 123-4567</a>
                    </p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-cafe-brown text-white p-3 rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2 text-cafe-dark">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:hello@cafeserene.com" className="hover:text-cafe-brown">hello@cafeserene.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif mb-8 text-cafe-dark">Get in Touch</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6">
                  <h3 className="text-xl font-medium mb-2">Thank You!</h3>
                  <p>
                    Your message has been received. We'll get back to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Type */}
                  <div>
                    <label htmlFor="reservationType" className="block text-cafe-dark font-medium mb-2">
                      How can we help you?
                    </label>
                    <select
                      id="reservationType"
                      name="reservationType"
                      value={formData.reservationType}
                      onChange={handleChange}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-cafe-brown focus:ring focus:ring-cafe-brown/20 transition-colors p-2 border"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="reservation">Make a Reservation</option>
                      <option value="feedback">Provide Feedback</option>
                      <option value="events">Private Event Inquiry</option>
                    </select>
                  </div>
                
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-cafe-dark font-medium mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={cn(
                        "w-full border-gray-300 rounded-md shadow-sm focus:border-cafe-brown focus:ring focus:ring-cafe-brown/20 transition-colors p-2 border",
                        formErrors.name && "border-red-500"
                      )}
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                    )}
                  </div>
                  
                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-cafe-dark font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={cn(
                        "w-full border-gray-300 rounded-md shadow-sm focus:border-cafe-brown focus:ring focus:ring-cafe-brown/20 transition-colors p-2 border",
                        formErrors.email && "border-red-500"
                      )}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                    )}
                  </div>
                  
                  {/* Phone field */}
                  <div>
                    <label htmlFor="phone" className="block text-cafe-dark font-medium mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-cafe-brown focus:ring focus:ring-cafe-brown/20 transition-colors p-2 border"
                    />
                  </div>
                  
                  {/* Reservation fields - conditionally shown */}
                  {formData.reservationType === 'reservation' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="date" className="block text-cafe-dark font-medium mb-2">
                          Date <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className={cn(
                              "w-full border-gray-300 rounded-md shadow-sm focus:border-cafe-brown focus:ring focus:ring-cafe-brown/20 transition-colors p-2 border",
                              formErrors.date && "border-red-500"
                            )}
                          />
                          <Calendar className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={20} />
                        </div>
                        {formErrors.date && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.date}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="time" className="block text-cafe-dark font-medium mb-2">
                          Time <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className={cn(
                            "w-full border-gray-300 rounded-md shadow-sm focus:border-cafe-brown focus:ring focus:ring-cafe-brown/20 transition-colors p-2 border",
                            formErrors.time && "border-red-500"
                          )}
                        />
                        {formErrors.time && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.time}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="guests" className="block text-cafe-dark font-medium mb-2">
                          Guests
                        </label>
                        <select
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full border-gray-300 rounded-md shadow-sm focus:border-cafe-brown focus:ring focus:ring-cafe-brown/20 transition-colors p-2 border"
                        >
                          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                            <option key={num} value={num.toString()}>
                              {num} {num === 1 ? 'person' : 'people'}
                            </option>
                          ))}
                          <option value="more">More than 10</option>
                        </select>
                      </div>
                    </div>
                  )}
                  
                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-cafe-dark font-medium mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={cn(
                        "w-full border-gray-300 rounded-md shadow-sm focus:border-cafe-brown focus:ring focus:ring-cafe-brown/20 transition-colors p-2 border resize-y",
                        formErrors.message && "border-red-500"
                      )}
                    />
                    {formErrors.message && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                    )}
                  </div>
                  
                  {/* Submit button */}
                  <Button type="submit" className="w-full">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-cafe-cream py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-8 text-cafe-dark text-center">
            Find Us on the Map
          </h2>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-video bg-gray-200 w-full rounded overflow-hidden relative">
              {/* Placeholder for an actual map integration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">Interactive Map Would Be Embedded Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-cafe-dark text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-serif mb-3 text-cafe-dark">Do I need to make a reservation?</h3>
                <p className="text-gray-600">
                  Reservations are recommended for evenings and weekends but not required. For parties of 6 or more, 
                  we strongly recommend making a reservation to ensure we can accommodate your group.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-serif mb-3 text-cafe-dark">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards, mobile payments (Apple Pay, Google Pay), and cash.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-serif mb-3 text-cafe-dark">Is there parking available?</h3>
                <p className="text-gray-600">
                  We have limited parking behind our building. Additional street parking and a public parking garage 
                  are available within a two-block radius.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-serif mb-3 text-cafe-dark">Do you cater private events?</h3>
                <p className="text-gray-600">
                  Yes! We offer catering services and can host private events in our space during off-hours or in our 
                  dedicated event room. Please contact us for details and availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
