<template>
  <div class="pagination">
    <button
      class="previous"
      @click="goToPreviousComposant">
      {{ composants[currentPageIndex - 1] }}
    </button>
    <button
      class="next"
      @click="goToNextComposant">
      {{ composants[currentPageIndex + 1] }}
    </button>
  </div>
</template>

<script setup lang="ts">
import './style.scss'
import { watch } from 'vue'
import type { PropType } from 'vue'

const emit = defineEmits()
// importattion du router
const router = useRouter()
// récupération de toutes les pages
const allPages = router.getRoutes().map(route => route.name).filter(name => name)
const exceptionsPage = ['all', 'index']
// filtre pour ignorer les pages inutiles
const pages = allPages.map(page => page?.toString()).filter(page => page !== undefined && !page.endsWith('en-US') && !page.endsWith('fr-FR') && !exceptionsPage.includes(page as string))
// pages de composants
const composants = pages.map(page => page?.toString()).filter(page => page?.includes('composants')).map(page => page?.replace('composants-', ''))

const props = defineProps({
  currentComposant: {
    type: String as PropType<string>, // Spécifiez le type ici (dans cet exemple, c'est une chaîne)
    required: true // Vous pouvez spécifier si la prop est obligatoire ou non ici
  }
})
let currentPageIndex = composants.indexOf(props.currentComposant)
const hasPrevious = currentPageIndex > 0
const hasNext = currentPageIndex < composants.length - 1

watch(() => props.currentComposant, (newComposant) => {
  currentPageIndex = composants.indexOf(newComposant)
})
const goToPreviousComposant = () => {
  if (hasPrevious) {
    const previousComposant = composants[currentPageIndex - 1]
    emit('change-composant', previousComposant)
  }
}

const goToNextComposant = () => {
  if (hasNext) {
    const nextComposant = composants[currentPageIndex + 1]
    emit('change-composant', nextComposant)
  }
}

</script>
