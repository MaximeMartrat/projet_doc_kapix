<template>
  <div class="display-search">
    <div class="header-search">
      <logo></logo>
      <h2>KAPIX SEARCH</h2>
    </div>
    <form class="display-form">
      <input
        v-model="input"
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
        class="item-page">
        <ButtonList
          :link="page"
          @click="displaySearch"></ButtonList>
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
const input = ref('')
const router = useRouter()
const allPages = router.getRoutes().map(route => route.name).filter(name => name)
const pages = allPages.map(page => page?.toString())
const isActive = ref(false)
function filteredList () {
  const searchText = input.value.trim().toUpperCase()
  if (searchText.length <= 1) {
    return []
  }
  else {
    return pages.filter(page =>
      page?.toUpperCase().includes(input.value.toUpperCase())
    )
  }
}
function display () {
  isActive.value = !isActive.value
}

</script>
