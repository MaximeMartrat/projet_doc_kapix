<template>
  <KaContainer
    code="image"
    :data="page.$info.image">
    <!-- Section 1 -->
    <KaContainer
      code="section-1"
      inner>
      <KaText
        code="grand-titre"
        :options="{
          style: {
            color: appData.theme.fontColor2,
            fontFamily: appData.theme.fontFamily2
          }
        }">
        <h1 v-html="t('image.section1.grandTitre.value', `Images`)" />
      </KaText>
      <KaText code="description">
        <span v-html="t('image.section1.description.value', `The v-img component is packed with features to support rich media. Combined with the <a href='https://github.com/vuetifyjs/vuetify-loader'>vuetify-loader</a>, you can add dynamic progressive images to provide a better user experience.`)" />
      </KaText>
    </KaContainer>
    <!-- Section 2 -->
    <KaContainer
      code="section-2"
      inner>
      <KaText
        code="titre"
        :options="{
          style: {
            color: appData.theme.fontColor2,
            fontFamily: appData.theme.fontFamily2
          }
        }">
        <h2 v-html="t('image.section2.titre.value', `Usage`)" />
      </KaText>
      <KaText code="text-1">
        <span v-html="t('image.section2.text1.value', `<p style='margin-left:0px;'>v-img component is used to display a responsive image with lazy-load and placeholder.</p>`)" />
      </KaText>
      <!-- Code viewer -->
      <KaContainer code="code-viewer">
        <!-- Options -->
        <KaContainer code="options">
          <KaText code="text-2">
            <span v-html="t('image.section2.codeViewer.options.text2.value', `Options`)" />
          </KaText>
        </KaContainer>
        <!-- Paramétrage -->
        <KaContainer code="parametrage">
          <!-- Conteneur image -->
          <KaContainer code="conteneur-image">
            <KaImage
              code="element-image"
              :options="{
                animationIn: `fadeIn`,
                lazyOptions: {
                  throttle: 200,
                  once: true,
                  intersection: { threshold: 0.1 }
                },
                imgFit: $first([
                  page.ajustement.value === `None` ? null : undefined,
                  page.ajustement.value === `Contain` ? `contain` : undefined,
                  page.ajustement.value === `Cover` ? `cover` : undefined,
                  page.ajustement.value === `Fill` ? `fill` : undefined,
                  `scale-down`
                ]),
                alt: `Element image`
              }"
              value="https://ucarecdn.com/75bcd767-89ba-45c6-becd-1756cdcaa636/" />
          </KaContainer>
          <!-- Options -->
          <KaContainer code="container-1">
            <KaSelectInput
              v-model="page.ajustement.value"
              code="ajustement"
              :options="{
                labelPosition: `left-center`,
                debounce: 10,
                items: page.$constants.ajustementItems,
                placeholder: t('image.section2.codeViewer.parametrage.container1.ajustement.placeholder', `Ajustement`)
              }">
              <template #label>
                {{ t('image.section2.codeViewer.parametrage.container1.ajustement.label', `Ajustement`) }}
              </template>
            </KaSelectInput>
            <KaSliderInput
              v-model="page.hauteurMax.value"
              code="hauteur-max"
              :options="{
                labelPosition: `left-center`,
                style: { color: appData.theme.primaryColor },
                placeholder: t('image.section2.codeViewer.parametrage.container1.hauteurMax.placeholder', `Hauteur max`),
                max: 300,
                showNumberInput: false
              }">
              <template #label>
                {{ t('image.section2.codeViewer.parametrage.container1.hauteurMax.label', `Hauteur max`) }}
              </template>
            </KaSliderInput>
            <KaSliderInput
              v-model="page.largeurMax.value"
              code="largeur-max"
              :options="{
                labelPosition: `left-center`,
                style: { color: appData.theme.primaryColor },
                placeholder: t('image.section2.codeViewer.parametrage.container1.largeurMax.placeholder', `Largeur max`),
                max: 500,
                showNumberInput: false
              }">
              <template #label>
                {{ t('image.section2.codeViewer.parametrage.container1.largeurMax.label', `Largeur max`) }}
              </template>
            </KaSliderInput>
          </KaContainer>
        </KaContainer>
        <KaCodePreview
          code="code-preview"
          :options="{ elementToPreview: `uv2pmZv5vZBRK1MECRUPiW` }"
          value="https://www.kapix.fr" />
      </KaContainer>
    </KaContainer>
    <!-- Section 3 -->
    <KaContainer
      code="section-3"
      inner>
      <KaText
        code="h-2-1"
        :options="{
          style: {
            color: appData.theme.fontColor2,
            fontFamily: appData.theme.fontFamily2
          }
        }">
        <h2 v-html="t('image.section3.h21.value', `API`)" />
      </KaText>
      <KaText code="text-3">
        <span v-html="t('image.section3.text3.value', `<p style='margin-left:0px;'>xx</p>`)" />
      </KaText>
    </KaContainer>
    <!-- Section 4 -->
    <KaContainer
      code="section-4"
      inner>
      <KaText
        code="h-2-2"
        :options="{
          style: {
            color: appData.theme.fontColor2,
            fontFamily: appData.theme.fontFamily2
          }
        }">
        <h2 v-html="t('image.section4.h22.value', `Caveats`)" />
      </KaText>
      <KaText code="text-4">
        <span v-html="t('image.section4.text4.value', `<p style='margin-left:0px;'>xx</p>`)" />
      </KaText>
    </KaContainer>
    <!-- Section 5 -->
    <KaContainer
      code="section-5"
      inner>
      <KaText
        code="h-2-3"
        :options="{
          style: {
            color: appData.theme.fontColor2,
            fontFamily: appData.theme.fontFamily2
          }
        }">
        <h2 v-html="t('image.section5.h23.value', `Examples`)" />
      </KaText>
      <KaText code="text-5">
        <span v-html="t('image.section5.text5.value', `<p style='margin-left:0px;'>xx</p>`)" />
      </KaText>
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
import { headerWithLeftSidebarImage } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarImage'
})
provide('$scoped', '-p11')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = headerWithLeftSidebarImage()
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
