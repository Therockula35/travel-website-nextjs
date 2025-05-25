import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Travel Guides & Tips | Expert Advice for Your Next Adventure | Global Food Prints',
  description: 'Comprehensive travel guides, expert tips, and detailed advice for destinations worldwide. Plan your perfect trip with our curated travel resources and insider knowledge.',
  keywords: 'travel guides, trip planning, travel tips, destination guides, travel advice, vacation planning, travel resources, travel blog, travel inspiration',
};

export default function TravelGuides() {
  const featuredGuides = [
    {
      title: "First-Time Traveler's Guide",
      description: "Essential tips and tricks for those new to international travel.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      category: "Beginner's Guide",
      readTime: "15 min read"
    },
    {
      title: "Budget Travel Secrets",
      description: "Expert strategies for exploring the world without breaking the bank.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
      category: "Travel Tips",
      readTime: "12 min read"
    },
    {
      title: "Photography Tips for Travelers",
      description: "Capture stunning travel memories with these professional photography tips.",
      image: "https://images.unsplash.com/photo-1452802447250-470a88ac82bc",
      category: "Photography",
      readTime: "10 min read"
    }
  ];

  const guideCategories = [
    {
      title: "Destination Guides",
      icon: "🌎",
      guides: [
        "European City Guides",
        "Asian Travel Guides",
        "American Adventures",
        "Mediterranean Escapes"
      ]
    },
    {
      title: "Travel Planning",
      icon: "📅",
      guides: [
        "Trip Planning Checklist",
        "Packing Guidelines",
        "Travel Insurance Tips",
        "Visa Requirements"
      ]
    },
    {
      title: "Food & Culture",
      icon: "🍴",
      guides: [
        "Local Cuisine Guides",
        "Cultural Etiquette",
        "Food Tours",
        "Cooking Classes"
      ]
    },
    {
      title: "Adventure Travel",
      icon: "🏃‍♂️",
      guides: [
        "Hiking Guides",
        "Outdoor Activities",
        "Extreme Sports",
        "Safety Tips"
      ]
    }
  ];

  const expertTips = [
    {
      title: "Accommodation",
      tips: [
        "How to Find the Best Hotels",
        "Airbnb vs Hotels",
        "Hostel Survival Guide",
        "Luxury for Less"
      ],
      icon: "🏨"
    },
    {
      title: "Transportation",
      tips: [
        "Flight Booking Secrets",
        "Public Transport Tips",
        "Car Rental Guide",
        "Train Travel in Europe"
      ],
      icon: "🚆"
    },
    {
      title: "Money Matters",
      tips: [
        "Currency Exchange Tips",
        "Budgeting Tools",
        "Credit Card Hacks",
        "Money Safety"
      ],
      icon: "💰"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080"
          alt="Travel Guides Hero Image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-6xl font-bold mb-6">
              Expert Travel Guides
            </h1>
            <p className="text-xl mb-8">
              Comprehensive travel resources, insider tips, and detailed guides to help you plan your perfect adventure.
            </p>
            <Link 
              href="#featured-guides"
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Explore Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section id="featured-guides" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Travel Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredGuides.map((guide) => (
              <div key={guide.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium">{guide.category}</span>
                    <span className="text-sm text-gray-500">{guide.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                  <p className="text-gray-600">{guide.description}</p>
                  <Link 
                    href="#"
                    className="mt-4 inline-block text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Categories */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Travel Guide Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guideCategories.map((category) => (
              <div key={category.title} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.guides.map((guide) => (
                    <li key={guide} className="flex items-center text-gray-600 hover:text-blue-600">
                      <span className="mr-2">•</span>
                      <Link href="#">{guide}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Expert Travel Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertTips.map((category) => (
              <div key={category.title} className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.tips.map((tip) => (
                    <li key={tip} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <Link href="#" className="hover:text-blue-600">{tip}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Essential Travel Resources</h2>
            <p className="text-xl text-gray-600 mb-12">
              Access our comprehensive collection of travel planning tools and resources
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Free Travel Planning Tools</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>✈️ Flight Comparison Tools</li>
                  <li>🏨 Accommodation Booking Guide</li>
                  <li>📅 Trip Planner Templates</li>
                  <li>📝 Packing List Generator</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Travel Safety & Insurance</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>🛡️ Travel Insurance Guide</li>
                  <li>🏥 Health & Safety Tips</li>
                  <li>📱 Essential Travel Apps</li>
                  <li>🔒 Security Checklist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get Travel Tips in Your Inbox
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to receive expert travel advice, exclusive guides, and travel inspiration.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 