<template>
  <div
    :class="theme"
    class="container-main">
    <div class="container-content">
      <Accueil v-if="Link === 'accueil'"></Accueil>
      <Checkbox v-if="Link === 'checkbox'"></Checkbox>
      <Bouton v-if="Link === 'bouton'"></Bouton>
      <Icone v-if="Link === 'icone'"></Icone>
    </div>
    <Footer></Footer>
  </div>
</template>
<script setup lang="ts">
import './style.scss'
import Footer from '../Footer-contenu/index.vue'
import { Link } from '~/components/ButtonList/store'
import { theme } from '~/components/ButtonStyle/store'
import Accueil from '~/pages/accueil/index.vue'
import Checkbox from '~/pages/checkbox/index.vue'
import Bouton from '~/pages/composants/bouton/index.vue'
import Icone from '~/pages/composants/icone/index.vue'
</script>
