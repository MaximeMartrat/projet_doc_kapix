<template>
  <div
    :class="theme"
    class="container-main">
    <template v-if="Link === 'accueil'">
      <Home :class="theme"></Home>
    </template>
    <template v-if="Link === 'checkbox'">
      <Checkbox :class="theme"></Checkbox>
    </template>
    <Footer></Footer>
  </div>
</template>
<script setup lang="ts">
import './style.scss'
import Footer from '../Footer-contenu/index.vue'
import Home from '~/pages/accueil/index.vue'
import Checkbox from '~/pages/checkbox/index.vue'
import { Link } from '~/components/ButtonList/store'
import { theme } from '~/components/ButtonStyle/store'
</script>
