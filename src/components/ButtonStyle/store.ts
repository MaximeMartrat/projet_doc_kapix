import { ref } from 'vue'

const theme = ref('light')
export function changeTheme () {
  if (theme.value === 'light') {
    theme.value = 'dark'
  }
  else {
    theme.value = 'light'
  }
}
export { theme }
