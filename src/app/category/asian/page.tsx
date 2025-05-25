import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Asian Travel Guide | Global Food Prints',
  description: 'Explore the diverse cultures, ancient traditions, and must-visit destinations across Asia. Discover hidden gems, travel tips, and local experiences.',
  keywords: 'Asia travel, Asian destinations, Asian history, Asian culture, Asia travel guide, Asian cities',
};

export default function AsianTravel() {
  const featuredDestinations = [
    {
      id: 1,
      title: "Tokyo's Modern Spirit",
      description: "Experience the perfect blend of tradition and innovation in Japan's capital. From ancient temples to futuristic districts.",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      country: "Japan",
      slug: "tokyo-travel-guide"
    },
    {
      id: 2,
      title: "Ancient Beijing",
      description: "Walk through centuries of history along the Great Wall, Forbidden City, and traditional hutongs.",
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d",
      country: "China",
      slug: "beijing-travel-guide"
    },
    {
      id: 3,
      title: "Bangkok's Temple Trail",
      description: "Discover ornate temples, vibrant markets, and the rich cultural heritage of Thailand's capital.",
      image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed",
      country: "Thailand",
      slug: "bangkok-travel-guide"
    }
  ];

  const historicalHighlights = [
    {
      title: 'Ancient China',
      period: '2100 BC - present',
      description: 'One of the world\'s oldest civilizations, birthplace of countless innovations.',
      icon: '🏯'
    },
    {
      title: 'Silk Road Era',
      period: '130 BC - 1453 AD',
      description: 'The legendary trade route that connected East and West, spreading culture and commerce.',
      icon: '🐫'
    },
    {
      title: 'Imperial Japan',
      period: '538 - 1867',
      description: 'The age of samurai, shogunates, and the flourishing of Japanese arts and culture.',
      icon: '⛩️'
    }
  ];

  const countries = [
    {
      name: "Japan",
      description: "Tradition meets modern innovation",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e"
    },
    {
      name: "China",
      description: "Ancient wisdom and rapid progress",
      image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b"
    },
    {
      name: "Thailand",
      description: "Tropical paradise and temples",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526"
    },
    {
      name: "Vietnam",
      description: "Rich culture and natural beauty",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592"
    },
    {
      name: "Korea",
      description: "K-culture and ancient traditions",
      image: "https://images.unsplash.com/photo-1538669715315-155098f0fb1d"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1480796927426-f609979314bd"
          alt="Asian destinations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Discover Asia
            </h1>
            <p className="text-xl text-white mb-8">
              Journey through ancient traditions, vibrant cultures, and breathtaking landscapes across the Asian continent.
            </p>
            <Link 
              href="/travel-planning"
              className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Plan Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Must-Visit Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <div key={destination.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-red-600 font-medium">{destination.country}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">
                    {destination.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {destination.description}
                  </p>
                  <Link 
                    href={`/destination/${destination.slug}`}
                    className="text-red-600 font-medium hover:text-red-700"
                  >
                    Explore Guide →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Journey Through Time
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {historicalHighlights.map((era) => (
              <div key={era.title} className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{era.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{era.title}</h3>
                <p className="text-red-600 text-sm mb-3">{era.period}</p>
                <p className="text-gray-600">{era.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explore Countries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {countries.map((country) => (
              <Link
                key={country.name}
                href={`/country/${country.name.toLowerCase()}`}
                className="group relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src={country.image}
                  alt={country.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{country.name}</h3>
                  <p className="text-sm opacity-90">{country.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Essential Travel Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚅</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Transportation</h3>
                <p className="text-gray-600">
                  Utilize efficient bullet trains, metro systems, and regional flights for seamless travel.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌸</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Time to Visit</h3>
                <p className="text-gray-600">
                  Consider seasonal events like cherry blossoms and avoid monsoon seasons for optimal experiences.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💴</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Money Saving</h3>
                <p className="text-gray-600">
                  Use rail passes, eat at local markets, and book accommodations in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Get Travel Updates
            </h2>
            <p className="text-lg mb-8">
              Subscribe to receive the latest travel tips, hidden gems, and special offers for Asia.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900"
              />
              <button
                type="submit"
                className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
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