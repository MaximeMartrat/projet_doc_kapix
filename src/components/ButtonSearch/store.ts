import { ref } from 'vue'
const isActive = ref(false)
const isClosing = ref(false)
export function displaySearch () {
  isActive.value = true
  isClosing.value = false
}
export function hideDisplaySearch () {
  isClosing.value = true
  setTimeout(() => {
    isActive.value = false
    isClosing.value = false
  }, 400)
}

export { isActive, isClosing }
