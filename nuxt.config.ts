export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['nuxt-auth-utils'],
  runtimeConfig: {
    session: {
      name: 'nuxt-session',
      password: '',
      cookie: {
        maxAge: 60 * 60,
        secure: false,   // ← add this, HTTP doesn't support secure cookies
        sameSite: 'lax', // ← add this too
      },
    }
  },
})