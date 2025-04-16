<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow w-full max-w-md">
      <h2 class="text-xl font-bold mb-4 text-center">Подтверждение входа</h2>
      <form @submit.prevent="handleVerify" class="space-y-4">
        <UInput v-model="code" placeholder="Введите код (123456)" />
        <UButton type="submit" block>Подтвердить</UButton>
        <p v-if="error" class="text-red-500 text-center text-sm">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const router = useRouter()
const auth = useAuthStore()
const code = ref('')
const error = ref('')

const handleVerify = () => {
  if (auth.verify(code.value)) {
    router.push('/account')
  } else {
    error.value = 'Неверный код. Попробуйте ещё раз.'
  }
}
</script>
