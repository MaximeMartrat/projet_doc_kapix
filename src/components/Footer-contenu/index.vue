<template>
  <div
    :class="theme"
    class="footer-container">
    <p class="ready-for-more">
      Ready for more?
      Continue your learning with related content selected by the Team
      or move between pages by using the navigation links below.
    </p>
    <NavFooter></NavFooter>
    <FooterLink
      class="footer-link"
      :currentComposant="props.currentComposant"
      @change-composant="changeComposant"></FooterLink>
  </div>
</template>
<script setup lang="ts">
import './style.scss'
import { theme } from '~/components/ButtonStyle/store'
import NavFooter from '~/components/NavFooter/index.vue'
import FooterLink from '~/components/FooterLink/index.vue'
const emit = defineEmits(['change-composant'])
// eslint-disable-next-line vue/require-prop-types
const props = defineProps(['currentComposant'])
const changeComposant = (newComposant: string) => {
  emit('change-composant', newComposant)
}
</script>
