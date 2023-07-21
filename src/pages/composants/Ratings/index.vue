<template>
  <KaContainer
    code="ratings"
    :data="page.$info.ratings">
    <!-- Main -->
    <KaContainer code="main">
      <!-- Sous Main -->
      <KaContainer code="sous-main">
        <KaText code="titre">
          <h1 v-html="t('ratings.main.sousMain.titre.value', `Evaluations avec étoiles`)" />
        </KaText>
        <!-- Utilisation -->
        <KaContainer code="utilisation">
          <KaText code="titre-categorie">
            <h2 v-html="t('ratings.main.sousMain.utilisation.titreCategorie.value', `Utilisation`)" />
          </KaText>
          <KaText code="the-v-rating-component">
            <span v-html="t('ratings.main.sousMain.utilisation.theVRatingComponent.value', `The v-rating component provides a simple interface for gathering user feedback`)" />
          </KaText>
          <!-- Container 1 -->
          <KaContainer code="container-1">
            <KaRatingInput
              v-model="page.evaluationAvecEtoiles.value"
              code="evaluation-avec-etoiles"
              :options="{
                halfIncrement: page.$data.half === true ? true : null,
                starSize: page.$data.size,
                starLength: page.$data.length,
                placeholder: t('ratings.main.sousMain.utilisation.container1.evaluationAvecEtoiles.placeholder', `Evaluation avec étoiles`)
              }"
              inner />
            <!-- Container -->
            <KaContainer code="container">
              <KaCheckboxInput
                v-model="page.caseACocherOui.value"
                code="case-a-cocher-oui"
                :options="{
                  click: page.caseACocherOuiClick,
                  debounce: 100
                }" />
              <KaText code="half-increment">
                <span v-html="t('ratings.main.sousMain.utilisation.container1.container.halfIncrement.value', `Half increment`)" />
              </KaText>
              <KaText code="size">
                <span v-html="t('ratings.main.sousMain.utilisation.container1.container.size.value', `Size`)" />
              </KaText>
              <KaSliderInput
                v-model="page.curseur.value"
                code="curseur"
                :options="{
                  style: { color: appData.theme.primaryColor },
                  placeholder: t('ratings.main.sousMain.utilisation.container1.container.curseur.placeholder', `Curseur`),
                  min: 10,
                  max: 32
                }" />
              <KaText code="length">
                <span v-html="t('ratings.main.sousMain.utilisation.container1.container.length.value', `Length`)" />
              </KaText>
              <KaSliderInput
                v-model="page.slider1.value"
                code="slider-1"
                :options="{
                  style: { color: appData.theme.primaryColor },
                  placeholder: t('ratings.main.sousMain.utilisation.container1.container.slider1.placeholder', `Curseur`),
                  min: 1,
                  max: 15
                }" />
            </KaContainer>
          </KaContainer>
          <KaCodePreview
            code="code-preview"
            :options="{ elementToPreview: `rjpgV1EyDko2TYwwYwUZh8` }"
            value="https://www.kapix.fr" />
          <!-- Container -->
          <KaContainer code="container-2" />
        </KaContainer>
        <!-- API -->
        <KaContainer code="api">
          <KaText code="text-1">
            <h2 v-html="t('ratings.main.sousMain.api.text1.value', `API (il manque des informations)`)" />
          </KaText>
        </KaContainer>
        <!-- Exemple -->
        <KaContainer code="exemple">
          <KaText code="exemples">
            <h2 v-html="t('ratings.main.sousMain.exemple.exemples.value', `Exemples`)" />
          </KaText>
          <!-- Proprietes -->
          <KaContainer code="proprietes">
            <KaText code="text-2">
              <h3 v-html="t('ratings.main.sousMain.exemple.proprietes.text2.value', `Propriétés`)" />
            </KaText>
            <!-- Couleurs -->
            <KaContainer code="couleurs">
              <KaText code="color">
                <h4 v-html="t('ratings.main.sousMain.exemple.proprietes.couleurs.color.value', `Color`)" />
              </KaText>
              <KaText code="text-3">
                <span v-html="t('ratings.main.sousMain.exemple.proprietes.couleurs.text3.value', `The v-rating component can be colored as you want, you can set both selected and not selected colors`)" />
              </KaText>
              <!-- Colors stars -->
              <KaContainer code="colors-stars">
                <KaCheckboxInput
                  v-model="page.checkbox1.value"
                  code="checkbox-1"
                  :options="{
                    click: page.checkbox1Click,
                    $state: { selected: page.$data.color === `red` },
                    debounce: 100
                  }" />
                <KaText code="rouge">
                  <span v-html="t('ratings.main.sousMain.exemple.proprietes.couleurs.colorsStars.rouge.value', `rouge`)" />
                </KaText>
                <KaCheckboxInput
                  v-model="page.caseACocherOui1.value"
                  code="case-a-cocher-oui-1"
                  :options="{
                    click: page.caseACocherOui1Click,
                    $state: { selected: page.$data.color === `blue` },
                    debounce: 100
                  }" />
                <KaText code="bleu">
                  <span v-html="t('ratings.main.sousMain.exemple.proprietes.couleurs.colorsStars.bleu.value', `bleu`)" />
                </KaText>
                <KaCheckboxInput
                  v-model="page.caseACocherOui2.value"
                  code="case-a-cocher-oui-2"
                  :options="{
                    click: page.caseACocherOui2Click,
                    $state: { selected: page.$data.color === `green` },
                    debounce: 100
                  }" />
                <KaText code="vert">
                  <span v-html="t('ratings.main.sousMain.exemple.proprietes.couleurs.colorsStars.vert.value', `vert`)" />
                </KaText>
                <KaCheckboxInput
                  v-model="page.caseACocherOui4.value"
                  code="case-a-cocher-oui-4"
                  :options="{
                    style: { color: appData.theme.primaryColor },
                    click: page.caseACocherOui4Click,
                    $state: { selected: page.$data.color === `blue-kapix` },
                    debounce: 100
                  }" />
                <KaText code="bleu-kapix">
                  <span v-html="t('ratings.main.sousMain.exemple.proprietes.couleurs.colorsStars.bleuKapix.value', `bleu Kapix`)" />
                </KaText>
                <KaCheckboxInput
                  v-model="page.caseACocherOui5.value"
                  code="case-a-cocher-oui-5"
                  :options="{
                    style: { color: appData.theme.secondaryColor },
                    click: page.caseACocherOui5Click,
                    $state: { selected: page.$data.color === `yellow-kapix` },
                    debounce: 100
                  }" />
                <KaText code="jaune-kapix">
                  <span v-html="t('ratings.main.sousMain.exemple.proprietes.couleurs.colorsStars.jauneKapix.value', `jaune kapix`)" />
                </KaText>
                <KaRatingInput
                  v-model="page.rating1.value"
                  code="rating-1"
                  :options="{
                    style: {
                      color: $first([
                        page.$data.color === `red` ? appData.theme.buttonColor : undefined,
                        page.$data.color === `blue` ? `#2C3BFFFF` : undefined,
                        page.$data.color === `green` ? `#24FF52FF` : undefined,
                        page.$data.color === `yellow-kapix` ? appData.theme.secondaryColor : undefined,
                        appData.theme.primaryColor
                      ])
                    },
                    placeholder: t('ratings.main.sousMain.exemple.proprietes.couleurs.colorsStars.rating1.placeholder', `Evaluation avec étoiles`)
                  }"
                  inner />
              </KaContainer>
              <KaCodePreview
                code="code-preview-1"
                :options="{ elementToPreview: `fJ7khA1rNsi3X38aLkDFXc` }"
                value="https://www.kapix.fr" />
            </KaContainer>
            <!-- Length -->
            <KaContainer code="container-3">
              <KaText code="text-4">
                <h4 v-html="t('ratings.main.sousMain.exemple.proprietes.container3.text4.value', `Length`)" />
              </KaText>
              <KaText code="sometimes-an-application">
                <span v-html="t('ratings.main.sousMain.exemple.proprietes.container3.sometimesAnApplication.value', `Sometimes an application will call for a customized implementation. Easily change length or displayed icons`)" />
              </KaText>
              <KaSliderInput
                v-model="page.slider2.value"
                code="slider-2"
                :options="{
                  style: { color: appData.theme.primaryColor },
                  placeholder: t('ratings.main.sousMain.exemple.proprietes.container3.slider2.placeholder', `Curseur`),
                  min: 1,
                  max: 15
                }" />
              <!-- Length -->
              <KaContainer code="container-4">
                <KaText code="custom-length">
                  <span v-html="t('ratings.main.sousMain.exemple.proprietes.container3.container4.customLength.value', `Custom Length`)" />
                </KaText>
                <KaRatingInput
                  v-model="page.rating2.value"
                  code="rating-2"
                  :options="{
                    starLength: page.$data.customLength,
                    placeholder: t('ratings.main.sousMain.exemple.proprietes.container3.container4.rating2.placeholder', `Evaluation avec étoiles`)
                  }"
                  inner />
              </KaContainer>
              <KaCodePreview
                code="code-preview-1"
                :options="{ elementToPreview: `gTnQd2tQezupzjXqwy3fsT` }"
                value="https://www.kapix.fr" />
            </KaContainer>
            <!-- Incremented -->
            <KaContainer code="incremented">
              <KaText code="text-5">
                <h4 v-html="t('ratings.main.sousMain.exemple.proprietes.incremented.text5.value', `Incremented`)" />
              </KaText>
              <KaText code="a-rating-can-have-3">
                <span v-html="t('ratings.main.sousMain.exemple.proprietes.incremented.aRatingCanHave3.value', `A rating can have 3 defined icons, full-icon, half-icon (with the half-increments prop) and empty-icon.`)" />
              </KaText>
              <!-- Incremented -->
              <KaContainer code="container-5">
                <KaRatingInput
                  v-model="page.rating3.value"
                  code="rating-3"
                  :options="{ placeholder: t('ratings.main.sousMain.exemple.proprietes.incremented.container5.rating3.placeholder', `Evaluation avec étoiles`) }"
                  inner />
              </KaContainer>
              <KaCodePreview
                code="code-preview-2"
                :options="{ elementToPreview: `bjS1VEsykSg7EqxRby5GnU` }"
                value="https://www.kapix.fr" />
            </KaContainer>
            <!-- Size -->
            <KaContainer code="container-6">
              <KaText code="text-6">
                <h4 v-html="t('ratings.main.sousMain.exemple.proprietes.container6.text6.value', `Size`)" />
              </KaText>
              <KaText code="utilize-the-same-sizing">
                <span v-html="t('ratings.main.sousMain.exemple.proprietes.container6.utilizeTheSameSizing.value', `Utilize the same sizing classes available in v-icon or provide your own with the size prop.`)" />
              </KaText>
              <!-- Size sample -->
              <KaContainer code="size-sample">
                <KaRatingInput
                  v-model="page.rating4.value"
                  code="rating-4"
                  :options="{
                    halfIncrement: false,
                    placeholder: t('ratings.main.sousMain.exemple.proprietes.container6.sizeSample.rating4.placeholder', `Evaluation avec étoiles`)
                  }"
                  inner />
                <KaRatingInput
                  v-model="page.rating5.value"
                  code="rating-5"
                  :options="{
                    halfIncrement: false,
                    starSize: 20,
                    placeholder: t('ratings.main.sousMain.exemple.proprietes.container6.sizeSample.rating5.placeholder', `Evaluation avec étoiles`)
                  }"
                  inner />
                <KaRatingInput
                  v-model="page.rating6.value"
                  code="rating-6"
                  :options="{
                    halfIncrement: false,
                    placeholder: t('ratings.main.sousMain.exemple.proprietes.container6.sizeSample.rating6.placeholder', `Evaluation avec étoiles`)
                  }"
                  inner />
                <KaRatingInput
                  v-model="page.rating7.value"
                  code="rating-7"
                  :options="{
                    halfIncrement: false,
                    starSize: 40,
                    placeholder: t('ratings.main.sousMain.exemple.proprietes.container6.sizeSample.rating7.placeholder', `Evaluation avec étoiles`)
                  }"
                  inner />
              </KaContainer>
              <KaCodePreview
                code="code-preview-3"
                :options="{ elementToPreview: `a5ZWe8gEhoJSYfjSX2Wnuz` }"
                value="https://www.kapix.fr" />
            </KaContainer>
            <!-- Etats -->
            <KaContainer code="etats">
              <KaText code="text-7">
                <h4 v-html="t('ratings.main.sousMain.exemple.proprietes.etats.text7.value', `Etats`)" />
              </KaText>
              <!-- Container -->
              <KaContainer code="container-7" />
              <!-- Disable Sample -->
              <KaContainer code="disable-sample">
                <KaRatingInput
                  v-model="page.rating8.value"
                  code="rating-8"
                  :options="{ placeholder: t('ratings.main.sousMain.exemple.proprietes.etats.disableSample.rating8.placeholder', `Evaluation avec étoiles`) }" />
              </KaContainer>
              <KaSliderInput
                v-model="page.slider3.value"
                code="slider-3"
                :options="{
                  style: { color: appData.theme.primaryColor },
                  placeholder: t('ratings.main.sousMain.exemple.proprietes.etats.slider3.placeholder', `Curseur`),
                  min: 0,
                  max: 5
                }" />
            </KaContainer>
          </KaContainer>
          <!-- MultiValeur -->
          <KaContainer code="multi-valeur">
            <Paragraphe
              instance-class="paragraphe-p10"
              content="il est possible de mettre deux valeurs pour une même sortie" />
          </KaContainer>
        </KaContainer>
      </KaContainer>
    </KaContainer>
    <!-- Right Panel -->
    <KaContainer code="right-panel">
      <!-- Sous Nav -->
      <KaContainer code="sous-nav">
        <!-- Container -->
        <KaContainer code="container-8">
          <KaText code="contenu">
            <span v-html="t('ratings.rightPanel.sousNav.container8.contenu.value', `Contenu`)" />
          </KaText>
        </KaContainer>
        <!-- Container 1 -->
        <KaContainer code="container-9">
          <KaText
            code="text-8"
            :options="{
              href: { hash: `#utilisation-p10` },
              ariaLabel: `titre`,
              click: page.text8Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('ratings.rightPanel.sousNav.container9.text8.value', `Utilisation`)" />
          </KaText>
          <KaText
            code="text-9"
            :options="{
              href: { hash: `#api-p10` },
              ariaLabel: `titre`,
              click: page.text9Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('ratings.rightPanel.sousNav.container9.text9.value', `API`)" />
          </KaText>
          <KaText
            code="text-10"
            :options="{
              href: { hash: `#exemple-p10` },
              ariaLabel: `titre`,
              click: page.text10Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('ratings.rightPanel.sousNav.container9.text10.value', `Exemples`)" />
          </KaText>
          <!-- sous-categorie -->
          <KaContainer code="sous-categorie">
            <KaText
              code="sous-titre"
              :options="{
                href: { hash: `#proprietes-p10` },
                ariaLabel: `sous titre`,
                click: page.sousTitreClick
              }"
              :selected="{ style: { borderColor: appData.theme.primaryColor } }">
              <span v-html="t('ratings.rightPanel.sousNav.container9.sousCategorie.sousTitre.value', `Propriétés`)" />
            </KaText>
            <!-- sous-sous-categorie -->
            <KaContainer code="sous-sous-categorie">
              <KaText
                code="text-11"
                :options="{
                  href: { hash: `#couleurs-p10` },
                  ariaLabel: `sous titre`,
                  click: page.text11Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('ratings.rightPanel.sousNav.container9.sousCategorie.sousSousCategorie.text11.value', `Couleurs`)" />
              </KaText>
              <KaText
                code="text-12"
                :options="{
                  href: { hash: `#container-3-p10` },
                  ariaLabel: `sous titre`,
                  click: page.text12Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('ratings.rightPanel.sousNav.container9.sousCategorie.sousSousCategorie.text12.value', `Valeurs`)" />
              </KaText>
              <KaText
                code="text-13"
                :options="{
                  href: { hash: `#etats-p10` },
                  ariaLabel: `sous titre`,
                  click: page.text13Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('ratings.rightPanel.sousNav.container9.sousCategorie.sousSousCategorie.text13.value', `Etats`)" />
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
          hidden: page.$info.ratings.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarRatings } from './store'
import Paragraphe from '~/components/Paragraphe/index.vue'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarRatings'
})
provide('$scoped', '-p10')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = headerWithLeftSidebarRatings()
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
