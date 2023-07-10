<template>
  <button
    class="search"
    @click="displaySearch">
    SEARCH
  </button>
  <DisplaySearch v-if="isActive"></DisplaySearch>
</template>
<script setup lang="ts">
import './style.scss'
import { displaySearch, isActive } from './store'
import DisplaySearch from '~/components/DisplaySearch/index.vue'

</script>
