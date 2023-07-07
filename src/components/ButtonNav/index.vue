<template>
  <div class="button-nav-container">
    <button
      class="button-nav"
      @click="handleClick(action)">
      {{ text }}
      <template v-if="action === 'link' && isActive">
        <ul class="linklist">
          <li>
            <ButtonList link="Home"></ButtonList>
          </li>
          <li>
            <ButtonList link="Checkbox"></ButtonList>
          </li>
        </ul>
      </template>
    </button>
  </div>
</template>

<script setup lang="ts">
import ButtonList from '../ButtonList/index.vue'
import { isActive, handleClick } from './store'
defineProps({
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
