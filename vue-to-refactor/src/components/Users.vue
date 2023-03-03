<script setup>
const message = "hello";
defineProps({
  users: {
    type: Array,
  },
});
</script>

<template>
  <span data-testid="users-list" v-if="users.length" />
  <li v-for="user in users" :key="user" data-testid="user">
    {{ user }}
  </li>
  {{ message }}
</template>
