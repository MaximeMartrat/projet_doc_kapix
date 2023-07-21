<template>
  <KaContainer
    code="toggle-buttons"
    :data="page.$info.toggleButtons">
    <!-- Main -->
    <KaContainer code="main">
      <!-- Sous Main -->
      <KaContainer code="sous-main">
        <KaText code="titre">
          <h1 v-html="t('toggleButtons.main.sousMain.titre.value', `ToggleButtons`)" />
        </KaText>
        <!-- Utilisation -->
        <KaContainer code="utilisation">
          <KaText code="titre-categorie">
            <h2 v-html="t('toggleButtons.main.sousMain.utilisation.titreCategorie.value', `Usage`)" />
          </KaText>
          <KaText code="toggle-buttons-allow">
            <span v-html="t('toggleButtons.main.sousMain.utilisation.toggleButtonsAllow.value', `Toggle buttons allow you to create a styled group of buttons that can be selected or toggled under a single v-model`)" />
          </KaText>
          <!-- Container -->
          <KaContainer code="container">
            <!-- Container -->
            <KaContainer code="container-1">
              <KaText code="exclusive">
                <span v-html="t('toggleButtons.main.sousMain.utilisation.container.container1.exclusive.value', `Exclusive`)" />
              </KaText>
              <KaToggleButtonInput
                v-model="page.choixAvecBoutons.value"
                code="choix-avec-boutons"
                :options="{
                  debounce: 500,
                  items: page.$constants.choixAvecBoutonsItems,
                  placeholder: t('toggleButtons.main.sousMain.utilisation.container.container1.choixAvecBoutons.placeholder', `Choix avec boutons`)
                }" />
            </KaContainer>
            <!-- Container -->
            <KaContainer code="container-2">
              <KaText code="multiple">
                <span v-html="t('toggleButtons.main.sousMain.utilisation.container.container2.multiple.value', `Multiple`)" />
              </KaText>
              <KaToggleButtonInput
                v-model="page.toggleButton1.value"
                code="toggle-button-1"
                :options="{
                  debounce: 500,
                  items: page.$constants.toggleButton1Items,
                  placeholder: t('toggleButtons.main.sousMain.utilisation.container.container2.toggleButton1.placeholder', `Choix avec boutons`)
                }" />
            </KaContainer>
            <!-- Container -->
            <KaContainer code="container-3">
              <KaText code="no-options-selected">
                <span v-html="t('toggleButtons.main.sousMain.utilisation.container.container3.noOptionsSelected.value', `No Options Selected`)" />
              </KaText>
              <KaToggleButtonInput
                v-model="page.toggleButton2.value"
                code="toggle-button-2"
                :options="{
                  debounce: 500,
                  items: page.$constants.toggleButton2Items,
                  placeholder: t('toggleButtons.main.sousMain.utilisation.container.container3.toggleButton2.placeholder', `Choix avec boutons`)
                }" />
            </KaContainer>
            <!-- Container -->
            <KaContainer code="container-4">
              <KaText code="mandatory">
                <span v-html="t('toggleButtons.main.sousMain.utilisation.container.container4.mandatory.value', `Mandatory`)" />
              </KaText>
              <KaToggleButtonInput
                v-model="page.toggleButton3.value"
                code="toggle-button-3"
                :options="{
                  debounce: 500,
                  items: page.$constants.toggleButton3Items,
                  placeholder: t('toggleButtons.main.sousMain.utilisation.container.container4.toggleButton3.placeholder', `Choix avec boutons`)
                }" />
            </KaContainer>
            <!-- Container -->
            <KaContainer code="container-5">
              <KaText code="text-options">
                <span v-html="t('toggleButtons.main.sousMain.utilisation.container.container5.textOptions.value', `Text Options`)" />
              </KaText>
              <KaToggleButtonInput
                v-model="page.toggleButton4.value"
                code="toggle-button-4"
                :options="{
                  debounce: 500,
                  items: page.$constants.toggleButton4Items,
                  placeholder: t('toggleButtons.main.sousMain.utilisation.container.container5.toggleButton4.placeholder', `Choix avec boutons`)
                }" />
            </KaContainer>
            <!-- Container -->
            <KaContainer code="container-6">
              <KaText code="text-amp-icon-options">
                <span v-html="t('toggleButtons.main.sousMain.utilisation.container.container6.textAmpIconOptions.value', `Text & Icon Options`)" />
              </KaText>
              <KaToggleButtonInput
                v-model="page.toggleButton5.value"
                code="toggle-button-5"
                :options="{
                  debounce: 500,
                  items: page.$constants.toggleButton5Items,
                  placeholder: t('toggleButtons.main.sousMain.utilisation.container.container6.toggleButton5.placeholder', `Choix avec boutons`)
                }" />
            </KaContainer>
          </KaContainer>
        </KaContainer>
        <!-- API -->
        <KaContainer code="api">
          <KaText code="text-1">
            <h2 v-html="t('toggleButtons.main.sousMain.api.text1.value', `API (il manque des informations)`)" />
          </KaText>
        </KaContainer>
        <!-- Example -->
        <KaContainer code="example">
          <KaText code="examples">
            <h2 v-html="t('toggleButtons.main.sousMain.example.examples.value', `Examples`)" />
          </KaText>
          <!-- Props -->
          <KaContainer code="props">
            <KaText code="text-2">
              <h3 v-html="t('toggleButtons.main.sousMain.example.props.text2.value', `Props`)" />
            </KaText>
            <!-- Mandatory -->
            <KaContainer code="container-7">
              <KaText code="text-3">
                <h4 v-html="t('toggleButtons.main.sousMain.example.props.container7.text3.value', `Mandatory`)" />
              </KaText>
              <KaText code="a-toggle-buttons-with">
                <span v-html="t('toggleButtons.main.sousMain.example.props.container7.aToggleButtonsWith.value', `A toggleButtons with the mandatory prop will always have a value.`)" />
              </KaText>
              <KaToggleButtonInput
                v-model="page.toggleButton6.value"
                code="toggle-button-6"
                :options="{
                  debounce: 500,
                  items: page.$constants.toggleButton6Items,
                  placeholder: t('toggleButtons.main.sousMain.example.props.container7.toggleButton6.placeholder', `Mandatory`)
                }" />
            </KaContainer>
            <KaCodePreview
              code="code-preview"
              :options="{ elementToPreview: `q497nBqt2UQXG2BoPKsXXh` }"
              value="https://www.kapix.fr" />
            <!-- Multiple -->
            <KaContainer code="container-8">
              <KaText code="text-4">
                <h4 v-html="t('toggleButtons.main.sousMain.example.props.container8.text4.value', `Multiple`)" />
              </KaText>
              <KaText code="text-5">
                <span v-html="t('toggleButtons.main.sousMain.example.props.container8.text5.value', `A toggleButtons with the multiple prop will allow a user to select multiple return values as an array.`)" />
              </KaText>
              <KaToggleButtonInput
                v-model="page.toggleButton7.value"
                code="toggle-button-7"
                :options="{
                  debounce: 500,
                  items: page.$constants.toggleButton7Items,
                  placeholder: t('toggleButtons.main.sousMain.example.props.container8.toggleButton7.placeholder', `Multiple`)
                }" />
            </KaContainer>
            <KaCodePreview
              code="code-preview-1"
              :options="{ elementToPreview: `uNsPbdhPduJVjTusNGKUPi` }"
              value="https://www.kapix.fr" />
            <!-- Rounded -->
            <KaContainer code="rounded">
              <KaText code="text-6">
                <h4 v-html="t('toggleButtons.main.sousMain.example.props.rounded.text6.value', `Rounded`)" />
              </KaText>
              <KaText code="you-can-make-toggle-buttons">
                <span v-html="t('toggleButtons.main.sousMain.example.props.rounded.youCanMakeToggleButtons.value', `You can make toggleButtons rounded using the rounded prop.`)" />
              </KaText>
              <!-- Container -->
              <KaContainer code="container-9">
                <KaToggleButtonInput
                  v-model="page.toggleButton8.value"
                  code="toggle-button-8"
                  :options="{
                    debounce: 500,
                    items: page.$constants.toggleButton8Items,
                    placeholder: t('toggleButtons.main.sousMain.example.props.rounded.container9.toggleButton8.placeholder', `Rounded`)
                  }" />
              </KaContainer>
              <KaCodePreview
                code="code-preview-1"
                :options="{ elementToPreview: `qG6cwPqeSziENNyTEarAFe` }"
                value="https://www.kapix.fr" />
            </KaContainer>
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
            <span v-html="t('toggleButtons.rightPanel.sousNav.container10.contents.value', `Contents`)" />
          </KaText>
        </KaContainer>
        <!-- Container 1 -->
        <KaContainer code="container-11">
          <KaText
            code="text-7"
            :options="{
              href: { hash: `#utilisation-p7` },
              ariaLabel: `titre`,
              click: page.text7Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('toggleButtons.rightPanel.sousNav.container11.text7.value', `Usage`)" />
          </KaText>
          <KaText
            code="text-8"
            :options="{
              href: { hash: `#api-p7` },
              ariaLabel: `titre`,
              click: page.text8Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('toggleButtons.rightPanel.sousNav.container11.text8.value', `API`)" />
          </KaText>
          <KaText
            code="text-9"
            :options="{
              href: { hash: `#example-p7` },
              ariaLabel: `titre`,
              click: page.text9Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('toggleButtons.rightPanel.sousNav.container11.text9.value', `Examples`)" />
          </KaText>
          <!-- sous-categorie -->
          <KaContainer code="sous-categorie">
            <KaText
              code="sous-titre"
              :options="{
                href: { hash: `#props-p7` },
                ariaLabel: `sous titre`,
                click: page.sousTitreClick
              }"
              :selected="{ style: { borderColor: appData.theme.primaryColor } }">
              <span v-html="t('toggleButtons.rightPanel.sousNav.container11.sousCategorie.sousTitre.value', `Props`)" />
            </KaText>
            <!-- sous-sous-categorie -->
            <KaContainer code="sous-sous-categorie">
              <KaText
                code="text-10"
                :options="{
                  href: { hash: `#container-7-p7` },
                  ariaLabel: `sous titre`,
                  click: page.text10Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('toggleButtons.rightPanel.sousNav.container11.sousCategorie.sousSousCategorie.text10.value', `Mandatory`)" />
              </KaText>
              <KaText
                code="text-11"
                :options="{
                  href: { hash: `#container-8-p7` },
                  ariaLabel: `sous titre`,
                  click: page.text11Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('toggleButtons.rightPanel.sousNav.container11.sousCategorie.sousSousCategorie.text11.value', `Multiple`)" />
              </KaText>
              <KaText
                code="text-12"
                :options="{
                  href: { hash: `#rounded-p7` },
                  ariaLabel: `sous titre`,
                  click: page.text12Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('toggleButtons.rightPanel.sousNav.container11.sousCategorie.sousSousCategorie.text12.value', `Rounded`)" />
              </KaText>
            </KaContainer>
          </KaContainer>
        </KaContainer>
      </KaContainer>
    </KaContainer>
    <KapixTeleport :disabled="!$breakpoint.mdAndUp">
      <KaIcon
        code="icon"
        :options="{
          animationIn: `fadeInUp`,
          animationOut: `fadeOutDown`,
          click: page.iconClick,
          hidden: page.$info.toggleButtons.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarToggleButtons } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarToggleButtons'
})
provide('$scoped', '-p7')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = headerWithLeftSidebarToggleButtons()
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
