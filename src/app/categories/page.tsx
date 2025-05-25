import Link from 'next/link';
import Image from 'next/image';

export default function Categories() {
  const categories = [
    {
      name: "European",
      description: "Discover the charm of historic cities, rich cultural heritage, and stunning landscapes across Europe.",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
      color: "from-blue-500 to-blue-700",
      link: "/category/european",
      highlights: ["Paris", "Rome", "Barcelona", "Santorini", "Amsterdam"],
      features: ["Historic Architecture", "Art Museums", "Culinary Excellence", "Ancient Ruins"]
    },
    {
      name: "Asian",
      description: "Experience the perfect blend of ancient traditions and modern innovations across vibrant Asian destinations.",
      image: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
      color: "from-red-500 to-red-700",
      link: "/category/asian",
      highlights: ["Tokyo", "Bangkok", "Seoul", "Singapore", "Hong Kong"],
      features: ["Traditional Temples", "Street Food", "Modern Cities", "Cultural Sites"]
    },
    {
      name: "American",
      description: "Explore diverse landscapes from bustling cities to natural wonders across the Americas.",
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74",
      color: "from-blue-600 to-indigo-800",
      link: "/category/american",
      highlights: ["New York", "San Francisco", "Rio de Janeiro", "Mexico City", "Vancouver"],
      features: ["National Parks", "Modern Cities", "Cultural Diversity", "Natural Wonders"]
    },
    {
      name: "Mediterranean",
      description: "Experience the sun-soaked charm of Mediterranean destinations with rich history and coastal beauty.",
      image: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa",
      color: "from-cyan-500 to-blue-600",
      link: "/category/mediterranean",
      highlights: ["Greek Islands", "Amalfi Coast", "Croatian Coast", "Turkish Riviera", "Spanish Beaches"],
      features: ["Coastal Beauty", "Ancient History", "Mediterranean Cuisine", "Island Life"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080"
          alt="World Travel Categories"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-6xl font-bold mb-6">
              Explore Travel Categories
            </h1>
            <p className="text-xl mb-8">
              Discover unique destinations across different regions of the world, each offering their own distinct experiences and adventures.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.link}
                className="group relative overflow-hidden rounded-xl shadow-2xl"
              >
                <div className="relative h-[400px]">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${category.color} opacity-75`}></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-4">{category.name}</h2>
                      <p className="text-white text-lg mb-6">{category.description}</p>
                    </div>
                    <div>
                      <div className="mb-4">
                        <h3 className="text-white font-semibold mb-2">Top Destinations:</h3>
                        <div className="flex flex-wrap gap-2">
                          {category.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Features:</h3>
                        <div className="flex flex-wrap gap-2">
                          {category.features.map((feature) => (
                            <span
                              key={feature}
                              className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Planning Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Start Planning Your Journey
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Choose your preferred travel category and discover detailed guides, local tips, and curated experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Choose Region</h3>
                <p className="text-gray-300">Select from our curated categories covering different regions of the world.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Plan Trip</h3>
                <p className="text-gray-300">Get detailed guides, itineraries, and local insights for your chosen destination.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✈️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Travel</h3>
                <p className="text-gray-300">Experience the best of your chosen destination with our expert recommendations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to receive travel inspiration, tips, and exclusive offers for all categories.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900"
              />
              <button
                type="submit"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
} 