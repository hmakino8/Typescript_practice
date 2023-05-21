<script setup lang="ts">
import { ref, computed } from 'vue'

const amount = ref<number>(0)

const subTotal = computed(()=> amount.value * 3000 )
</script>

<template>
  <h2>Computed</h2>
  Price: 3000<br>
  Amount: <input type="number" v-model="amount" /> <br>
  total: {{ subTotal }}
</template>
