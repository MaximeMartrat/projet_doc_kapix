<template>
  <KaContainer
    code="map"
    :data="page.$info.map">
    <!-- Main -->
    <KaContainer code="main">
      <!-- Sous Main -->
      <KaContainer code="sous-main">
        <KaText code="titre">
          <h1 v-html="t('map.main.sousMain.titre.value', `Map`)" />
        </KaText>
        <!-- Utilisation -->
        <KaContainer code="utilisation">
          <KaText code="titre-categorie">
            <h2 v-html="t('map.main.sousMain.utilisation.titreCategorie.value', `Usage`)" />
          </KaText>
          <KaText code="google-map">
            <span v-html="t('map.main.sousMain.utilisation.googleMap.value', `Google map`)" />
          </KaText>
          <!-- Container -->
          <KaContainer code="container">
            <KaLeaflet
              v-model="page.leaflet1.value"
              code="leaflet-1"
              :options="{
                lazyOptions: {
                  throttle: 200,
                  once: true,
                  intersection: { threshold: 0.1 }
                },
                mapZoom: page.zoom118.value,
                minZoom: page.minZoom.value,
                maxZoom: page.maxZoom.value,
                placeholder: t('map.main.sousMain.utilisation.container.leaflet1.placeholder', `Map`)
              }"
              :data="page.$info.leaflet1">
              <template #item="listItemProps">
              </template>
            </KaLeaflet>
            <!-- Container -->
            <KaContainer code="container-1">
              <!-- Container -->
              <KaContainer code="container-2">
                <KaIcon
                  code="minus"
                  :options="{ click: page.minusClick }"
                  value="i-fa-solid:minus"
                  inner />
                <KaNumberInput
                  v-model="page.zoom118.value"
                  code="zoom-118"
                  :options="{
                    labelPosition: `top`,
                    debounce: 0,
                    placeholder: t('map.main.sousMain.utilisation.container.container1.container2.zoom118.placeholder', `Zoom (1 - 18)`)
                  }">
                  <template #label>
                    {{ t('map.main.sousMain.utilisation.container.container1.container2.zoom118.label', `Zoom (1 - 18)`) }}
                  </template>
                </KaNumberInput>
                <KaIcon
                  code="plus"
                  :options="{ click: page.plusClick }"
                  value="i-fa-solid:plus"
                  inner />
              </KaContainer>
              <!-- Container -->
              <KaContainer code="container-3">
                <KaIcon
                  code="icon-1"
                  :options="{ click: page.icon1Click }"
                  value="i-fa-solid:minus"
                  inner />
                <KaNumberInput
                  v-model="page.minZoom.value"
                  code="min-zoom"
                  :options="{
                    labelPosition: `top`,
                    debounce: 0,
                    placeholder: t('map.main.sousMain.utilisation.container.container1.container3.minZoom.placeholder', `Min Zoom`)
                  }">
                  <template #label>
                    {{ t('map.main.sousMain.utilisation.container.container1.container3.minZoom.label', `Min Zoom`) }}
                  </template>
                </KaNumberInput>
                <KaIcon
                  code="icon-2"
                  :options="{ click: page.icon2Click }"
                  value="i-fa-solid:plus"
                  inner />
              </KaContainer>
              <!-- Container -->
              <KaContainer code="container-4">
                <KaIcon
                  code="icon-3"
                  :options="{ click: page.icon3Click }"
                  value="i-fa-solid:minus"
                  inner />
                <KaNumberInput
                  v-model="page.maxZoom.value"
                  code="max-zoom"
                  :options="{
                    labelPosition: `top`,
                    debounce: 0,
                    placeholder: t('map.main.sousMain.utilisation.container.container1.container4.maxZoom.placeholder', `Max Zoom`)
                  }">
                  <template #label>
                    {{ t('map.main.sousMain.utilisation.container.container1.container4.maxZoom.label', `Max Zoom`) }}
                  </template>
                </KaNumberInput>
                <KaIcon
                  code="icon-4"
                  :options="{ click: page.icon4Click }"
                  value="i-fa-solid:plus"
                  inner />
              </KaContainer>
            </KaContainer>
          </KaContainer>
          <KaText code="street-map">
            <span v-html="t('map.main.sousMain.utilisation.streetMap.value', `Street map`)" />
          </KaText>
          <!-- Container -->
          <KaContainer code="container-5">
            <KaLeaflet
              v-model="page.leaflet2.value"
              code="leaflet-2"
              :options="{
                lazyOptions: {
                  throttle: 200,
                  once: true,
                  intersection: { threshold: 0.1 }
                },
                tileLayer: `openstreetmap`,
                mapZoom: page.number1.value,
                minZoom: page.number2.value,
                maxZoom: page.number3.value,
                placeholder: t('map.main.sousMain.utilisation.container5.leaflet2.placeholder', `Map`)
              }"
              :data="page.$info.leaflet2">
              <template #item="listItemProps">
              </template>
            </KaLeaflet>
            <!-- Container -->
            <KaContainer code="container-6">
              <!-- Container -->
              <KaContainer code="container-7">
                <KaIcon
                  code="icon-5"
                  :options="{ click: page.icon5Click }"
                  value="i-fa-solid:minus"
                  inner />
                <KaNumberInput
                  v-model="page.number1.value"
                  code="number-1"
                  :options="{
                    labelPosition: `top`,
                    debounce: 0,
                    placeholder: t('map.main.sousMain.utilisation.container5.container6.container7.number1.placeholder', `Zoom (1 - 18)`)
                  }">
                  <template #label>
                    {{ t('map.main.sousMain.utilisation.container5.container6.container7.number1.label', `Zoom (1 - 18)`) }}
                  </template>
                </KaNumberInput>
                <KaIcon
                  code="icon-6"
                  :options="{ click: page.icon6Click }"
                  value="i-fa-solid:plus"
                  inner />
              </KaContainer>
              <!-- Container -->
              <KaContainer code="container-8">
                <KaIcon
                  code="icon-7"
                  :options="{ click: page.icon7Click }"
                  value="i-fa-solid:minus"
                  inner />
                <KaNumberInput
                  v-model="page.number2.value"
                  code="number-2"
                  :options="{
                    labelPosition: `top`,
                    debounce: 0,
                    placeholder: t('map.main.sousMain.utilisation.container5.container6.container8.number2.placeholder', `Min Zoom`)
                  }">
                  <template #label>
                    {{ t('map.main.sousMain.utilisation.container5.container6.container8.number2.label', `Min Zoom`) }}
                  </template>
                </KaNumberInput>
                <KaIcon
                  code="icon-8"
                  :options="{ click: page.icon8Click }"
                  value="i-fa-solid:plus"
                  inner />
              </KaContainer>
              <!-- Container -->
              <KaContainer code="container-9">
                <KaIcon
                  code="icon-9"
                  :options="{ click: page.icon9Click }"
                  value="i-fa-solid:minus"
                  inner />
                <KaNumberInput
                  v-model="page.number3.value"
                  code="number-3"
                  :options="{
                    labelPosition: `top`,
                    debounce: 0,
                    placeholder: t('map.main.sousMain.utilisation.container5.container6.container9.number3.placeholder', `Max Zoom`)
                  }">
                  <template #label>
                    {{ t('map.main.sousMain.utilisation.container5.container6.container9.number3.label', `Max Zoom`) }}
                  </template>
                </KaNumberInput>
                <KaIcon
                  code="icon-10"
                  :options="{ click: page.icon10Click }"
                  value="i-fa-solid:plus"
                  inner />
              </KaContainer>
            </KaContainer>
          </KaContainer>
        </KaContainer>
        <!-- API -->
        <KaContainer code="api">
          <KaText code="text-1">
            <h2 v-html="t('map.main.sousMain.api.text1.value', `API (il manque des informations)`)" />
          </KaText>
        </KaContainer>
        <!-- Example -->
        <KaContainer code="example">
          <KaText code="examples">
            <h2 v-html="t('map.main.sousMain.example.examples.value', `Examples`)" />
          </KaText>
          <!-- Props -->
          <KaContainer code="props">
            <KaText code="text-2">
              <h3 v-html="t('map.main.sousMain.example.props.text2.value', `Props`)" />
            </KaText>
            <!-- Mandatory -->
            <KaContainer code="mandatory">
              <KaText code="tile-layer">
                <h4 v-html="t('map.main.sousMain.example.props.mandatory.tileLayer.value', `Tile Layer`)" />
              </KaText>
              <KaText code="text-3">
                <span v-html="t('map.main.sousMain.example.props.mandatory.text3.value', `Streetmap`)" />
              </KaText>
              <KaLeaflet
                v-model="page.leaflet3.value"
                code="leaflet-3"
                :options="{
                  lazyOptions: {
                    throttle: 200,
                    once: true,
                    intersection: { threshold: 0.1 }
                  },
                  tileLayer: `openstreetmap`,
                  placeholder: t('map.main.sousMain.example.props.mandatory.leaflet3.placeholder', `StreetMap`)
                }"
                :data="page.$info.leaflet3">
                <template #item="listItemProps">
                </template>
              </KaLeaflet>
            </KaContainer>
            <KaCodePreview
              code="code-preview"
              :options="{ elementToPreview: `jpihwgTJ5dDy8tTzfANiDX` }"
              value="https://www.kapix.fr" />
          </KaContainer>
        </KaContainer>
      </KaContainer>
    </KaContainer>
    <!-- Right Panel -->
    <KaContainer code="right-panel">
      <!-- Sous Nav -->
      <KaContainer code="sous-nav">
        <!-- Container -->
        <KaContainer code="container-10">
          <KaText code="contents">
            <span v-html="t('map.rightPanel.sousNav.container10.contents.value', `Contents`)" />
          </KaText>
        </KaContainer>
        <!-- Container 1 -->
        <KaContainer code="container-11">
          <KaText
            code="text-4"
            :options="{
              href: { hash: `#utilisation-p12` },
              ariaLabel: `titre`,
              click: page.text4Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('map.rightPanel.sousNav.container11.text4.value', `Usage`)" />
          </KaText>
          <KaText
            code="text-5"
            :options="{
              href: { hash: `#api-p12` },
              ariaLabel: `titre`,
              click: page.text5Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('map.rightPanel.sousNav.container11.text5.value', `API`)" />
          </KaText>
          <KaText
            code="text-6"
            :options="{
              href: { hash: `#example-p12` },
              ariaLabel: `titre`,
              click: page.text6Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('map.rightPanel.sousNav.container11.text6.value', `Examples`)" />
          </KaText>
          <!-- sous-categorie -->
          <KaContainer code="sous-categorie">
            <KaText
              code="sous-titre"
              :options="{
                href: { hash: `#props-p12` },
                ariaLabel: `sous titre`,
                click: page.sousTitreClick
              }"
              :selected="{ style: { borderColor: appData.theme.primaryColor } }">
              <span v-html="t('map.rightPanel.sousNav.container11.sousCategorie.sousTitre.value', `Props`)" />
            </KaText>
            <!-- sous-sous-categorie -->
            <KaContainer code="sous-sous-categorie">
              <KaText
                code="text-7"
                :options="{
                  href: { hash: `#mandatory-p12` },
                  ariaLabel: `sous titre`,
                  click: page.text7Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('map.rightPanel.sousNav.container11.sousCategorie.sousSousCategorie.text7.value', `Tile Layer`)" />
              </KaText>
              <KaText
                code="text-8"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.text8Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('map.rightPanel.sousNav.container11.sousCategorie.sousSousCategorie.text8.value', `Multiple`)" />
              </KaText>
              <KaText
                code="text-9"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.text9Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('map.rightPanel.sousNav.container11.sousCategorie.sousSousCategorie.text9.value', `Rounded`)" />
              </KaText>
            </KaContainer>
          </KaContainer>
        </KaContainer>
      </KaContainer>
    </KaContainer>
    <KapixTeleport :disabled="!$breakpoint.mdAndUp">
      <KaIcon
        code="icon-11"
        :options="{
          animationIn: `fadeInUp`,
          animationOut: `fadeOutDown`,
          click: page.icon11Click,
          hidden: page.$info.map.scrollTop > 0 ? false : null
        }"
        value="i-fa-solid:angle-double-up" />
    </KapixTeleport>
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
import { headerWithLeftSidebarMap } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarMap'
})
provide('$scoped', '-p12')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = headerWithLeftSidebarMap()
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
