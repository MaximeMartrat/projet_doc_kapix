import { ref } from 'vue'
import './style.scss'
export const isActive = ref(false)

export function handleClick (action: string) {
  if (action === 'navigate') {
    // navigation
  }
  else if (action === 'link') {
    // liste déroulante de liens
    isActive.value = !isActive.value // Inverse la valeur de isActive à chaque clic sur le bouton
  }
  else {
    // autres actions
  }
}
