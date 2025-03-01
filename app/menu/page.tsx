'use client'

import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Coffee, UtensilsCrossed, Salad, Croissant, Wine, Dessert } from 'lucide-react'
import { cn } from '../lib/utils'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('coffee')
  
  const menuCategories = [
    { id: 'coffee', name: 'Coffee & Tea', icon: <Coffee size={20} /> },
    { id: 'breakfast', name: 'Breakfast', icon: <Croissant size={20} /> },
    { id: 'lunch', name: 'Lunch', icon: <UtensilsCrossed size={20} /> },
    { id: 'salads', name: 'Salads', icon: <Salad size={20} /> },
    { id: 'dinner', name: 'Dinner', icon: <Wine size={20} /> },
    { id: 'desserts', name: 'Desserts', icon: <Dessert size={20} /> },
  ]
  
  const menuItems = {
    coffee: [
      {
        name: 'Espresso',
        description: 'Our signature blend, rich and full-bodied',
        price: 3.50,
        tags: ['Signature'],
      },
      {
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and velvety foam',
        price: 4.75,
        tags: ['Popular'],
      },
      {
        name: 'Pour Over',
        description: 'Single-origin coffee, meticulously brewed to highlight its unique characteristics',
        price: 5.50,
        tags: ['Artisanal'],
      },
      {
        name: 'Lavender Latte',
        description: 'Espresso, steamed milk, and house-made lavender syrup',
        price: 5.25,
        tags: ['House Special'],
      },
      {
        name: 'Matcha Latte',
        description: 'Ceremonial grade matcha whisked with steamed milk',
        price: 5.50,
        tags: [],
      },
      {
        name: 'Cold Brew',
        description: '24-hour steeped coffee served over ice for a smooth, less acidic flavor',
        price: 4.95,
        tags: ['Refreshing'],
      },
      {
        name: 'Chai Latte',
        description: 'Spiced black tea with steamed milk and honey',
        price: 4.95,
        tags: [],
      },
      {
        name: 'Loose Leaf Tea',
        description: 'Selection of premium teas served in a pot',
        price: 4.50,
        tags: [],
      },
    ],
    breakfast: [
      {
        name: 'Artisan Toast',
        description: 'Sourdough toast with choice of avocado, almond butter, or house-made jam',
        price: 7.95,
        tags: ['Vegetarian'],
      },
      {
        name: 'Seasonal Granola Bowl',
        description: 'House-made granola with Greek yogurt and seasonal fruits',
        price: 9.50,
        tags: ['Vegetarian'],
      },
      {
        name: 'Breakfast Burrito',
        description: 'Eggs, black beans, avocado, and salsa wrapped in a warm tortilla',
        price: 11.95,
        tags: ['Popular'],
      },
      {
        name: 'French Toast',
        description: 'Brioche French toast with maple syrup and seasonal berries',
        price: 12.95,
        tags: ['House Special'],
      },
      {
        name: 'Eggs Benedict',
        description: 'Poached eggs on English muffin with hollandaise sauce',
        price: 13.95,
        tags: ['Popular'],
      },
      {
        name: 'Breakfast Sandwich',
        description: 'Fried egg, cheddar, arugula, and aioli on brioche bun',
        price: 10.95,
        tags: [],
      },
    ],
    lunch: [
      {
        name: 'Grilled Cheese',
        description: 'Aged cheddar and gruyère with caramelized onions on sourdough',
        price: 12.95,
        tags: ['Vegetarian'],
      },
      {
        name: 'Chicken Pesto Sandwich',
        description: 'Roasted chicken, house-made pesto, mozzarella, and tomato on ciabatta',
        price: 14.95,
        tags: ['Popular'],
      },
      {
        name: 'Roasted Vegetable Tartine',
        description: 'Open-faced sandwich with seasonal roasted vegetables and goat cheese',
        price: 13.95,
        tags: ['Vegetarian'],
      },
      {
        name: 'Quinoa Bowl',
        description: 'Tricolor quinoa with roasted vegetables, mixed greens, and tahini dressing',
        price: 14.95,
        tags: ['Vegan', 'Gluten-Free'],
      },
      {
        name: 'Soup of the Day',
        description: 'House-made soup served with a slice of artisan bread',
        price: 8.95,
        tags: ['Ask Server'],
      },
    ],
    salads: [
      {
        name: 'Serene Salad',
        description: 'Mixed greens, seasonal fruits, goat cheese, candied walnuts, and champagne vinaigrette',
        price: 13.95,
        tags: ['Signature', 'Vegetarian'],
      },
      {
        name: 'Kale Caesar',
        description: 'Tuscan kale, house-made croutons, parmesan, and classic caesar dressing',
        price: 12.95,
        tags: [],
      },
      {
        name: 'Roasted Beet Salad',
        description: 'Roasted beets, arugula, orange segments, pistachios, and balsamic reduction',
        price: 14.95,
        tags: ['Vegan', 'Gluten-Free'],
      },
      {
        name: 'Grain Bowl',
        description: 'Farro, roasted sweet potatoes, avocado, kale, and lemon-tahini dressing',
        price: 15.95,
        tags: ['Vegan'],
      },
    ],
    dinner: [
      {
        name: 'Roasted Chicken',
        description: 'Half chicken with herbs, served with seasonal vegetables and mashed potatoes',
        price: 22.95,
        tags: ['Gluten-Free'],
      },
      {
        name: 'Pan-Seared Salmon',
        description: 'Sustainably sourced salmon with lemon-dill sauce and roasted vegetables',
        price: 24.95,
        tags: ['Signature', 'Gluten-Free'],
      },
      {
        name: 'Mushroom Risotto',
        description: 'Arborio rice with assorted mushrooms, parmesan, and truffle oil',
        price: 19.95,
        tags: ['Vegetarian'],
      },
      {
        name: 'Steak Frites',
        description: 'Grass-fed ribeye with herb butter and hand-cut fries',
        price: 28.95,
        tags: ['Popular'],
      },
      {
        name: 'Vegetable Tagine',
        description: 'Moroccan-spiced vegetable stew served with couscous',
        price: 18.95,
        tags: ['Vegan'],
      },
    ],
    desserts: [
      {
        name: 'Chocolate Espresso Cake',
        description: 'Rich chocolate cake infused with our signature espresso',
        price: 8.95,
        tags: ['Signature'],
      },
      {
        name: 'Seasonal Fruit Tart',
        description: 'Buttery pastry crust with seasonal fruits and vanilla custard',
        price: 7.95,
        tags: [],
      },
      {
        name: 'Matcha Cheesecake',
        description: 'Creamy cheesecake with a matcha green tea swirl',
        price: 9.95,
        tags: ['House Special'],
      },
      {
        name: 'Affogato',
        description: 'Vanilla gelato "drowned" with a shot of hot espresso',
        price: 6.95,
        tags: ['Popular'],
      },
      {
        name: 'Assorted Cookies',
        description: 'Selection of house-baked cookies',
        price: 4.95,
        tags: [],
      },
    ],
  }
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-cafe-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Menu</h1>
            <p className="text-xl text-gray-300 mb-8">
              Thoughtfully crafted with seasonal, locally-sourced ingredients
            </p>
          </div>
        </div>
      </section>
      
      {/* Menu Navigation */}
      <section className="py-8 bg-cafe-cream sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-md transition-colors",
                  activeCategory === category.id
                    ? "bg-cafe-brown text-white"
                    : "bg-white text-cafe-dark hover:bg-cafe-brown/10"
                )}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Menu Items */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif mb-12 text-cafe-dark text-center">
              {menuCategories.find(c => c.id === activeCategory)?.name}
            </h2>
            
            <div className="grid gap-8">
              {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif text-cafe-dark">{item.name}</h3>
                    <span className="text-lg font-medium text-cafe-brown">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className={cn(
                            "px-2 py-1 text-xs rounded",
                            tag === 'Vegetarian' && "bg-green-100 text-green-800",
                            tag === 'Vegan' && "bg-emerald-100 text-emerald-800",
                            tag === 'Gluten-Free' && "bg-yellow-100 text-yellow-800",
                            tag === 'Popular' && "bg-red-100 text-red-800",
                            tag === 'Signature' && "bg-cafe-brown/20 text-cafe-brown",
                            tag === 'House Special' && "bg-purple-100 text-purple-800",
                            tag === 'Artisanal' && "bg-amber-100 text-amber-800",
                            tag === 'Refreshing' && "bg-blue-100 text-blue-800",
                            tag === 'Ask Server' && "bg-gray-100 text-gray-800",
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Dietary Information */}
      <section className="py-12 bg-cafe-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif mb-6 text-cafe-dark text-center">
              Dietary Information
            </h2>
            <p className="text-gray-700 mb-8 text-center">
              We're committed to accommodating various dietary preferences and restrictions. 
              Please inform your server of any allergies or dietary needs, and we'll do our best to accommodate you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-cafe-dark mb-2">Vegetarian Options</h3>
                <p className="text-gray-600">
                  Look for items marked with the Vegetarian tag
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-cafe-dark mb-2">Vegan Options</h3>
                <p className="text-gray-600">
                  Look for items marked with the Vegan tag
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-cafe-dark mb-2">Gluten-Free Options</h3>
                <p className="text-gray-600">
                  Look for items marked with the Gluten-Free tag
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Private Events */}
      <section className="py-16 bg-cafe-brown text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-6">Private Events</h2>
          <p className="text-xl text-cafe-cream/90 max-w-2xl mx-auto mb-8">
            Host your next gathering at Café Serene. We offer custom menus and private dining options for special events.
          </p>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            Contact Us for Details
          </Button>
        </div>
      </section>
    </div>
  )
}
