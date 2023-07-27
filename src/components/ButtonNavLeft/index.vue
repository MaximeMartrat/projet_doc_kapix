<template>
  <div class="button-nav-container-left">
    <button
      v-if="action === 'link'"
      ref="buttonRef"
      :class="theme"
      class="button-nav-left"
      @click="showList(index)"
    >
      {{ text }}
      <span
        v-if="!isListHovered[index]"
        class="i-fa-solid-caret-down">1</span>
      <span
        v-else
        class="i-fa-solid-caret-up">2</span>
      <div v-if="action === 'link' && (isButtonHovered === index || isListHovered[index])">
        <ul
          v-if="page === 'pages'"
          ref="listContainer"
          :class="{ [theme]: true, 'linklist-left': true, 'active': isButtonHovered === index || isListHovered }">
          <li
            v-for="vue in intro"
            :key="vue"
          >
            <ButtonList :link="vue"></ButtonList>
          </li>
        </ul>
        <ul
          v-if="page === 'composants'"
          ref="listContainer"
          :class="{ [theme]: true, 'linklist-left': true, 'active': isButtonHovered === index || isListHovered }">
          <li
            v-for="vue in composants"
            :key="vue">
            <ButtonList
              :link="vue?.toString().replace('composants-', '')"></ButtonList>
          </li>
        </ul>
      </div>
    </button>
    <button
      v-else
      :class="theme"
      class="button-nav"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import { isButtonHovered, isListHovered, showList } from './store'
import './style.scss'
import { theme } from '~/components/ButtonStyle/store'
const listContainer = ref(0)
const buttonRef = ref(0)

// importation du router
const router = useRouter()
// récupération de toutes les pages
const allPages = router.getRoutes().map(route => route.name).filter(name => name)
// Liste de pages inutiles
const exceptionsPage = ['all', 'index']
// filtre pour ignorer les pages inutiles
const pages = allPages.map(page => page?.toString()).filter(page => page !== undefined && !page.endsWith('en-US') && !page.endsWith('fr-FR') && !exceptionsPage.includes(page as string))
// pages d'intro
const intro = pages.map(page => page?.toString()).filter(page => !page?.includes('composants'))
// pages de composants
const composants = pages.map(page => page?.toString()).filter(page => page?.includes('composants'))
watch(listContainer, () => {
  const buttonHeight = listContainer.value?.clientHeight
  return buttonHeight
})

// propriétés des boutonNav
defineProps({
  index: {
    type: Number,
    required: false,
    default: 0
  },
  text: {
    type: String,
    default: 'redirect'
  },
  action: {
    type: String,
    default: 'navigate'
  },
  page: {
    type: String,
    default: 'pages'
  }
})
</script>
