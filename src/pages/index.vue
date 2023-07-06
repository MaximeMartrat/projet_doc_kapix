<template>
  <div>
    <NavLeft></NavLeft>
  </div>
  <div>
    <NavRight></NavRight>
  </div>
  <div>
    <Contenu></Contenu>
  </div>
</template>
<route>
  {
    "meta": {
      "layout": "Header"
    }
  }
</route>

<script setup lang="ts">
import { generateMeta } from 'kapix-components-vue3'
import { checkBoxPreview } from './Index/store'
import { appDataStore } from '~/stores'
import './Index/style.scss'
import './Index/style.custom.scss'
import NavLeft from '~/components/Navbar-g/index.vue'
import NavRight from '~/components/Navbar-d/index.vue'
import Contenu from '~/components/Contenu/index.vue'
defineOptions({
  name: 'HomePage'
})
provide('$scoped', '-p1')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = checkBoxPreview()
provide('$elements', page.$elements)
provide('$parentPage', page)
onBeforeMount(() => page.beforeMount())
onMounted(() => page.mounted())
onServerPrefetch(() => page.serverPrefetch())
onBeforeUnmount(() => page.beforeUnmount())
onUnmounted(() => page.unmounted())

// SEO
if (props.seo) {
  // https://github.com/vueuse/head
  useHead({
    title: computed(() => page.$title),
    htmlAttrs: { lang: appData.locale },
    meta: computed(() => generateMeta({
      title: page.$title,
      description: page.$description,
      canonicalUrl: appData.hostname,
      publishedTime: page.$publishedTime,
      modifiedTime: page.$modifiedTime,
      ...appData.twitter
    }))
  })

  useSchemaOrg([
    // https://vue-schema-org.netlify.app/api/schema/webpage.html#type-definition
    defineWebPage({
      name: page.$title,
      description: page.$description,
      inLanguage: appData.locale,
      primaryImageOfPage: appData.twitter.image,
      datePublished: page.$publishedTime
      // dateModified: page.$modifiedTime?.toISOString()
    })
  ])
}
</script>
