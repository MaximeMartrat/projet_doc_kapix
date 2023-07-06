<template>
  <div class="navtop">
    <div class="navhead">
      <logo></logo>
      <div class="search">
        search
      </div>
    </div>
    <nav>
      <ul class="navlist">
        <li>
          <ButtonNav action="nav"></ButtonNav>
        </li>
        <li>
          <ButtonNav
            action="link"
            text="liste"></ButtonNav>
        </li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
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
import ButtonNav from '../Button-nav/index.vue'
</script>
