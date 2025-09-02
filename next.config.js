/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
})

const repo = 'next-pwa' // <-- change to your GitHub repo name

const nextConfig = {
	reactStrictMode: true,
  	output: 'export', // <-- Required for `next export`
	basePath: `/${repo}`,
	assetPrefix: `/${repo}/`,
	trailingSlash: true, // <-- Required for GitHub Pages to handle routing
}

module.exports = {...withPWA(nextConfig)}
