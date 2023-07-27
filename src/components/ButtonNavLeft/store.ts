import { ref } from 'vue'
import type { Ref } from 'vue'

const isButtonHovered: Ref<number> = ref(-1)
const isListHovered: Ref<boolean[]> = ref([])

export function showList (index: number) {
  if (isListHovered.value[index]) {
    hideList(index)
  }
  else {
    isButtonHovered.value = index
    isListHovered.value[index] = true
  }
}

export function hideList (index: number) {
  isButtonHovered.value = -1
  isListHovered.value[index] = false
}

export { isButtonHovered, isListHovered }
