<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Account Page</h1>
      <UButton color="blue" @click="showConfirm = true">Logout</UButton>
      <LogoutConfirm v-model="showConfirm" @confirm="confirmLogout" />

    </div>
    <!-- Filters -->
    <div class="bg-white p-4 rounded shadow mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Filter by category -->
        <UFormGroup label="Filter by Category">
          <USelect
              v-model="selectedCategory"
              :options="categories"
              placeholder="Select category"
              clearable
          />
        </UFormGroup>

        <!-- Filter by status -->
        <UFormGroup label="Filter by Status">
          <USelect
              v-model="selectedStatus"
              :options="statuses"
              placeholder="Select status"
              clearable
          />
        </UFormGroup>

        <!-- Filter by date -->
        <UFormGroup label="Created After">
          <UInput type="date" v-model="selectedDate" />
        </UFormGroup>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white p-4 rounded shadow">
      <UTable :columns="columns" :rows="filteredData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'
const showConfirm = ref(false)
const confirmLogout = () => {
  auth.logout()
  router.push('/')
}

const router = useRouter()
const auth = useAuthStore()

const data = ref<any[]>([])
const selectedCategory = ref<string | null>(null)
const selectedStatus = ref<string | null>(null)
const selectedDate = ref<string | null>(null)

const categories = ref<string[]>([])
const statuses = ref<string[]>([])

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'category', label: 'Category' },
  { key: 'status', label: 'Status' },
  { key: 'price', label: 'Price ($)' },
  { key: 'date_created', label: 'Created Date' },
]

const filteredData = computed(() => {
  return data.value.filter(item => {
    const matchCategory = selectedCategory.value ? item.category === selectedCategory.value : true
    const matchStatus = selectedStatus.value ? item.status === selectedStatus.value : true
    const matchDate = selectedDate.value ? item.date_created >= selectedDate.value : true
    return matchCategory && matchStatus && matchDate
  })
})


onMounted(async () => {
  data.value = await $fetch('/data.json')
  categories.value = [...new Set(data.value.map(i => i.category))]
  statuses.value = [...new Set(data.value.map(i => i.status))]
})
</script>
