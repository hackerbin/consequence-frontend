export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "consequence-frontend",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://auth.nuxtjs.org
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {
    truelayerAuthBase:
      process.env.TRUELAYER_AUTH_BASE || "https://auth.truelayer-sandbox.com",
    truelayerResponseType: "code",
    truelayerClientID:
      process.env.TRUELAYER_CLIENT_ID || "sandbox-consequence-fd977d",
    truelayerScope:
      "info accounts balance cards transactions direct_debits standing_orders offline_access",
    truelayerRedirectURI:
      process.env.TRUELAYER_REDIRECT_URI || "http://localhost:8000/callback",
    truelayerProviders: "uk-ob-all uk-oauth-all uk-cs-mock"
  },

  server: {
    port: 8000 // default: 3000
  },

  router: {
    middleware: ['auth']
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/',
      home: '/'
    }
  }
};
