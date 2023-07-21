<template>
  <button
    class="i-fa-search"
    @click="displaySearch">
  </button>
  <DisplaySearch v-if="isActive"></DisplaySearch>
</template>
<script setup lang="ts">
import './style.scss'
import { displaySearch, isActive } from './store'
import DisplaySearch from '~/components/DisplaySearch/index.vue'
</script>
