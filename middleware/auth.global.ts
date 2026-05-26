export default defineNuxtRouteMiddleware(async (to) => {
    const session = useUserSession()
    await session.fetch()
    const publicRoutes = [
        '/',
    ]
    const allowedRoutes = [
        '/game',
    ]
    console.log('Logged in:', session.loggedIn.value)
    console.log('User:', session.user.value)
    
    if (!publicRoutes.includes(to.path) && !session.loggedIn.value) {
        return navigateTo('/')
    }
    if(!publicRoutes.includes(to.path) && !allowedRoutes.includes(to.path)){
        return navigateTo('/')
    }
})