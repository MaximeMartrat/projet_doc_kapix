<template>
  <div
    :class="theme"
    class="footer-container">
    <p>
      Ready for more?
      Continue your learning with related content selected by the Team
      or move between pages by using the navigation links below.
    </p>
  </div>
</template>
<script setup lang="ts">
import './style.scss'
import { theme } from '~/components/ButtonStyle/store'
</script>
