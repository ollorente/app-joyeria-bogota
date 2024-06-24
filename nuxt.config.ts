// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  telemetry: { enabled: false },
  app: {
    head: {
      charset: "utf8",
      viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      link: [
        // { rel: "icon", type: "image/png", href: "https://ollorente.github.io/tourscorrecaminos/img/favicon.png" },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" }
      ],
      script: [
        { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" }
      ],
    }
  },
  modules: [],
  runtimeConfig: {
    baseUrl: "https://ollorente.github.io/app-joyeria-bogota"
  }
})
