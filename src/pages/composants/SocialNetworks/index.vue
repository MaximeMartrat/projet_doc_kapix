<template>
  <KaContainer
    code="social-networks"
    :data="page.$info.socialNetworks">
    <!-- Main -->
    <KaContainer code="main">
      <!-- Title -->
      <KaContainer code="title">
        <KaText code="text-1">
          <h1 v-html="t('socialNetworks.main.title.text1.value', `Social Networks`)" />
        </KaText>
        <KaText code="description">
          <span v-html="t('socialNetworks.main.title.description.value', `Social Network components allow display an icon with a selected url, usually towards social networks.`)" />
        </KaText>
      </KaContainer>
      <!-- Basic -->
      <KaContainer code="basic">
        <KaText code="usage">
          <h2 v-html="t('socialNetworks.main.basic.usage.value', `Usage`)" />
        </KaText>
        <KaText code="v-color-picker-is">
          <span v-html="t('socialNetworks.main.basic.vColorPickerIs.value', `<span style='background-color:rgb(245,245,245);color:rgb(0,0,0);'>v-color-picker </span>is a color picker, usefull for picking precise colors.`)" />
        </KaText>
        <KaSocialSharing
          code="email"
          inner />
        <KaCodePreview
          code="code-preview"
          :options="{ elementToPreview: `pE59ngnjMGoqSBQVW1CLPH` }"
          value="https://www.kapix.fr" />
        <KaText code="api-il-manque-des">
          <h2 v-html="t('socialNetworks.main.basic.apiIlManqueDes.value', `API (il manque des informations)`)" />
        </KaText>
      </KaContainer>
      <!-- Auto Grow -->
      <KaContainer code="auto-grow">
        <KaText code="exemple">
          <h2 v-html="t('socialNetworks.main.autoGrow.exemple.value', `Exemple`)" />
        </KaText>
        <KaText code="text-2">
          <h3 v-html="t('socialNetworks.main.autoGrow.text2.value', `Usage`)" />
        </KaText>
        <KaText code="text-3">
          <h4 v-html="t('socialNetworks.main.autoGrow.text3.value', `Auto Grow`)" />
        </KaText>
        <KaText code="when-using-the-auto-grow">
          <span v-html="t('socialNetworks.main.autoGrow.whenUsingTheAutoGrow.value', `When using the auto-grow prop, textarea’s will automatically increase in size when the contained text exceeds its size.`)" />
        </KaText>
        <KaTextAreaInput
          v-model="page.textArea.value"
          code="text-area"
          :options="{ placeholder: t('socialNetworks.main.autoGrow.textArea.placeholder', `Text area`) }" />
        <KaCodePreview
          code="code-preview-1"
          :options="{ elementToPreview: `erkDjpYbggsaSsBnHfxHsu` }"
          value="https://www.kapix.fr" />
      </KaContainer>
      <!-- Colors -->
      <KaContainer code="colors">
        <KaText code="background-color">
          <h4 v-html="t('socialNetworks.main.colors.backgroundColor.value', `Background color`)" />
        </KaText>
        <KaText code="the-background-color">
          <span v-html="t('socialNetworks.main.colors.theBackgroundColor.value', `The background-color and color props give you more control over styling v-textarea’s.`)" />
        </KaText>
        <KaTextAreaInput
          v-model="page.textArea1.value"
          code="text-area-1"
          :options="{
            style: {
              color: `$invert`,
              innerBackgroundColor: appData.theme.fontHyperlinkColor
            },
            placeholder: t('socialNetworks.main.colors.textArea1.placeholder', `Text area 1`)
          }" />
        <KaCodePreview
          code="code-preview-2"
          :options="{ elementToPreview: `a7uVi7C8UQ8c1XMSvRUW2U` }"
          value="https://www.kapix.fr" />
      </KaContainer>
      <!-- Autocomplete -->
      <KaContainer code="autocomplete">
        <KaText code="browser-autocomplete">
          <h4 v-html="t('socialNetworks.main.autocomplete.browserAutocomplete.value', `Browser autocomplete`)" />
        </KaText>
        <KaText code="the-autocomplete-prop">
          <span v-html="t('socialNetworks.main.autocomplete.theAutocompleteProp.value', `The autocomplete prop gives you the option to enable the browser to predict user input.`)" />
        </KaText>
        <KaTextAreaInput
          v-model="page.textArea1.value"
          code="text-area-1"
          :options="{ placeholder: t('socialNetworks.main.autocomplete.textArea1.placeholder', `Text area`) }" />
        <KaCodePreview
          code="code-preview-3"
          :options="{ elementToPreview: `3FbtFQkcWN3ZmqR9YUCXQ5` }"
          value="https://www.kapix.fr" />
      </KaContainer>
      <!-- Clearable -->
      <KaContainer code="clearable">
        <KaText code="text-4">
          <h4 v-html="t('socialNetworks.main.clearable.text4.value', `Clearable`)" />
        </KaText>
        <KaText code="you-can-clear-the-text">
          <span v-html="t('socialNetworks.main.clearable.youCanClearTheText.value', `You can clear the text from a v-textarea by using the clearable prop, and customize the icon used with the clearable-icon prop.`)" />
        </KaText>
        <KaTextAreaInput
          v-model="page.thisIsClearableText.value"
          code="this-is-clearable-text"
          :options="{ placeholder: `Text` }" />
        <KaCodePreview
          code="code-preview-4"
          :options="{ elementToPreview: `9r4S3mgj8TQMExpRxLxiVL` }"
          value="https://www.kapix.fr" />
      </KaContainer>
      <!-- Counter -->
      <KaContainer code="counter">
        <KaText code="text-5">
          <h4 v-html="t('socialNetworks.main.counter.text5.value', `Counter`)" />
        </KaText>
        <KaText code="the-counter-prop-informs">
          <span v-html="t('socialNetworks.main.counter.theCounterPropInforms.value', `The counter prop informs the user of a character limit for the v-textarea.`)" />
        </KaText>
        <KaTextAreaInput
          v-model="page.textArea2.value"
          code="text-area-2"
          :options="{ placeholder: `Text` }" />
        <KaCodePreview
          code="code-preview-5"
          :options="{ elementToPreview: `3aQXSZjNZdBzkrkfsufedZ` }"
          value="https://www.kapix.fr" />
      </KaContainer>
    </KaContainer>
  </KaContainer>
</template>

<route>
{
  "meta": {
    "layout": "Header:WithLeftSidebar"
  }
}
</route>

<script setup lang="ts">
import { generateMeta } from 'kapix-components-vue3'
import { headerWithLeftSidebarSocialNetworks } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarSocialNetworks'
})
provide('$scoped', '-p14')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = headerWithLeftSidebarSocialNetworks()
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
