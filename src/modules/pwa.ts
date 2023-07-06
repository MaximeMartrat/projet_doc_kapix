import { kaRegisterSW } from 'kapix-components-vue3'
import type { UserModule } from '~/types'

// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
export const install: UserModule = async ({ isClient, router }) => {
  if (isClient) {
    await router.isReady()
    const { registerSW } = await import('virtual:pwa-register')
    kaRegisterSW({
      registerSW,
      router
    })
  }
}
