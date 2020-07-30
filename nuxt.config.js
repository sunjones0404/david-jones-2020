export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap',
      },
    ],
  },
  css: ['@/assets/css/reset.css', '@/assets/css/main.css'],
  plugins: [],
  components: true,
  buildModules: [],
  modules: ['@nuxtjs/axios'],
  axios: {},
  build: {},
}
