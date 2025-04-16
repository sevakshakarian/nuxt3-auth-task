<template>
  <UModal v-model="isOpen">
    <UCard class="p-4">
      <div class="w-full mx-auto flex justify-center">
        <p class="text-gray-700 mb-6">
          Are you sure you want to log out?
        </p>
      </div>
      <div class="flex justify-center gap-3">
        <UButton color="gray" variant="ghost" @click="close">Cancel</UButton>
        <UButton color="blue" @click="confirm">Logout</UButton>
      </div>
    </UCard>
  </UModal>
</template>


<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue', 'confirm'])

const isOpen = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const close = () => {
  emit('update:modelValue', false)
}

const confirm = () => {
  emit('update:modelValue', false)
  emit('confirm')
}
</script>
