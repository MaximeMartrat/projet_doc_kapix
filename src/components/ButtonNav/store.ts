import { ref } from 'vue'
import './style.scss'
export const isActive = ref(false)

export function handleClick (action: string) {
  if (action === 'navigate') {
    // navigation
    console.log('nav')
  }
  else if (action === 'link') {
    // liste déroulante de liens
    console.log('link')
    isActive.value = !isActive.value // Inverse la valeur de isActive à chaque clic sur le bouton
  }
  else {
    // autres actions
    console.log('autres')
  }
}
