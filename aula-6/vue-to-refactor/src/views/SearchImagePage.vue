<script setup>
import { ref } from 'vue';

const props = defineProps({
  currentUser: {
    type: Object,
    required: true,
  },
  api: {
    type: Object,
    required: false,
  },
  validator: {
    type: Object,
    required: false
  },
  errorHandler: {
    type: Object,
    required: false
  }
})

const word = ref('')
const imageSrc = ref(null)

const hasError = ref({ hasError: false})

const isUserAdmin = props.currentUser.role === 'admin'

const isGuestUser = props.currentUser.role === 'guest'

async function handleSubmit() {
  const { err, res } = await props.errorHandler.handle(props.api.fetch)

  if (err && !res) {
    hasError.value = err
    console.log('hasError?=> ', hasError.value)
    return 
  } else {
    const data = res

    imageSrc.value = data.results[0]
  }
}
</script>

<template>
  <main>the welcome</main>

  <form @submit.prevent="handleSubmit">
    <input v-model="word" data-testid="image-search-input-api" />
    <button type="submit">buscar</button>
  </form>

  <div v-if="isUserAdmin" data-testid="warning-message-container">
    API demorou menos de 5 segundos pra retornar
  </div>

{{ isGuestUser}} - {{ hasError}}
  <div v-if="isGuestUser && hasError.hasError">
    Signup!
  </div>

  <img v-if="imageSrc" data-testid="image-with-src"
    src="https://static.todamateria.com.br/upload/pl/an/planetaterra-cke.jpg?auto_optimize=low" />
</template>
