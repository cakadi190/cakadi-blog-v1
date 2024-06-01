// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  css: [
    '~/assets/scss/app.scss',
  ],

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
  modules: [
		'nuxt-icon',
    "@nuxt/image",
		'@nuxtjs/color-mode',
    '@nuxt/content',
		'dayjs-nuxt',
    ["@nuxtjs/google-fonts", {
      families: {
        Signika: true,
        'Fira Code': true,
        Merriweather: true
      },
      download: true,
      base64: true,
      display: 'swap',
      preload: true,
      useStylesheet: true,
      overwriting: true,
      inject: true,
    }],
  ],
})