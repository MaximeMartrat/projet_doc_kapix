import { ref } from 'vue'

const isActive = ref([])

export function handleClick (index: number, action: string) {
  if (action === 'navigate') {
    // navigation
  }
  else if (action === 'link') {
    isActive.value[index] = !isActive.value[index] // Inverse la valeur de isActive pour l'index spécifié
  }
  else {
    // autres actions
  }
}

export { isActive }
