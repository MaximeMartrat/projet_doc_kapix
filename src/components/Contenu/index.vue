<template>
  <div
    :class="theme">
    <NavLeft></NavLeft>
  </div>
  <div
    :class="theme"
    class="container-main">
    <div class="container-content"></div>
    <div
      v-for="page in allPages"
      :key="page"
      class="container-content">
      <component
        :is="getPage(page)"
        v-if="Link === page"
      >
      </component>
    </div>
    <div
      v-for="composant in composants"
      :key="composant"
      class="container-content">
      <component
        :is="getComposant(composant)"
        v-if="Link === composant"
      >
      </component>
    </div>
    <Footer
      :currentComposant="Link"
      @change-composant="updateLink"></Footer>
  </div>
</template>
<script setup lang="ts">
import './style.scss'
import { defineAsyncComponent, ref } from 'vue'
import Footer from '~/components/Footer-contenu/index.vue'
import { Link } from '~/components/ButtonList/store'
import { theme } from '~/components/ButtonStyle/store'
import NavLeft from '~/components/Navbar-g/index.vue'
// importattion du router
const router = useRouter()
// récupération de toutes les pages
const allPages = router.getRoutes().map(route => route.name).filter(name => name)
const exceptionsPage = ['all', 'index']
// filtre pour ignorer les pages inutiles
const pages = allPages.map(page => page?.toString()).filter(page => page !== undefined && !page.endsWith('en-US') && !page.endsWith('fr-FR') && !exceptionsPage.includes(page as string))
// pages de composants
const composants = pages.map(page => page?.toString()).filter(page => page?.includes('composants')).map(page => page?.replace('composants-', ''))
const getPage = (page: string) => defineAsyncComponent(() => import(`../../pages/${page}/index.vue`).then(module => module.default))
const getComposant = (composant: string) => defineAsyncComponent(() => import(`../../pages/composants/${composant}/index.vue`).then(module => module.default))
const linkRef = ref(Link)
const updateLink = (newLink: string) => {
  linkRef.value = newLink
}

</script>

