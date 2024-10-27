/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'assets.aceternity.com',
      'rajgilllaw.com',
      'pbs.twimg.com',
      'images.unsplash.com',
      'upload.wikimedia.org',
      'pll.harvard.edu',
      'www.shad.ca'
    ],
  },
  output: 'export', // Ensures static export compatible with GitHub Pages
  // Uncomment and set the base path if needed
  // basePath: '/repository-name', // Replace with your repo name if it's not a root page
};

export default nextConfig;
