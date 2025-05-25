import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[80vh] bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white">
      {/* Background overlay with slight opacity */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Explore the World, <br/> One Adventure at a Time
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          An award-winning travel blog featuring travel tips, guides, and photography from around the world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/destinations" 
            className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            Explore Destinations
          </Link>
          <Link 
            href="/blog" 
            className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-pink-600 transition-colors"
          >
            Read the Blog
          </Link>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
    </section>
  );
} 