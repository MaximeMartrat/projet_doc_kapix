import { ref } from 'vue'
const isActive = ref(false)
export function displaySearch () {
  isActive.value = !isActive.value
}
export { isActive }