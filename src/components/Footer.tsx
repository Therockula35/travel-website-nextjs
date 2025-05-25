import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    'About': [
      { name: 'Our Story', href: '/about' },
      { name: 'Team', href: '/team' },
      { name: 'Press', href: '/press' },
    ],
    'Explore': [
      { name: 'Latest Posts', href: '/blog' },
      { name: 'Categories', href: '/categories' },
      { name: 'Popular Destinations', href: '/destinations' },
    ],
    'Resources': [
      { name: 'Travel Tips', href: '/tips' },
      { name: 'Food Guides', href: '/guides' },
      { name: 'Photography', href: '/photography' },
    ],
    'Connect': [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Newsletter', href: '/newsletter' },
      { name: 'Partnerships', href: '/partnerships' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Pinterest', href: '#', icon: 'pinterest' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold text-purple-400">
                GlobalFoodPrints
              </Link>
              <p className="text-gray-400 mt-2">
                Exploring the world through culinary adventures
              </p>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{link.name}</span>
                  {/* Replace with actual social media icons */}
                  <div className="w-6 h-6">{link.icon}</div>
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center mt-8 text-gray-400">
            <p>© {new Date().getFullYear()} GlobalFoodPrints. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 