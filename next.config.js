const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')

const isDev = process.env.NODE_ENV !== 'production'

const nextConfig = {
  env: {
    API_URL: 'https://vamosreal.herokuapp.com/api/contact',
    API_TOKEN:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNvbmRTZWNyZXQiOiJhNWM5ZThjMS03ODc3LTQ1ZWItOTk5MC01YmQ4ZjcyZjA3MWUiLCJpYXQiOjE2MDUzNTM0MDJ9.I-3mcjSP3rcVUY4LdfjHpntOZpXc_ZcIWFRN2X1fx7g'
  },
  pwa: {
    dest: 'public',
    disable: isDev
  }
}

module.exports = withPlugins([], withPWA(nextConfig))
