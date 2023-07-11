<template>
  <div
    :class="theme"
    class="footer-container">
    FOOTER
  </div>
</template>
<script setup lang="ts">
import './style.scss'
import { theme } from '~/components/ButtonStyle/store'
</script>
