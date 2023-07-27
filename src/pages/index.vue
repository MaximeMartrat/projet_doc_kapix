<template>
  <div>
    <Contenu></Contenu>
  </div>
</template>
<route>
  {
    "meta": {
      "layout": "Header"
    }
  }
</route>

<script setup lang="ts">
import './Index/style.scss'
import './Index/style.custom.scss'

defineOptions({
  name: 'HomePage'
})

</script>
