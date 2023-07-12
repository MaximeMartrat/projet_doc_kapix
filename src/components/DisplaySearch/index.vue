<template>
  <div
    :class="theme"
    class="display-search">
    <div class="header-search">
      <logo></logo>
      <h2>KAPIX SEARCH</h2>
    </div>
    <form class="display-form">
      <input
        v-model="input"
        :class="theme"
        class="search-input"
        placeholder="looking for..."
        @focus="display">
    </form>
    <div
      v-if="isActive"
      class="display-container">
      <div
        v-for="page in filteredList()"
        :key="page"
        class="item-page"
        :class="theme">
        <template
          v-if="page?.includes('composants-')">
          <h2>Composants</h2>
          <ButtonList
            :link="page.replace('composants-', '')"
            @click="displaySearch"></ButtonList>
        </template>
        <template v-else>
          <ButtonList
            :link="page"
            @click="displaySearch"></ButtonList>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import './style.scss'
import { ref } from 'vue'
import Logo from '../Logo/index.vue'
import ButtonList from '~/components/ButtonList/index.vue'
import { displaySearch } from '~/components/ButtonSearch/store'
import { theme } from '~/components/ButtonStyle/store'

const input = ref('')
const router = useRouter()
const exceptionsPage = ['all', 'index', 'Index-fr-FR', 'Index-en-US', 'checkbox-fr-FR', 'checkbox-en-US']
const allPages = router.getRoutes().map(route => route.name).filter(name => name)
const pages = allPages.map(page => page?.toString()).filter(page => page !== undefined && !exceptionsPage.includes(page as string))
const isActive = ref(false)

function filteredList () {
  const searchText = input.value.trim().toUpperCase()
  if (searchText.length <= 1) {
    return []
  }
  else {
    return pages.filter(page =>
      page?.toUpperCase().includes(input.value.toUpperCase()))
  }
}

function display () {
  isActive.value = !isActive.value
}

</script>
