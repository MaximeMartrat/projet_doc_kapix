<template>
  <button
    class="i-fa-search"
    @click="displaySearch"
  >
  </button>
  <DisplaySearch
    v-if="isActive"
    class="displayS"
    @close="hideDisplaySearch"
  ></DisplaySearch>
</template>
<script setup lang="ts">
import './style.scss'
import { displaySearch, hideDisplaySearch, isActive } from './store'

// Ajouter un écouteur d'événement au montage du composant
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

// Supprimer l'écouteur d'événement lorsque le composant est démonté
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

// Vérifier si le clic est à l'extérieur du composant DisplaySearch
function handleClickOutside (event: MouseEvent) {
  const target = event.target as HTMLElement
  const displaySearchElement = document.querySelector('.displayS')

  // Vérifier si le clic n'est pas dans le composant DisplaySearch et n'est pas dans le bouton qui ouvre le composant
  if (displaySearchElement && !displaySearchElement.contains(target) && !target.classList.contains('i-fa-search')) {
    hideDisplaySearch()
  }
}
</script>
