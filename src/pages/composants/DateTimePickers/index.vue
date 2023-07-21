<template>
  <KaContainer
    code="date-time-pickers"
    :data="page.$info.dateTimePickers">
    <!-- Main -->
    <KaContainer code="main">
      <!-- Sous Main -->
      <KaContainer code="sous-main">
        <KaText code="titre">
          <h1 v-html="t('dateTimePickers.main.sousMain.titre.value', `Date Time pickers`)" />
        </KaText>
        <KaText code="ka-date-picker-is-a">
          <span v-html="t('dateTimePickers.main.sousMain.kaDatePickerIsA.value', `ka-date-picker is a fully featured date selection component that lets users select a date, or range of dates.`)" />
        </KaText>
        <!-- Utilisation -->
        <KaContainer code="utilisation">
          <KaText code="usage-date-pickers">
            <span v-html="t('dateTimePickers.main.sousMain.utilisation.usageDatePickers.value', `<p style='margin-left:0px;'><span style='font-size:30px;'>Usage</span></p><p style='margin-left:0px;'> </p><p style='margin-left:0px;'>Date pickers come in two orientation variations, portrait (default) and landscape. By default they are emitting input event when the day (for date picker) or month (for month picker), but with reactive prop they can update the model even after clicking year/month.</p>`)" />
          </KaText>
        </KaContainer>
        <!-- API -->
        <KaContainer code="api">
          <KaText code="text-1">
            <h2 v-html="t('dateTimePickers.main.sousMain.api.text1.value', `<span style='background-color:rgb(255,255,255);color:rgba(0,0,0,0.87);'>Examples</span>`)" />
          </KaText>
        </KaContainer>
        <!-- Exemple -->
        <KaContainer code="exemple">
          <!-- Proprietes -->
          <KaContainer code="proprietes">
            <!-- Couleurs -->
            <KaContainer code="couleurs">
              <KaText code="colors-date">
                <span v-html="t('dateTimePickers.main.sousMain.exemple.proprietes.couleurs.colorsDate.value', `<p style='margin-left:0px;'><span style='font-size:19px;'><strong>Colors</strong></span></p><p style='margin-left:0px;'> </p><p style='margin-left:0px;'>Date picker colors can be set using the <strong>color</strong> and <strong>header-color</strong> props. If <strong>header-color</strong> prop is not provided header will use the <strong>color</strong> prop value.</p>`)" />
              </KaText>
              <!-- Sample Colors -->
              <KaContainer code="sample-colors">
                <KaDateTimePickerInput
                  v-model="page.saisieDeDateHeure.value"
                  code="saisie-de-date-heure"
                  :options="{ placeholder: t('dateTimePickers.main.sousMain.exemple.proprietes.couleurs.sampleColors.saisieDeDateHeure.placeholder', `Saisie de date / heure`) }" />
                <KaDateTimePickerInput
                  v-model="page.dateTimePicker1.value"
                  code="date-time-picker-1"
                  :options="{ placeholder: t('dateTimePickers.main.sousMain.exemple.proprietes.couleurs.sampleColors.dateTimePicker1.placeholder', `Saisie de date / heure`) }" />
              </KaContainer>
            </KaContainer>
            <KaCodePreview
              code="code-preview"
              :options="{ elementToPreview: `tD4X18VBzrKHEPG5ix48yM` }"
              value="https://www.kapix.fr" />
            <!-- Formatting -->
            <KaContainer code="formatting">
              <KaText code="formatting-with-external">
                <span v-html="t('dateTimePickers.main.sousMain.exemple.proprietes.formatting.formattingWithExternal.value', `<p style='margin-left:0px;'><span style='font-size:21px;'><strong>Formatting with external libraries</strong></span></p><p style='margin-left:0px;'>Formatting dates is possible also with external libs such as Moment.js or date-fns</p>`)" />
              </KaText>
              <!-- Formatting -->
              <KaContainer code="container-1">
                <KaDatePickerInput
                  v-model="page.saisieDeDate.value"
                  code="saisie-de-date"
                  :options="{
                    dateFormat: `absoluteDatetime`,
                    placeholder: t('dateTimePickers.main.sousMain.exemple.proprietes.formatting.container1.saisieDeDate.placeholder', `Saisie de date`)
                  }" />
                <KaDatePickerInput
                  v-model="page.datePicker1.value"
                  code="date-picker-1"
                  :options="{
                    dateFormat: `relativeShort`,
                    placeholder: t('dateTimePickers.main.sousMain.exemple.proprietes.formatting.container1.datePicker1.placeholder', `Saisie de date`)
                  }" />
                <KaDatePickerInput
                  v-model="page.datePicker2.value"
                  code="date-picker-2"
                  :options="{
                    dateFormat: `birthday`,
                    placeholder: t('dateTimePickers.main.sousMain.exemple.proprietes.formatting.container1.datePicker2.placeholder', `Saisie de date`)
                  }" />
                <KaDatePickerInput
                  v-model="page.datePicker3.value"
                  code="date-picker-3"
                  :options="{
                    dateFormat: null,
                    placeholder: t('dateTimePickers.main.sousMain.exemple.proprietes.formatting.container1.datePicker3.placeholder', `Saisie de date`)
                  }" />
              </KaContainer>
            </KaContainer>
            <KaCodePreview
              code="code-preview-1"
              :options="{ elementToPreview: `7dk7ug2CEDx9XTanbmzbjA` }"
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
        <KaContainer code="container-2">
          <KaText code="contenu">
            <span v-html="t('dateTimePickers.rightPanel.sousNav.container2.contenu.value', `Contenu`)" />
          </KaText>
        </KaContainer>
        <!-- Container 1 -->
        <KaContainer code="container-3">
          <KaText
            code="text-2"
            :options="{
              href: { hash: `#utilisation-p9` },
              ariaLabel: `titre`,
              click: page.text2Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('dateTimePickers.rightPanel.sousNav.container3.text2.value', `Utilisation`)" />
          </KaText>
          <KaText
            code="text-3"
            :options="{
              href: { hash: `#api-p9` },
              ariaLabel: `titre`,
              click: page.text3Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('dateTimePickers.rightPanel.sousNav.container3.text3.value', `API`)" />
          </KaText>
          <KaText
            code="text-4"
            :options="{
              href: { hash: `#exemple-p9` },
              ariaLabel: `titre`,
              click: page.text4Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('dateTimePickers.rightPanel.sousNav.container3.text4.value', `Exemples`)" />
          </KaText>
          <!-- sous-categorie -->
          <KaContainer code="sous-categorie">
            <KaText
              code="sous-titre"
              :options="{
                href: { hash: `#proprietes-p9` },
                ariaLabel: `sous titre`,
                click: page.sousTitreClick
              }"
              :selected="{ style: { borderColor: appData.theme.primaryColor } }">
              <span v-html="t('dateTimePickers.rightPanel.sousNav.container3.sousCategorie.sousTitre.value', `Propriétés`)" />
            </KaText>
            <!-- sous-sous-categorie -->
            <KaContainer code="sous-sous-categorie">
              <KaText
                code="text-5"
                :options="{
                  href: { hash: `#couleurs-p9` },
                  ariaLabel: `sous titre`,
                  click: page.text5Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('dateTimePickers.rightPanel.sousNav.container3.sousCategorie.sousSousCategorie.text5.value', `Couleurs`)" />
              </KaText>
              <KaText
                code="text-6"
                :options="{
                  href: { hash: `#formatting-p9` },
                  ariaLabel: `sous titre`,
                  click: page.text6Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('dateTimePickers.rightPanel.sousNav.container3.sousCategorie.sousSousCategorie.text6.value', `Formatting`)" />
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
          hidden: page.$info.dateTimePickers.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarDateTimePickers } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarDateTimePickers'
})
provide('$scoped', '-p9')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = headerWithLeftSidebarDateTimePickers()
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
