<template>
  <nav
    :class="theme"
    class="navleft">
  </nav>
</template>
<script setup lang="ts">
import './style.scss'
import { theme } from '~/components/ButtonStyle/store'
</script>
