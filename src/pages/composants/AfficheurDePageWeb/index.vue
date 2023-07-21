<template>
  <KaContainer
    code="afficheur-de-page-web"
    :data="page.$info.afficheurDePageWeb">
    <!-- Main -->
    <KaContainer code="main">
      <!-- Title -->
      <KaContainer code="title">
        <KaText code="text-1">
          <h1 v-html="t('afficheurDePageWeb.main.title.text1.value', `Afficheur de page web`)" />
        </KaText>
      </KaContainer>
      <!-- Basic -->
      <KaContainer code="basic">
        <KaText code="simple-usage">
          <h2 v-html="t('afficheurDePageWeb.main.basic.simpleUsage.value', `<strong>Simple usage</strong>`)" />
        </KaText>
        <KaText code="just-set-an-url-in">
          <span v-html="t('afficheurDePageWeb.main.basic.justSetAnUrlIn.value', `Just set an url in the iframe.`)" />
        </KaText>
        <KaIframe
          code="iframe"
          :options="{
            lazyOptions: {
              throttle: 200,
              once: true,
              intersection: { threshold: 0.1 }
            }
          }"
          value="https://www.youtube.com/embed/5Bk-PbPgaIk" />
        <KaCodePreview
          code="code-preview"
          :options="{ elementToPreview: `fCu8fA2jRAcUWDsD8ZMYyb` }"
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
            <span v-html="t('afficheurDePageWeb.rightPanel.sousNav.container.contenu.value', `Contenu`)" />
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
            <span v-html="t('afficheurDePageWeb.rightPanel.sousNav.container1.titre.value', `Utilisation`)" />
          </KaText>
          <KaText
            code="text-2"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.text2Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('afficheurDePageWeb.rightPanel.sousNav.container1.text2.value', `API`)" />
          </KaText>
          <KaText
            code="text-3"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.text3Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('afficheurDePageWeb.rightPanel.sousNav.container1.text3.value', `Exemples`)" />
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
              <span v-html="t('afficheurDePageWeb.rightPanel.sousNav.container1.sousCategorie.sousTitre.value', `Propriétés`)" />
            </KaText>
            <!-- sous-sous-categorie -->
            <KaContainer code="sous-sous-categorie">
              <KaText
                code="text-4"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.text4Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('afficheurDePageWeb.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.text4.value', `Couleurs`)" />
              </KaText>
              <KaText
                code="text-5"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.text5Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('afficheurDePageWeb.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.text5.value', `Valeurs`)" />
              </KaText>
              <KaText
                code="text-6"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.text6Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('afficheurDePageWeb.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.text6.value', `Etats`)" />
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
          hidden: page.$info.afficheurDePageWeb.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarAfficheurDePageWeb } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarAfficheurDePageWeb'
})
provide('$scoped', '-p16')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = headerWithLeftSidebarAfficheurDePageWeb()
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
