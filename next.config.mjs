// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       "img.freepik.com",
//       "images.unsplash.com",
//       "t4.ftcdn.net",
//       "mosodigital.com",
//       "brandroofsolutions.com",
//       "myutsavawsimagebucket.s3.ap-south-1.amazonaws.com",
//     ],
//   },
// };

// export default nextConfig;


const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 't4.ftcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'mosodigital.com',
      },
      {
        protocol: 'https',
        hostname: 'brandroofsolutions.com',
      },
      {
        protocol: 'https',
        hostname: 'myutsavawsimagebucket.s3.ap-south-1.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
