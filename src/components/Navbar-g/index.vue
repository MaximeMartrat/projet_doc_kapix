<template>
  <nav
    :class="theme"
    class="navleft">
    <ul class="navleftlist">
      <li>
        <ButtonNav
          :index="4"
          text="Start"
          action="link"
          page="pages">
        </ButtonNav>
      </li>
      <li>
        <ButtonNav
          :index="5"
          text="Composants"
          action="link"
          page="composants">
        </ButtonNav>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import './style.scss'
import ButtonNav from '../ButtonNav/index.vue'
import { theme } from '~/components/ButtonStyle/store'

</script>
