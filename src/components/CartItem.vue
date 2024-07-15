<script setup>
const emit = defineEmits(['removeFromCart'])

defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number
})
</script>

<template>
  <div class="flex items-center border border-slate-100 p-4 rounded-xl gap-4">
    <img class="w-16 h-16" :src="imageUrl" alt="Cart Item" />

    <div class="flex flex-col flex-1">
      <p>{{ title }}</p>
      <div class="flex justify-between mt-2">
        <b class="flex-1">{{ price }} ⃀</b>
        <img
          @click="emit('removeFromCart')"
          src="/close.svg"
          alt="Close"
          class="opacity-40 cursor-pointer transition hover:opacity-100"
        />
      </div>
    </div>
  </div>
</template>
