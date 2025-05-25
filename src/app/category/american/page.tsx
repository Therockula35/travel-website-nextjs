import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'American Travel Guide | Global Food Prints',
  description: 'Explore the diverse landscapes, vibrant cities, and rich cultures across the Americas. Discover hidden gems, travel tips, and local experiences.',
  keywords: 'Americas travel, American destinations, North America, South America, American history, American culture, Americas travel guide, American cities',
};

export default function AmericanTravel() {
  const featuredDestinations = [
    {
      id: 1,
      title: "New York's Urban Energy",
      description: "Experience the city that never sleeps. From iconic skyscrapers to diverse neighborhoods and world-class culture.",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
      country: "USA",
      slug: "new-york-travel-guide"
    },
    {
      id: 2,
      title: "Rio's Carnival Spirit",
      description: "Discover the vibrant culture, stunning beaches, and iconic landmarks of Brazil's most famous city.",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
      country: "Brazil",
      slug: "rio-travel-guide"
    },
    {
      id: 3,
      title: "Vancouver's Natural Beauty",
      description: "Where mountains meet the ocean, offering outdoor adventures and urban sophistication.",
      image: "https://images.unsplash.com/photo-1559511260-66a654ae982a",
      country: "Canada",
      slug: "vancouver-travel-guide"
    }
  ];

  const historicalHighlights = [
    {
      title: 'Ancient Americas',
      period: '2000 BC - 1500 AD',
      description: 'From Mayans to Incas, the rich civilizations that shaped the continent.',
      icon: '🏛️'
    },
    {
      title: 'Colonial Era',
      period: '1492 - 1800s',
      description: 'The age of exploration and the merging of Old and New World cultures.',
      icon: '⚓'
    },
    {
      title: 'Modern Americas',
      period: '1800s - present',
      description: 'The rise of diverse, multicultural nations and global influence.',
      icon: '🌎'
    }
  ];

  const countries = [
    {
      name: "United States",
      description: "From coast to coast diversity",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      slug: "usa"
    },
    {
      name: "Brazil",
      description: "Vibrant culture and rainforests",
      image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f"
    },
    {
      name: "Canada",
      description: "Natural wonders and modern cities",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce"
    },
    {
      name: "Mexico",
      description: "Ancient ruins and colonial charm",
      image: "https://images.unsplash.com/photo-1518638150340-f706e86654de"
    },
    {
      name: "Argentina",
      description: "Tango, wine, and Patagonia",
      image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1461696114087-397271a7aedc"
          alt="American destinations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Discover The Americas
            </h1>
            <p className="text-xl text-white mb-8">
              Journey through diverse landscapes, from Arctic tundra to tropical rainforests, experiencing rich cultures and natural wonders across two continents.
            </p>
            <Link 
              href="/travel-planning"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
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
                  <span className="text-sm text-blue-600 font-medium">{destination.country}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-2">
                    {destination.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {destination.description}
                  </p>
                  <Link 
                    href={`/destination/${destination.slug}`}
                    className="text-blue-600 font-medium hover:text-blue-700"
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
                <p className="text-blue-600 text-sm mb-3">{era.period}</p>
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
                href={`/country/${country.slug || country.name.toLowerCase()}`}
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
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Essential Travel Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✈️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Transportation</h3>
                <p className="text-gray-600">
                  Navigate vast distances with domestic flights, scenic road trips, and regional transportation options.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌞</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Time to Visit</h3>
                <p className="text-gray-600">
                  Consider seasonal variations across regions, from tropical summers to winter sports destinations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💵</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Money Saving</h3>
                <p className="text-gray-600">
                  Find the best deals with city passes, national park annual passes, and off-season travel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Get Travel Updates
            </h2>
            <p className="text-lg mb-8">
              Subscribe to receive the latest travel tips, hidden gems, and special offers for the Americas.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
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