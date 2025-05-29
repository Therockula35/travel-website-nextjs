const fs = require('fs');
const path = require('path');

const files = [
  'src/app/category/european/page.tsx',
  'src/app/country/[slug]/page.tsx',
  'src/app/destination/[slug]/page.tsx',
  'src/app/page.tsx',
  'src/components/AboutAuthor.tsx',
  'src/components/FeaturedPosts.tsx',
  'src/components/InstagramFeed.tsx',
  'src/pages/blog/[slug].tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace HTML entities with normal quotes
    content = content.replace(/&apos;/g, "'");
    content = content.replace(/&quot;/g, '"');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed quotes in ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
}); 