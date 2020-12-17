const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')

const isDev = process.env.NODE_ENV !== 'production'

const nextConfig = {
  env: {
    API_URL: 'https://vamosreal.herokuapp.com/api/contact',
    API_TOKEN:
      ''
  },
  pwa: {
    dest: 'public',
    disable: isDev
  }
}

module.exports = withPlugins([], withPWA(nextConfig))
