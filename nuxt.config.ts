import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      title: "Narayana - Nuxt3 Base App",
    },
  },

  devServer: {
    host: "0.0.0.0",
    port: 2999,
  },

  css: ["~/assets/scss/main.scss",],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "~/assets/scss/helpers.scss" as *;',
        },
      },
    },
  },

  // * NOTE: Format to write an alias -> '@<keyword>'
  // While aliasing, the above format must be used, or else it won't work.
  alias: {
    '@images': fileURLToPath(new URL('./assets/images', import.meta.url)),
    '@branding': fileURLToPath(new URL('./assets/images/branding', import.meta.url)),
    '@icons': fileURLToPath(new URL('./assets/images/icons', import.meta.url)),
    '@illustrations': fileURLToPath(new URL('./assets/images/illustrations', import.meta.url)),
    '@scss': fileURLToPath(new URL('./assets/scss', import.meta.url)),
  },
})
