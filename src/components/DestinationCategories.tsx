import Link from 'next/link';

// Sample data for destination categories
const destinations = [
  {
    id: 1,
    name: 'Europe',
    slug: 'europe',
    count: 42,
    image: 'bg-gradient-to-r from-blue-400 to-blue-600'
  },
  {
    id: 2,
    name: 'Asia',
    slug: 'asia',
    count: 36,
    image: 'bg-gradient-to-r from-red-400 to-red-600'
  },
  {
    id: 3,
    name: 'Africa',
    slug: 'africa',
    count: 28,
    image: 'bg-gradient-to-r from-yellow-400 to-orange-600'
  },
  {
    id: 4,
    name: 'North America',
    slug: 'north-america',
    count: 31,
    image: 'bg-gradient-to-r from-green-400 to-green-600'
  },
  {
    id: 5,
    name: 'South America',
    slug: 'south-america',
    count: 24,
    image: 'bg-gradient-to-r from-purple-400 to-purple-600'
  },
  {
    id: 6,
    name: 'Oceania',
    slug: 'oceania',
    count: 18,
    image: 'bg-gradient-to-r from-teal-400 to-teal-600'
  },
];

export default function DestinationCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Explore By Destination</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Discover amazing places and experiences across all continents. Where will your next adventure take you?
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Link 
              key={destination.id}
              href={`/destinations/${destination.slug}`}
              className="group block relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Using gradient backgrounds as placeholders */}
              <div className={`absolute inset-0 ${destination.image}`}></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  {destination.count} articles
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/destinations"
            className="inline-flex items-center font-medium text-pink-600 hover:text-pink-700"
          >
            View All Destinations
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 