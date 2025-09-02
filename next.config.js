/** @type {import('next').NextConfig} */

// const withPWA = require('next-pwa')({
// 	dest: 'public',
// 	register: true,
// 	skipWaiting: true,
// })

// module.exports = withPWA({
// 	reactStrictMode: true,
// })


// @ts-nocheck
const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')

const nextConfig = {
	reactStrictMode: true,
}

module.exports = withPlugins([withPWA], nextConfig)