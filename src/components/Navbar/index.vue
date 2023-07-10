<template>
  <div class="navtop">
    <div class="navhead">
      <logo class="logo"></logo>
      <ButtonSearch class="'searchbar'"></ButtonSearch>
    </div>
    <nav>
      <ul class="navlist">
        <li>
          <ButtonNav
            index="0"
            text="liste1"
            action="link">
          </ButtonNav>
        </li>
        <li>
          <ButtonNav
            index="1"
            text="liste2"
            action="link">
          </ButtonNav>
        </li>
        <li>
          <ButtonNav>
          </ButtonNav>
        </li>
        <li></li>
      </ul>
      <ul class="tolllist">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
import './style.scss'
import Logo from '../Logo/index.vue'
import ButtonNav from '../ButtonNav/index.vue'
import ButtonSearch from '../ButtonSearch/index.vue'
</script>
