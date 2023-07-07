import './style.scss'
import { ref } from 'vue'

export const Link = ref('Home')

export function handleLink (link: string) {
  if (link === 'Home') {
    // navigation
    Link.value = 'Home'
  }
  else if (link === 'Checkbox') {
    Link.value = 'Checkbox'
  }
  else {
    // autres actions
    console.log('autres')
  }
}
