<template>
  <div>
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/Navbar/index.vue'
</script>
