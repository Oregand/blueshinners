export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/owl.js', mode: 'client' },
    { src: '~/plugins/smooth-scroll', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/auth',
    '@nuxtjs/markdownit',
    '@nuxtjs/sentry'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  auth: {
    redirect: {
      login: '/login',
      logout: '/logout',
      callback: '/callback',
      home: '/'
    },
    strategies: {
      auth0: {
        domain: 'doregan.eu.auth0.com',
        client_id: '6kE8FfP3MxSySvNPPWQqzUE4h4Ep48ZV'
      }
    }
  },
  markdownit: {
    injected: true
  },
  sentry: {
    dsn: 'https://5e19bcdbe57c405898e1593357f721f0@sentry.io/5167850',
    config: {}
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    routes() {
      const fs = require('fs')
      return fs.readdirSync('./assets/content/memorial').map((file) => {
        return {
          route: `/memorial/${file.slice(2, -5)}`,
          payload: require(`./assets/content/memorial/${file}`)
        }
      })
    }
  }
}
