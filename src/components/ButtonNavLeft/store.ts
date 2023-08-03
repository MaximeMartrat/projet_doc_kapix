import { ref } from 'vue'
import type { Ref } from 'vue'

const isButtonHovered: Ref<number> = ref(-1)
const isListHovered: Ref<boolean[]> = ref([])
const isButtonClicked = ref(-1)
const clickedRemove = ref(-1)
export function showList (index: number) {
  if (!isListHovered.value[index]) {
    isButtonHovered.value = index
    isListHovered.value[index] = true
    isButtonClicked.value = index
    clickedRemove.value = -1
  }
  else {
    hideList(index)
    isButtonClicked.value = -1
    clickedRemove.value = index
  }
}

export function hideList (index: number) {
  isButtonHovered.value = -1
  isListHovered.value[index] = false
}

export { clickedRemove, isButtonHovered, isListHovered, isButtonClicked }
