<template>
  <div class="button-nav-container">
    <button
      v-if="action === 'link'"
      :class="theme"
      class="button-nav"
      @mouseover="showList(index)"
      @mouseleave="hideList(index)"
    >
      {{ text }}
      <template v-if="action === 'link' && (isButtonHovered === index || isListHovered[index])">
        <ul
          v-if="page === 'pages'"
          :class="{ [theme]: true, 'linklist': true, 'active': isButtonHovered === index || isListHovered }"
          @mouseover="showList(index)"
          @mouseleave="hideList(index)">
          <li
            v-for="vue in intro"
            :key="vue"
          >
            <ButtonList :link="vue"></ButtonList>
          </li>
        </ul>
        <ul
          v-if="page === 'composants'"
          :class="{ [theme]: true, 'linklist': true, 'active': isButtonHovered === index || isListHovered }"
          @mouseover="showList(index)"
          @mouseleave="hideList(index)">
          <li
            v-for="vue in composants"
            :key="vue">
            <ButtonList
              :link="vue?.toString().replace('composants-', '')"></ButtonList>
          </li>
        </ul>
      </template>
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
import ButtonList from '../ButtonList/index.vue'
import { hideList, isButtonHovered, isListHovered, showList } from './store'
import './style.scss'
import { theme } from '~/components/ButtonStyle/store'

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
