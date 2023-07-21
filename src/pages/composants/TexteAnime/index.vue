<template>
  <KaContainer
    code="texte-anime"
    :data="page.$info.texteAnime">
    <!-- Main -->
    <KaContainer code="main">
      <!-- Title -->
      <KaContainer code="title">
        <KaText code="text-1">
          <h1 v-html="t('texteAnime.main.title.text1.value', `Texte Anime`)" />
        </KaText>
      </KaContainer>
      <!-- Basic -->
      <KaContainer code="basic">
        <KaText code="simple-usage">
          <h2 v-html="t('texteAnime.main.basic.simpleUsage.value', `<strong>Simple usage</strong>`)" />
        </KaText>
        <KaTypeWriter
          code="type-writer"
          :value="[
            [`Write and backspace`]
          ]" />
        <KaCodePreview
          code="code-preview"
          :options="{ elementToPreview: `6s3fVL9Rr2SwR9qMc2VSv7` }"
          value="https://www.kapix.fr" />
        <KaText code="api-il-manque-des">
          <h2 v-html="t('texteAnime.main.basic.apiIlManqueDes.value', `API (il manque des informations)`)" />
        </KaText>
      </KaContainer>
      <!-- Select all -->
      <KaContainer code="select-all">
        <KaText code="exemple">
          <h2 v-html="t('texteAnime.main.selectAll.exemple.value', `Exemple`)" />
        </KaText>
        <KaText code="usage">
          <h3 v-html="t('texteAnime.main.selectAll.usage.value', `Usage`)" />
        </KaText>
        <KaText code="text-2">
          <h4 v-html="t('texteAnime.main.selectAll.text2.value', `Select all`)" />
        </KaText>
        <KaTypeWriter
          code="type-writer-1"
          :options="{
            eraseStyle: `select-all`,
            caretAnimation: null
          }"
          :value="[
            [`Write and select all`]
          ]" />
        <KaCodePreview
          code="code-preview-1"
          :options="{ elementToPreview: `2wSqHnDjg56bFkTa26ewGK` }"
          value="https://www.kapix.fr" />
      </KaContainer>
      <!-- Caret animation -->
      <KaContainer code="caret-animation">
        <KaText code="text-3">
          <h4 v-html="t('texteAnime.main.caretAnimation.text3.value', `Caret animation`)" />
        </KaText>
        <KaTypeWriter
          code="type-writer-2"
          :options="{ caretAnimation: `phase` }"
          :value="[
            [`Write with phase caret`]
          ]" />
        <KaCodePreview
          code="code-preview-2"
          :options="{ elementToPreview: `vTFH2x5hNhgJ6ZZ9LsYmX8` }"
          value="https://www.kapix.fr" />
      </KaContainer>
      <!-- Auto Grow -->
      <KaContainer code="auto-grow">
        <KaText code="delay">
          <h4 v-html="t('texteAnime.main.autoGrow.delay.value', `Delay`)" />
        </KaText>
        <KaTypeWriter
          code="type-writer-3"
          :options="{
            preTypeDelay: 50,
            typeDelay: 50,
            preEraseDelay: 1000,
            eraseDelay: 50
          }"
          :value="[
            [`Write with phase caret`]
          ]" />
        <KaCodePreview
          code="code-preview-3"
          :options="{ elementToPreview: `fzsPUh8hown8SU9PHdLS5V` }"
          value="https://www.kapix.fr" />
      </KaContainer>
    </KaContainer>
    <!-- Right Panel -->
    <KaContainer code="right-panel">
      <!-- Sous Nav -->
      <KaContainer code="sous-nav">
        <!-- Container -->
        <KaContainer code="container">
          <KaText code="contenu">
            <span v-html="t('texteAnime.rightPanel.sousNav.container.contenu.value', `Contenu`)" />
          </KaText>
        </KaContainer>
        <!-- Container 1 -->
        <KaContainer code="container-1">
          <KaText
            code="titre"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.titreClick
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('texteAnime.rightPanel.sousNav.container1.titre.value', `Utilisation`)" />
          </KaText>
          <KaText
            code="text-4"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.text4Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('texteAnime.rightPanel.sousNav.container1.text4.value', `API`)" />
          </KaText>
          <KaText
            code="text-5"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.text5Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('texteAnime.rightPanel.sousNav.container1.text5.value', `Exemples`)" />
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
              <span v-html="t('texteAnime.rightPanel.sousNav.container1.sousCategorie.sousTitre.value', `Propriétés`)" />
            </KaText>
            <!-- sous-sous-categorie -->
            <KaContainer code="sous-sous-categorie">
              <KaText
                code="text-6"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.text6Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('texteAnime.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.text6.value', `Couleurs`)" />
              </KaText>
              <KaText
                code="text-7"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.text7Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('texteAnime.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.text7.value', `Valeurs`)" />
              </KaText>
              <KaText
                code="text-8"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.text8Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('texteAnime.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.text8.value', `Etats`)" />
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
          hidden: page.$info.texteAnime.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarTexteAnime } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarTexteAnime'
})
provide('$scoped', '-p17')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = headerWithLeftSidebarTexteAnime()
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
