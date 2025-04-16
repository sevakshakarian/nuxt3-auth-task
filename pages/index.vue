<template>
  <section class="container mx-auto ">
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center">Вход</h1>

      <UForm @submit.prevent="handleLogin" :state="form" class="space-y-4">
        <UFormGroup label="Логин *" name="username">
          <UInput
              v-model="form.username"
              placeholder="example@creds.com"
              size="lg"
              :variant="errors.username ? 'error' : undefined"
          />
          <p v-if="errors.username" class="text-red-500 text-sm mt-1">
            {{ errors.username }}
          </p>
        </UFormGroup>

        <UFormGroup label="Пароль *" name="password">
          <UInput
              v-model="form.password"
              type="password"
              placeholder="••••••••"
              size="lg"
              :variant="errors.password ? 'error' : undefined"
          />
          <p v-if="errors.password" class="text-red-500 text-sm mt-1">
            {{ errors.password }}
          </p>
        </UFormGroup>

        <UButton type="submit" block size="lg">Войти</UButton>

        <p v-if="authError" class="text-red-500 text-center mt-2">
          {{ authError }}
        </p>
      </UForm>
      <div class="flex justify-between text-sm mt-4">
        <NuxtLink to="/" class="text-blue-600 hover:underline">Регистрация</NuxtLink>
        <NuxtLink to="/" class="text-blue-600 hover:underline">Забыли пароль?</NuxtLink>
      </div>
    </div>
  </div>
</section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'
import * as yup from 'yup'

const router = useRouter()
const auth = useAuthStore()
auth.restoreSession()

const form = ref({
  username: '',
  password: '',
})

const errors = ref<{ username?: string; password?: string }>({})
const authError = ref('')

const schema = yup.object({
  username: yup.string().required('Введите логин'),
  password: yup.string().required('Введите пароль'),
})

const handleLogin = async () => {
  errors.value = {}
  authError.value = ''

  try {
    await schema.validate(form.value, { abortEarly: false })

    const success = await auth.login(form.value.username, form.value.password)

    if (success) {
      await router.push('/verify')
    } else {
      authError.value = 'Неверный логин или пароль'
    }
  } catch (err: any) {
    err.inner.forEach((e: any) => {
      errors.value[e.path] = e.message
    })
  }
}
</script>
