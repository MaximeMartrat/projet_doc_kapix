<template>
  <div class="container-main">
    <template v-if="Link === 'Home'">
      <Home></Home>
    </template>
    <template v-if="Link === 'Checkbox'">
      <Checkbox></Checkbox>
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
</script>
