<template>
  <button
    @click="changeTheme">
    light/dark
  </button>
</template>
<script setup lang="ts">
import { changeTheme } from './store'
</script>
