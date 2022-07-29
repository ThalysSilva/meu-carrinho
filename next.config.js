/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ['codeby.vteximg.com.br'],
  }
}

module.exports = nextConfig
