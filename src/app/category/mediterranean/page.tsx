import Link from 'next/link';
import Image from 'next/image';

export default function MediterraneanTravel() {
  const featuredDestinations = [
    {
      name: "Santorini",
      country: "Greece",
      description: "Iconic white-washed buildings perched on cliffs overlooking the Aegean Sea",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e"
    },
    {
      name: "Amalfi Coast",
      country: "Italy",
      description: "Dramatic coastline featuring colorful towns and stunning Mediterranean views",
      image: "https://images.unsplash.com/photo-1633321088355-d0f27f33c624"
    },
    {
      name: "Barcelona",
      country: "Spain",
      description: "Vibrant coastal city known for Gaudi architecture and beach culture",
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded"
    }
  ];

  const historicalHighlights = [
    {
      title: "Ancient Civilizations",
      period: "3000 BCE - 500 CE",
      description: "Birthplace of Western civilization, featuring Greek, Roman, and Phoenician heritage",
      icon: "🏛️"
    },
    {
      title: "Maritime Trade Era",
      period: "800 - 1500 CE",
      description: "Golden age of Mediterranean trade, cultural exchange, and naval innovations",
      icon: "⚓"
    },
    {
      title: "Renaissance Period",
      period: "1300 - 1600 CE",
      description: "Flourishing of arts, architecture, and cultural achievements",
      icon: "🎨"
    }
  ];

  const countries = [
    {
      name: "Greece",
      description: "Ancient ruins and island paradise",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077"
    },
    {
      name: "Italy",
      description: "Art, history, and coastal charm",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
    },
    {
      name: "Spain",
      description: "Vibrant culture and sunny coasts",
      image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325"
    },
    {
      name: "Turkey",
      description: "Where East meets West",
      image: "https://images.unsplash.com/photo-1589561454226-796a8aa89b05"
    },
    {
      name: "Croatia",
      description: "Stunning coastline and medieval towns",
      image: "https://images.unsplash.com/photo-1555990538-17392d5e576a"
    }
  ];

  const culturalExperiences = [
    {
      title: "Culinary Traditions",
      description: "Mediterranean diet and cooking styles",
      activities: ["Olive oil tasting", "Wine tours", "Cooking classes", "Market visits"]
    },
    {
      title: "Coastal Living",
      description: "Beach culture and maritime traditions",
      activities: ["Island hopping", "Beach clubs", "Sailing trips", "Fishing villages"]
    },
    {
      title: "Historical Heritage",
      description: "Ancient sites and architectural wonders",
      activities: ["Archaeological tours", "Temple visits", "Medieval towns", "Museum exhibits"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa"
          alt="Mediterranean destinations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Discover the Mediterranean
            </h1>
            <p className="text-xl text-white mb-8">
              Journey through ancient civilizations, crystal-clear waters, and sun-soaked coastal paradises.
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <div key={destination.name} className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-sm text-gray-200 mb-2">{destination.country}</p>
                  <p className="text-sm opacity-90">{destination.description}</p>
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

      {/* Cultural Experiences */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Cultural Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culturalExperiences.map((experience) => (
              <div key={experience.title} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{experience.title}</h3>
                <p className="text-gray-600 mb-4">{experience.description}</p>
                <ul className="space-y-2">
                  {experience.activities.map((activity) => (
                    <li key={activity} className="flex items-center text-gray-700">
                      <span className="mr-2">•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Essential Travel Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚢</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Transportation</h3>
                <p className="text-gray-600">
                  Ferry connections between islands, coastal trains, and local buses for authentic experiences.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">☀️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Time to Visit</h3>
                <p className="text-gray-600">
                  Spring (April-May) and Fall (September-October) for perfect weather and fewer crowds.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💶</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Money Saving</h3>
                <p className="text-gray-600">
                  Travel in shoulder season, use local transportation, and enjoy authentic local cuisine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Get Travel Updates
            </h2>
            <p className="text-lg mb-8">
              Subscribe to receive the latest travel tips, hidden gems, and special offers for Mediterranean destinations.
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