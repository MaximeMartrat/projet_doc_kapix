<template>
  <KaContainer
    code="qr-code"
    :data="page.$info.qrCode">
    <!-- Main -->
    <KaContainer code="main">
      <!-- Title -->
      <KaContainer code="title">
        <KaText code="text-1">
          <h1 v-html="t('qrCode.main.title.text1.value', `QR Code`)" />
        </KaText>
      </KaContainer>
      <!-- Basic -->
      <KaContainer code="basic">
        <KaText code="simple-usage">
          <h2 v-html="t('qrCode.main.basic.simpleUsage.value', `<strong>Simple usage</strong>`)" />
        </KaText>
        <KaText code="just-set-a-value-for">
          <span v-html="t('qrCode.main.basic.justSetAValueFor.value', `Just set a value for the required text prop.`)" />
        </KaText>
        <KaQrCode
          code="qr-code-1"
          value="<p>https://www.kapix.fr</p>" />
        <KaCodePreview
          code="code-preview"
          :options="{ elementToPreview: `gqokB5ozuqb8e1hNnGd6m2` }"
          value="https://www.kapix.fr" />
        <KaText code="api-il-manque-des">
          <h2 v-html="t('qrCode.main.basic.apiIlManqueDes.value', `API (il manque des informations)`)" />
        </KaText>
      </KaContainer>
      <!-- Auto Grow -->
      <KaContainer code="auto-grow">
        <KaText code="exemple">
          <h2 v-html="t('qrCode.main.autoGrow.exemple.value', `Exemple`)" />
        </KaText>
        <KaText code="usage">
          <h3 v-html="t('qrCode.main.autoGrow.usage.value', `Usage`)" />
        </KaText>
        <KaText code="dynamic-value">
          <h4 v-html="t('qrCode.main.autoGrow.dynamicValue.value', `<strong>Dynamic value</strong>`)" />
        </KaText>
        <KaText code="you-can-use-v-bind">
          <span v-html="t('qrCode.main.autoGrow.youCanUseVBind.value', `You can use <i>v-bind:</i> or the <i>:</i> shorthand to use a variable as text prop.<br>Since the text prop has a watcher, when the value of the variable changes the component will generate a QR code for the new value.`)" />
        </KaText>
        <KaStringInput
          v-model="page.texteQrCode.value"
          code="texte-qr-code"
          :options="{
            placeholder: `Texte QR code ...`,
            debounce: 0
          }" />
        <KaQrCode
          code="qr-code-2"
          :value="page.texteQrCode.value" />
        <KaCodePreview
          code="code-preview-1"
          :options="{ elementToPreview: `pWBvxwBi7goMsYMd4T7wcb` }"
          value="https://www.kapix.fr" />
      </KaContainer>
      <!-- Colors -->
      <KaContainer code="colors">
        <KaText code="colors-and-sizing">
          <h4 v-html="t('qrCode.main.colors.colorsAndSizing.value', `<strong>Colors and sizing</strong>`)" />
        </KaText>
        <KaText code="you-can-fix-the-qr">
          <span v-html="t('qrCode.main.colors.youCanFixTheQr.value', `You can fix the QR code width and height with the size prop (default 256, works in pixels).<br>Colors can be changed using color (default #000) and bg-color (default #FFF) props.<br><strong>NOTE:</strong> If you use a darker color in bg-color than in color some QR code readers could have problems to understand your QR code.`)" />
        </KaText>
        <!-- Container -->
        <KaContainer code="container">
          <KaQrCode
            code="qr-code-3"
            :options="{
              qrColor: `#01FFFFFF`,
              qrBgColor: `#FF0202FF`
            }"
            value="https://www.kapix.fr" />
          <KaQrCode
            code="qr-code-4"
            :options="{ qrColor: `#FF0101FF` }"
            value="https://www.kapix.fr" />
        </KaContainer>
        <KaCodePreview
          code="code-preview-2"
          :options="{ elementToPreview: `mTrRaN3r7QCXJnSEf8k62Q` }"
          value="https://www.kapix.fr" />
      </KaContainer>
      <!-- Autocomplete -->
      <KaContainer code="autocomplete">
        <KaText code="error-correction-level">
          <h4 v-html="t('qrCode.main.autocomplete.errorCorrectionLevel.value', `<strong>Error Correction Level</strong>`)" />
        </KaText>
        <KaText code="text-2">
          <span v-html="t('qrCode.main.autocomplete.text2.value', `You can use <i>v-bind:</i> or the <i>:</i> shorthand to use a variable as text prop.<br>Since the text prop has a watcher, when the value of the variable changes, the component will generate a QR code for the new value.`)" />
        </KaText>
        <!-- Container -->
        <KaContainer code="container-1">
          <KaQrCode
            code="qr-code-5"
            :options="{ errorLevel: `L` }"
            value="https://www.kapix.fr" />
          <KaQrCode
            code="qr-code-6"
            :options="{ errorLevel: `M` }"
            value="https://www.kapix.fr" />
          <KaQrCode
            code="qr-code-7"
            :options="{ errorLevel: `Q` }"
            value="https://www.kapix.fr" />
          <KaQrCode
            code="qr-code-8"
            value="https://www.kapix.fr" />
        </KaContainer>
        <KaCodePreview
          code="code-preview-3"
          :options="{ elementToPreview: `8rDKDYpGrKNCjHhkUVW9V6` }"
          value="https://www.kapix.fr" />
      </KaContainer>
    </KaContainer>
    <!-- Right Panel -->
    <KaContainer code="right-panel">
      <!-- Sous Nav -->
      <KaContainer code="sous-nav">
        <!-- Container -->
        <KaContainer code="container-2">
          <KaText code="contenu">
            <span v-html="t('qrCode.rightPanel.sousNav.container2.contenu.value', `Contenu`)" />
          </KaText>
        </KaContainer>
        <!-- Container 1 -->
        <KaContainer code="container-3">
          <KaText
            code="titre"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titreClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('qrCode.rightPanel.sousNav.container3.titre.value', `Utilisation`)" />
          </KaText>
          <KaText
            code="text-3"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.text3Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('qrCode.rightPanel.sousNav.container3.text3.value', `API`)" />
          </KaText>
          <KaText
            code="text-4"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.text4Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('qrCode.rightPanel.sousNav.container3.text4.value', `Exemples`)" />
          </KaText>
          <!-- sous-categorie -->
          <KaContainer code="sous-categorie">
            <KaText
              code="sous-titre"
              :options="{
                href: undefined,
                ariaLabel: `sous titre`,
                click: page.sousTitreClick
              }"
              :selected="{ style: { borderColor: appData.theme.primaryColor } }">
              <span v-html="t('qrCode.rightPanel.sousNav.container3.sousCategorie.sousTitre.value', `Propriétés`)" />
            </KaText>
            <!-- sous-sous-categorie -->
            <KaContainer code="sous-sous-categorie">
              <KaText
                code="text-5"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.text5Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('qrCode.rightPanel.sousNav.container3.sousCategorie.sousSousCategorie.text5.value', `Couleurs`)" />
              </KaText>
              <KaText
                code="text-6"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.text6Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('qrCode.rightPanel.sousNav.container3.sousCategorie.sousSousCategorie.text6.value', `Valeurs`)" />
              </KaText>
              <KaText
                code="text-7"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.text7Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('qrCode.rightPanel.sousNav.container3.sousCategorie.sousSousCategorie.text7.value', `Etats`)" />
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
          hidden: page.$info.qrCode.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarQrCode } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarQrCode'
})
provide('$scoped', '-p15')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = headerWithLeftSidebarQrCode()
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
