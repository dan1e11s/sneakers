<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

import CardList from '../components/CardList.vue'
import InfoBlock from '../components/InfoBlock.vue'

const orders = ref([])

onMounted(async () => {
  try {
    const { data } = await axios('https://ac0f7681ebd472f2.mokky.dev/orders')

    orders.value = data.reduce((acc, order) => {
      return acc.concat(order.items)
    }, [])
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div v-if="orders.length === 0" class="flex h-full items-center">
    <InfoBlock
      title="У вас нет покупок"
      description="У вас пока нету покупок. Оформите хотя бы один заказ"
      image-url="/emoji-2.png"
    />
  </div>

  <div v-else>
    <h2 class="text-3xl font-bold mb-8">Мои покупки</h2>

    <CardList :items="orders" is-favorites />
  </div>
</template>
