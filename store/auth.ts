import { defineStore } from 'pinia'
import md5 from 'crypto-js/md5'

interface User {
    name: string
    surname: string
    credentials: {
        username: string
        passphrase: string
    }
    active: boolean
    created: string
    _comment?: string
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as User | null,
        isLoggedIn: false,
        isVerified: false,
    }),

    actions: {
        async login(username: string, password: string): Promise<boolean> {
            const users: User[] = await $fetch('/users.json')

            const hashed = md5(password).toString()

            const matched = users.find((u) => {
                return (
                    u.active &&
                    u.credentials.username === username &&
                    u.credentials.passphrase === hashed
                )
            })

            if (matched) {
                this.user = matched
                this.isLoggedIn = true
                this.isVerified = false

                if (process.client) {
                    localStorage.setItem('session', JSON.stringify(matched))
                }

                return true
            } else {
                return false
            }
        },
        verify(code: string): boolean {
            if (code === '123456') {
                this.isVerified = true
                return true
            }
            return false
        },

        logout() {
            this.user = null
            this.isLoggedIn = false
            this.isVerified = false

            if (process.client) {
                localStorage.removeItem('session')
            }
        },

        restoreSession() {
            if (process.client) {
                const data = localStorage.getItem('session')
                if (data) {
                    this.user = JSON.parse(data)
                    this.isLoggedIn = true
                    this.isVerified = false
                }
            }
        },
    },
})
