import './style.scss'
import { ref } from 'vue'

export const Link = ref('accueil')

export function checkLink (link: string) {
  if (link === 'accueil') {
    // Home
    Link.value = 'accueil'
  }
  else if (link === 'checkbox') {
    // Checkbox
    Link.value = 'checkbox'
  }
  else {
    // autres actions
  }
}
