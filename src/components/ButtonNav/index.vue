<template>
  <div class="button-nav-container">
    <button
      :class="theme"
      class="button-nav"
      @click="handleClick(index, action)">
      {{ text }}
      <template v-if="action === 'link' && isActive[index]">
        <template v-if="page === 'pages'">
          <ul
            v-for="vue in intro"
            :key="vue"
            :class="theme"
            class="linklist">
            <li>
              <ButtonList :link="vue"></ButtonList>
            </li>
          </ul>
        </template>
        <template v-if="page === 'composants'">
          <ul
            v-for="vue in composants"
            :key="vue"
            :class="theme"
            class="linklist">
            <li>
              <ButtonList :link="vue?.toString().replace('composants-', '')"></ButtonList>
            </li>
          </ul>
        </template>
      </template>
    </button>
  </div>
</template>

<script setup lang="ts">
import ButtonList from '../ButtonList/index.vue'
import { handleClick, isActive } from './store'
import './style.scss'
import { theme } from '~/components/ButtonStyle/store'
const router = useRouter()
const allPages = router.getRoutes().map(route => route.name).filter(name => name)
const exceptionsPage = ['all', 'index', 'Index-fr-FR', 'Index-en-US', 'checkbox-fr-FR', 'checkbox-en-US']
const pages = allPages.map(page => page?.toString()).filter(page => page !== undefined && !exceptionsPage.includes(page as string))
const intro = pages.map(page => page?.toString()).filter(page => !page?.includes('composants'))
const composants = pages.map(page => page?.toString()).filter(page => page?.includes('composants'))

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
