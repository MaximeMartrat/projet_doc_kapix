<template>
  <input
    v-model="input"
    class="search"
    type="text"
    placeholder="Search..." />
  <div
    v-for="page in filteredList()"
    :key="page"
    class="item-page">
    <p>
      {{ page }}
    </p>
  </div>
  <div
    v-if="input&&!filteredList().length"
    class="item error">
    <p>pas de résultats</p>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import './style.scss'
const input = ref('')
const pages = ['Home', 'Checkbox', 'NotFound']
function filteredList () {
  return pages.filter(page =>
    page.toUpperCase().includes(input.value.toUpperCase())
  )
}
</script>
