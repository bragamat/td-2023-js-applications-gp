<script setup>
import { ref } from 'vue';
import globals from '../fetch.js'

const props = defineProps({
  currentUser: {
    type: Object,
    required: true,
  }
})

const word = ref('')
const imageSrc = ref(null)
const isUserAdmin = props.currentUser.role === 'admin'

async function handleSubmit() {
  const res = await globals.globalAPI()
  const data = res

  imageSrc.value = data.results[0]
}
</script>

<template>
  <main>the welcome</main>

  <form @submit.prevent="handleSubmit">
    <input v-model="word" data-testid="image-search-input-api" />
    <button type="submit">buscar</button>
  </form>

  <div v-if="isUserAdmin" data-testid="warning-message-container">
  </div>

  <img v-if="imageSrc" data-testid="image-with-src" src="https://static.todamateria.com.br/upload/pl/an/planetaterra-cke.jpg?auto_optimize=low" />
</template>
