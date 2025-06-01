const isGithubPages = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: isGithubPages ? '/pr3' : '',
  basePath: isGithubPages ? '/pr3' : '',
  trailingSlash: true, 
};

module.exports = nextConfig;
