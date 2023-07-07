import './style.scss'
import { ref } from 'vue'

export const Link = ref('Home')

export function checkLink (link: string) {
  if (link === 'Home') {
    // Home
    Link.value = 'Home'
  }
  else if (link === 'Checkbox') {
    // Checkbox
    Link.value = 'Checkbox'
  }
  else {
    // autres actions
  }
}
