/** @type {import('next').NextConfig} */

import { i18n } from './i18n.config.mjs'

const nextConfig = {
  eslint: { dirs: ['src'] },
  i18n,

  images: {
    domains: [
      'picsum.photos',
      'i.ytimg.com',
      'static.oliygoh.uz',
      'prep.uz',
      'media.istockphoto.com',
    ],
  },

  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack'],
      }
    )

    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

export default nextConfig
