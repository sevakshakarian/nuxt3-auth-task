import { useAuthStore } from '@/store/auth'

export default defineNuxtRouteMiddleware((to) => {
    const auth = useAuthStore()

    if (!auth.isLoggedIn && to.path !== '/') {
        return navigateTo('/')
    }

    if (auth.isLoggedIn && !auth.isVerified && to.path !== '/verify') {
        return navigateTo('/verify')
    }
})
