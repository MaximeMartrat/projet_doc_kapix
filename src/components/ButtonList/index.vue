<template>
  <button
    class="button-list"
    @click="handleLink(link)">
    {{ link }}
  </button>
</template>
<script setup lang="ts">
import './style.scss'
import { handleLink } from './store'
defineProps({
  link: {
    type: String,
    default: 'Home'
  }
})
</script>
