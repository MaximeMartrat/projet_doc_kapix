import { createI18n } from 'vue-i18n'
import { forOwn, isArray, isPlainObject, isString } from 'lodash-es'
import { NOOP, getFallbackLocale } from 'kapix-components-vue3'
import appInfo from '~/app-info.json'
import type { UserModule } from '~/types'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
//
// Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
const messages = Object.entries(import.meta.glob<{ default: any }>('../../locales/**/*.json', { eager: true }))
  .map(([key, value]) => {
    const json = key.endsWith('.json')
    const localeWithPageName = key.slice(14, json ? -5 : -4)
    return [localeWithPageName.split('/')[0], value.default]
  }).reduce<KeyValuePair>((previousValue: KeyValuePair<any>, [key, value]: any[]) => {
    previousValue[key] = {
      ...previousValue[key],
      ...value
    }
    return previousValue
  }, {})

let _i18n = NOOP
type DefaltValueType = Nullable<string | number | Date>
export function $translate (key: string, defaultValue?: DefaltValueType, options?: object | Array<any>) {
  const t = _i18n.global && _i18n.global.t
  return _translate(t, key, defaultValue, options)
}

function _translate ($t: any, key: string, defaultValue?: DefaltValueType, options?: object | Array<any>) {
  const trValue = $t && $t(key, options)
  if (trValue !== undefined && trValue !== key) {
    return trValue
  }
  else if (options && defaultValue) {
    if (isPlainObject(options)) {
      forOwn(options, (option, key) => {
        defaultValue = defaultValue!.toString().replaceAll(`{${key}}`, option)
      })
    }
    else if (isArray(options)) {
      options.forEach((option, index) => {
        defaultValue = defaultValue!.toString().replaceAll(`{${index}}`, option)
      })
    }
  }
  return defaultValue
}

const fallbackLocale = getFallbackLocale(
  appInfo.defaultLanguage,
  appInfo.fallbackLanguage,
  appInfo.supportedLanguages
)

export const install: UserModule = ({ app, router }) => {
  let defaultLanguage = appInfo.defaultLanguage
  try {
    if (typeof window !== 'undefined' && window.navigator.language) {
      defaultLanguage = window.navigator.language
    }
  }
  catch (e) {}

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: defaultLanguage,
    fallbackLocale,
    messages,
    fallbackWarn: false,
    missingWarn: false
  })
  i18n.global.locale.value = defaultLanguage
  _i18n = i18n
  app.use(i18n)
  app.config.globalProperties.t = function(key: string, defaultValue?: DefaltValueType, options?: object | Array<any>) {
    return _translate(this.$t, key, defaultValue, options)
  }

  router.beforeEach((to, from, next) => {
    if (isString(to.name) && to.name.includes('-')) {
      const paramsLocale = to.name.split('-').slice(-2).join('-')
      if (paramsLocale.length === 5) {
        app.config.globalProperties.$i18n.locale = paramsLocale
      }
    }
    return next()
  })
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    t: (key: string, defaultValue: Nullable<string | number | Date>, options?: object) => string | undefined
  }
}
