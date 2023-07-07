<template>
  <div class="navtop">
    <div class="navhead">
      <logo></logo>
      <div class="search">
        <SearchBar></SearchBar>
      </div>
    </div>
    <nav>
      <ul class="navlist">
        <li>
          <ButtonNav
            text="liste1"
            action="link">
          </ButtonNav>
        </li>
        <li>
          <ButtonNav>
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
import SearchBar from '../SearchBar/index.vue'
</script>
