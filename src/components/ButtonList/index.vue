<template>
  <button
    class="button-list"
    @click="checkLink(link)">
    {{ link }}
  </button>
</template>
<script setup lang="ts">
import './style.scss'
import { checkLink } from './store'
defineProps({
  link: {
    type: String,
    default: 'accueil'
  }
})
</script>
