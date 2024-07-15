<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

import CardList from '../components/CardList.vue'
import InfoBlock from '../components/InfoBlock.vue'

const favorites = ref([])

onMounted(async () => {
  try {
    const { data } = await axios('https://ac0f7681ebd472f2.mokky.dev/favorites?_relations=items')

    favorites.value = data.map((obj) => obj.item)
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div v-if="favorites.length === 0" class="flex h-full items-center">
    <InfoBlock
      title="Закладок нет :("
      description="Вы ничего не добавляли в закладки"
      image-url="/emoji-1.png"
    />
  </div>

  <div v-else>
    <h2 class="text-3xl font-bold mb-8">Мои закладки</h2>

    <CardList :items="favorites" is-favorites />
  </div>
</template>
