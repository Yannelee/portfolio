// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@nuxt/fonts'],
  fonts: {
    families:[ 
      { name: 'Inter', provider: 'google',  weights: [100, 300, 400, 700], styles:['normal', 'italic'] },
      { name: 'Sora', provider: 'google',  weights: [100, 300, 400, 700, 800], styles:['normal', 'italic'] },
    ],
  },
})