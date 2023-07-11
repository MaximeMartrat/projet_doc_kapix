<template>
  <div class="button-nav-container">
    <button
      class="button-nav"
      @click="handleClick(index, action)">
      {{ text }}
      <template v-if="action === 'link' && isActive[index]">
        <ul class="linklist">
          <li>
            <ButtonList link="accueil"></ButtonList>
          </li>
          <li>
            <ButtonList link="checkbox"></ButtonList>
          </li>
        </ul>
      </template>
    </button>
  </div>
</template>

<script setup lang="ts">
import ButtonList from '../ButtonList/index.vue'
import { handleClick, isActive } from './store'
import './style.scss'
defineProps({
  index: {
    type: Number,
    required: true
  },
  text: {
    type: String,
    default: 'redirect'
  },
  action: {
    type: String,
    default: 'navigate'
  }
})
</script>
