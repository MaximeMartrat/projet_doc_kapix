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
        <template v-if="page === 'Home'">
          <ButtonList
            link="Home"
            @click="displaySearch"></ButtonList>
        </template>
        <template v-if="page === 'Checkbox'">
          <ButtonList
            link="Checkbox"
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
import { displaySearch } from '~/components/ButtonSearch/store.ts'
const input = ref('')
const pages = ['Home', 'Checkbox', 'NotFound']
const isActive = ref(false)
function filteredList () {
  const searchText = input.value.trim().toUpperCase()
  if (searchText.length <= 1) {
    return []
  }
  else {
    return pages.filter(page =>
      page.toUpperCase().includes(input.value.toUpperCase())
    )
  }
}
function display () {
  isActive.value = !isActive.value
}

</script>
