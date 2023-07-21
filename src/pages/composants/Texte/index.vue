<template>
  <KaContainer
    code="texte"
    :data="page.$info.texte">
    <!-- Main -->
    <KaContainer code="main">
      <!-- Title -->
      <KaContainer code="title">
        <KaText code="textareas">
          <h1 v-html="t('texte.main.title.textareas.value', `Textareas`)" />
        </KaText>
        <KaText code="description">
          <span v-html="t('texte.main.title.description.value', `Textarea components are used for collecting large amounts of textual data.`)" />
        </KaText>
      </KaContainer>
      <!-- Basic -->
      <KaContainer code="basic">
        <KaText code="usage">
          <h2 v-html="t('texte.main.basic.usage.value', `Usage`)" />
        </KaText>
        <KaText code="v-textarea-in-its-simplest">
          <span v-html="t('texte.main.basic.vTextareaInItsSimplest.value', `v-textarea in its simplest form is a multi-line text-field, useful for larger amounts of text.`)" />
        </KaText>
        <KaTextAreaInput
          v-model="page.textArea.value"
          code="text-area"
          :options="{ placeholder: t('texte.main.basic.textArea.placeholder', `Text area`) }" />
        <KaCodePreview
          code="code-preview"
          :options="{ elementToPreview: `5v4FS3LLehsGsjqqbQ3pwN` }"
          value="https://www.kapix.fr" />
        <KaText code="api-il-manque-des">
          <h2 v-html="t('texte.main.basic.apiIlManqueDes.value', `API (il manque des informations)`)" />
        </KaText>
      </KaContainer>
      <!-- Auto Grow -->
      <KaContainer code="auto-grow">
        <KaText code="exemple">
          <h2 v-html="t('texte.main.autoGrow.exemple.value', `Exemple`)" />
        </KaText>
        <KaText code="text-1">
          <h3 v-html="t('texte.main.autoGrow.text1.value', `Usage`)" />
        </KaText>
        <KaText code="text-2">
          <h4 v-html="t('texte.main.autoGrow.text2.value', `Auto Grow`)" />
        </KaText>
        <KaText code="when-using-the-auto-grow">
          <span v-html="t('texte.main.autoGrow.whenUsingTheAutoGrow.value', `When using the auto-grow prop, textarea’s will automatically increase in size when the contained text exceeds its size.`)" />
        </KaText>
        <KaTextAreaInput
          v-model="page.textArea1.value"
          code="text-area-1"
          :options="{ placeholder: t('texte.main.autoGrow.textArea1.placeholder', `Text area`) }" />
        <KaCodePreview
          code="code-preview-1"
          :options="{ elementToPreview: `e4czeEcf4NuMafZqh8x1sc` }"
          value="https://www.kapix.fr" />
      </KaContainer>
      <!-- Colors -->
      <KaContainer code="colors">
        <KaText code="background-color">
          <h4 v-html="t('texte.main.colors.backgroundColor.value', `Background color`)" />
        </KaText>
        <KaText code="the-background-color">
          <span v-html="t('texte.main.colors.theBackgroundColor.value', `The background-color and color props give you more control over styling v-textarea’s.`)" />
        </KaText>
        <KaTextAreaInput
          v-model="page.textArea1.value"
          code="text-area-1"
          :options="{
            style: {
              color: `$invert`,
              innerBackgroundColor: appData.theme.fontHyperlinkColor
            },
            placeholder: t('texte.main.colors.textArea1.placeholder', `Text area 1`)
          }" />
        <KaCodePreview
          code="code-preview-2"
          :options="{ elementToPreview: `izi9iuHeHKq8ZzH53g7vKV` }"
          value="https://www.kapix.fr" />
      </KaContainer>
      <!-- Autocomplete -->
      <KaContainer code="autocomplete">
        <KaText code="browser-autocomplete">
          <h4 v-html="t('texte.main.autocomplete.browserAutocomplete.value', `Browser autocomplete`)" />
        </KaText>
        <KaText code="the-autocomplete-prop">
          <span v-html="t('texte.main.autocomplete.theAutocompleteProp.value', `The autocomplete prop gives you the option to enable the browser to predict user input.`)" />
        </KaText>
        <KaTextAreaInput
          v-model="page.textArea2.value"
          code="text-area-2"
          :options="{ placeholder: t('texte.main.autocomplete.textArea2.placeholder', `Text area`) }" />
        <KaCodePreview
          code="code-preview-3"
          :options="{ elementToPreview: `nxhEdyhbMLi4LNKH2qTE81` }"
          value="https://www.kapix.fr" />
      </KaContainer>
      <!-- Clearable -->
      <KaContainer code="clearable">
        <KaText code="text-3">
          <h4 v-html="t('texte.main.clearable.text3.value', `Clearable`)" />
        </KaText>
        <KaText code="you-can-clear-the-text">
          <span v-html="t('texte.main.clearable.youCanClearTheText.value', `You can clear the text from a v-textarea by using the clearable prop, and customize the icon used with the clearable-icon prop.`)" />
        </KaText>
        <KaTextAreaInput
          v-model="page.thisIsClearableText.value"
          code="this-is-clearable-text"
          :options="{ placeholder: `Text` }" />
        <KaCodePreview
          code="code-preview-4"
          :options="{ elementToPreview: `hnwTxsavb2knotMy2uTfeD` }"
          value="https://www.kapix.fr" />
      </KaContainer>
      <!-- Counter -->
      <KaContainer code="counter">
        <KaText code="text-4">
          <h4 v-html="t('texte.main.counter.text4.value', `Counter`)" />
        </KaText>
        <KaText code="the-counter-prop-informs">
          <span v-html="t('texte.main.counter.theCounterPropInforms.value', `The counter prop informs the user of a character limit for the v-textarea.`)" />
        </KaText>
        <KaTextAreaInput
          v-model="page.textArea3.value"
          code="text-area-3"
          :options="{ placeholder: t('texte.main.counter.textArea3.placeholder', `Text area`) }" />
        <KaCodePreview
          code="code-preview-5"
          :options="{ elementToPreview: `qco1R5gV9y5NaVyzRMXVoF` }"
          value="https://www.kapix.fr" />
      </KaContainer>
      <!-- Icons -->
      <KaContainer code="icons">
        <KaText code="text-5">
          <h4 v-html="t('texte.main.icons.text5.value', `Icons`)" />
        </KaText>
        <KaText code="the-append-icon-and">
          <span v-html="t('texte.main.icons.theAppendIconAnd.value', `The append-icon and prepend-icon props help add context to v-textarea.`)" />
        </KaText>
        <KaTextAreaInput
          v-model="page.textArea4.value"
          code="text-area-4"
          :options="{ placeholder: t('texte.main.icons.textArea4.placeholder', `Text area`) }" />
        <KaCodePreview
          code="code-preview-6"
          :options="{ elementToPreview: `eHQASJ6LeySYJjPiv3QrsR` }"
          value="https://www.kapix.fr" />
      </KaContainer>
      <!-- No resize -->
      <KaContainer code="no-resize">
        <KaText code="text-6">
          <h4 v-html="t('texte.main.noResize.text6.value', `No resize`)" />
        </KaText>
        <KaText code="v-textareas-have-the">
          <span v-html="t('texte.main.noResize.vTextareasHaveThe.value', `v-textarea’s have the option to remain the same size regardless of their content’s size, using the no-resize prop.`)" />
        </KaText>
        <KaTextAreaInput
          v-model="page.textArea5.value"
          code="text-area-5"
          :options="{ placeholder: t('texte.main.noResize.textArea5.placeholder', `Text area`) }" />
        <KaCodePreview
          code="code-preview-7"
          :options="{ elementToPreview: `mTwfZNTQgYJZbP3EX54rDe` }"
          value="https://www.kapix.fr" />
      </KaContainer>
      <!-- Rows -->
      <KaContainer code="rows">
        <KaText code="text-7">
          <h4 v-html="t('texte.main.rows.text7.value', `Rows<br> `)" />
        </KaText>
        <KaText code="the-rows-prop-allows">
          <span v-html="t('texte.main.rows.theRowsPropAllows.value', `The rows prop allows you to define how many rows the textarea has, when combined with the row-height prop you can further customize your rows by defining their height.`)" />
        </KaText>
        <KaTextAreaInput
          v-model="page.textArea6.value"
          code="text-area-6"
          :options="{ placeholder: t('texte.main.rows.textArea6.placeholder', `Text area`) }" />
        <KaTextAreaInput
          v-model="page.textArea7.value"
          code="text-area-7"
          :options="{ placeholder: t('texte.main.rows.textArea7.placeholder', `Text area`) }" />
        <KaTextAreaInput
          v-model="page.textArea8.value"
          code="text-area-8"
          :options="{ placeholder: t('texte.main.rows.textArea8.placeholder', `Text area`) }" />
        <KaTextAreaInput
          v-model="page.textArea9.value"
          code="text-area-9"
          :options="{ placeholder: t('texte.main.rows.textArea9.placeholder', `Text area`) }" />
        <KaCodePreview
          code="code-preview-8"
          :options="{ elementToPreview: `jbqB9zrnbCrc48SkNJuFbD` }"
          value="https://www.kapix.fr" />
      </KaContainer>
      <!-- Signup from -->
      <KaContainer code="signup-from">
        <KaText code="text-8">
          <h4 v-html="t('texte.main.signupFrom.text8.value', `Signup from`)" />
        </KaText>
        <KaText code="text-9">
          <span v-html="t('texte.main.signupFrom.text9.value', `v-textarea’s have the option to remain the same size regardless of their content’s size, using the no-resize prop.`)" />
        </KaText>
        <KaTextAreaInput
          v-model="page.textArea10.value"
          code="text-area-10"
          :options="{ placeholder: t('texte.main.signupFrom.textArea10.placeholder', `Text area`) }" />
        <KaCodePreview
          code="code-preview-9"
          :options="{ elementToPreview: `fqaWHCeu8NKSy29A7uvEbo` }"
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
            <span v-html="t('texte.rightPanel.sousNav.container.contenu.value', `Contenu`)" />
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
            <span v-html="t('texte.rightPanel.sousNav.container1.titre.value', `Utilisation`)" />
          </KaText>
          <KaText
            code="text-10"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.text10Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('texte.rightPanel.sousNav.container1.text10.value', `API`)" />
          </KaText>
          <KaText
            code="text-11"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.text11Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('texte.rightPanel.sousNav.container1.text11.value', `Exemples`)" />
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
              <span v-html="t('texte.rightPanel.sousNav.container1.sousCategorie.sousTitre.value', `Propriétés`)" />
            </KaText>
            <!-- sous-sous-categorie -->
            <KaContainer code="sous-sous-categorie">
              <KaText
                code="text-12"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.text12Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('texte.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.text12.value', `Couleurs`)" />
              </KaText>
              <KaText
                code="text-13"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.text13Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('texte.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.text13.value', `Valeurs`)" />
              </KaText>
              <KaText
                code="text-14"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.text14Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('texte.rightPanel.sousNav.container1.sousCategorie.sousSousCategorie.text14.value', `Etats`)" />
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
          hidden: page.$info.texte.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarTexte } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarTexte'
})
provide('$scoped', '-p4')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = headerWithLeftSidebarTexte()
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
