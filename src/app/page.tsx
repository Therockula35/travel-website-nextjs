import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Travel destinations collage"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-6xl font-bold mb-4">
              Explore the World's Flavors
            </h1>
            <p className="text-xl mb-8">
              Your guide to authentic culinary experiences and cultural discoveries around the globe.
            </p>
            <div className="flex gap-4">
              <Link
                href="/destinations"
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Destinations
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 