<script setup lang="ts">
import { reactive } from 'vue'

type User = {
  id: number,
  name: string
}

const user1: User = {
  id: 1,
  name: 'hiro'
}

const user2 = reactive({} as User)
user2.id = 2
user2.name = 'kane'

</script>

<template>
  <h2>reactive</h2>
  {{ user1.name }}<br>
  {{ user2.name }}
</template>
