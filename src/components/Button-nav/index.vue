<template>
  <button
    class="button-nav"
    @click="handleClick">
    {{ text }}
  </button>
</template>

<script lang="ts">
import './style.scss'

export default {
  props: {
    text: {
      type: String,
      default: 'OK'
    },
    action: {
      type: String,
      default: 'navigate'
    }
  },
  methods: {
    handleClick () {
      if (this.action === 'navigate') {
        // navigation
        console.log('nav')
      }
      else if (this.action === 'link') {
        // liste déroulante de liens
        console.log('liens')
      }
      else {
        // autres actions
        console.log('autres')
      }
    }
  }
}
</script>
