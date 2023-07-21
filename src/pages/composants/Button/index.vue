<template>
  <KaContainer
    code="bouton"
    :data="page.$info.bouton">
    <!-- Main -->
    <KaContainer code="main">
      <!-- Sous Main -->
      <KaContainer code="sous-main">
        <KaText code="titre">
          <h1 v-html="t('bouton.main.sousMain.titre.value', `Buttons`)" />
        </KaText>
        <KaText code="the-v-btn-component">
          <h2 v-html="t('bouton.main.sousMain.theVBtnComponent.value', `The v-btn component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color. Try out an interactive screencast on how Vuetify buttons work.`)" />
        </KaText>
        <!-- Utilisation -->
        <KaContainer code="utilisation">
          <KaText code="titre-categorie">
            <h2 v-html="t('bouton.main.sousMain.utilisation.titreCategorie.value', `Usage`)" />
          </KaText>
          <KaText code="buttons-in-their-simplest">
            <h2 v-html="t('bouton.main.sousMain.utilisation.buttonsInTheirSimplest.value', `Buttons in their simplest form contain uppercase text, a slight elevation, hover effect, and a ripple effect on click.`)" />
          </KaText>
          <!-- Container -->
          <KaContainer code="container">
            <!-- Container 5 -->
            <KaContainer code="container-5">
              <KaText
                code="outlined"
                :options="{
                  ripple: true,
                  click: page.outlinedClick,
                  $state: { selected: page.$data.outlined === `outlined` }
                }">
                <span v-html="t('bouton.main.sousMain.utilisation.container.container5.outlined.value', `OUTLINED`)" />
              </KaText>
              <KaText
                code="plain"
                :options="{
                  click: page.plainClick,
                  $state: { selected: page.$data.plain === `plain` }
                }">
                <span v-html="t('bouton.main.sousMain.utilisation.container.container5.plain.value', `PLAIN`)" />
              </KaText>
              <KaText
                code="rounded"
                :options="{
                  click: page.roundedClick,
                  $state: { selected: page.$data.rounded === `rounded` }
                }">
                <span v-html="t('bouton.main.sousMain.utilisation.container.container5.rounded.value', `ROUNDED`)" />
              </KaText>
            </KaContainer>
            <!-- Container -->
            <KaContainer
              code="container-1"
              inner>
              <KaButton
                code="button"
                :options="{
                  ripple: true,
                  style: {
                    innerBackgroundColor: $first([
                      page.$data.color === `primary` ? {
                        Angle: 0,
                        Colors: [
                          `#3358f4`,
                          `#1d8cf8`
                        ]
                      } : undefined,
                      page.$data.color === `secondary` ? {
                        Angle: 90,
                        Colors: [`#fcdc00ff`]
                      } : undefined,
                      page.$data.color === `lostark` ? {
                        Angle: 90,
                        Colors: [
                          `#ab8343ff`,
                          `#f3ead2ff`,
                          `#c8a773ff`
                        ]
                      } : undefined,
                      null
                    ]),
                    color: page.$data.plain === `plain` ? `#878787FF` : null,
                    border: page.$data.outlined === `default` ? null : page.$constants.button,
                    borderRadius: page.$data.rounded === `rounded` ? page.$constants.buttonRounded : page.$constants.button1
                  },
                  prependIcon: null,
                  prependInnerIcon: null,
                  appendIcon: null,
                  appendOuterIcon: null
                }">
                <span v-html="t('bouton.main.sousMain.utilisation.container.container1.button.value', `Button`)" />
              </KaButton>
            </KaContainer>
            <!-- Container -->
            <KaContainer code="container-2" />
            <!-- Container -->
            <KaContainer code="container-3">
              <KaSelectInput
                v-model="page.color.value"
                code="color"
                :options="{
                  debounce: 10,
                  items: page.$constants.colorItems,
                  placeholder: t('bouton.main.sousMain.utilisation.container.container3.color.placeholder', `color`)
                }" />
            </KaContainer>
          </KaContainer>
          <KaCodePreview
            code="code-preview"
            :options="{ elementToPreview: `2X71fnDTDhTjVP44HGad37` }"
            value="https://www.kapix.fr" />
        </KaContainer>
        <!-- API -->
        <KaContainer code="api">
          <KaText code="text-1">
            <h2 v-html="t('bouton.main.sousMain.api.text1.value', `Caveats`)" />
          </KaText>
          <KaText code="v-btn-is-the-only-component">
            <h2 v-html="t('bouton.main.sousMain.api.vBtnIsTheOnlyComponent.value', `v-btn is the only component that behaves differently when using the dark prop. Normally components use the dark prop to denote that they have a dark colored background and need their text to be white. While this will work for v-btn, it is advised to only use the prop when the button IS ON a colored background due to the disabled state blending in with white backgrounds. If you need white text, simply add the white--text class.`)" />
          </KaText>
        </KaContainer>
        <!-- API -->
        <KaContainer code="container-4">
          <KaText code="text-2">
            <h2 v-html="t('bouton.main.sousMain.container4.text2.value', `Guide`)" />
          </KaText>
          <KaText code="text-3">
            <h2 v-html="t('bouton.main.sousMain.container4.text3.value', `<p style='margin-left:0px;'>The v-btn component is commonly used throughout Vuetify and is a staple for any application. It is used for everything from navigation to form submission; and can be styled in a multitude of ways.</p><p style='margin-left:0px;'>The following code snippet is an example of a basic v-btn component only containing text:</p>`)" />
          </KaText>
        </KaContainer>
        <!-- Exemple -->
        <KaContainer code="exemple">
          <KaText code="exemples">
            <h2 v-html="t('bouton.main.sousMain.exemple.exemples.value', `Examples`)" />
          </KaText>
          <!-- Proprietes -->
          <KaContainer code="proprietes">
            <KaText code="text-4">
              <h3 v-html="t('bouton.main.sousMain.exemple.proprietes.text4.value', `Props`)" />
            </KaText>
            <!-- Couleurs -->
            <KaContainer code="couleurs">
              <KaText code="block">
                <h4 v-html="t('bouton.main.sousMain.exemple.proprietes.couleurs.block.value', `Block`)" />
              </KaText>
              <KaText code="block-buttons-extend">
                <span v-html="t('bouton.main.sousMain.exemple.proprietes.couleurs.blockButtonsExtend.value', `block buttons extend the full available width.<span style='background-color:rgb(255,255,255);color:rgba(0,0,0,0.87);'>.</span>`)" />
              </KaText>
              <!-- buttonBlock -->
              <KaContainer code="button-block">
                <KaButton
                  code="button-1"
                  :options="{ ripple: true }">
                  <span v-html="t('bouton.main.sousMain.exemple.proprietes.couleurs.buttonBlock.button1.value', `button`)" />
                </KaButton>
              </KaContainer>
            </KaContainer>
            <KaCodePreview
              code="code-preview-1"
              :options="{ elementToPreview: `bxoCZ4sWhSMn2id7h7Z6Z3` }"
              value="https://www.kapix.fr" />
            <!-- Etats -->
            <KaContainer code="etats">
              <!-- Couleurs -->
              <KaContainer code="container-6">
                <KaText code="text-5">
                  <h4 v-html="t('bouton.main.sousMain.exemple.proprietes.etats.container6.text5.value', `Outlined`)" />
                </KaText>
                <KaText code="outlined-buttons-inherit">
                  <span v-html="t('bouton.main.sousMain.exemple.proprietes.etats.container6.outlinedButtonsInherit.value', `outlined buttons inherit their borders from the current color applied.`)" />
                </KaText>
                <!-- outlined -->
                <KaContainer code="container-7">
                  <KaButton
                    code="outlined-button"
                    :options="{
                      ripple: true,
                      style: {
                        color: appData.theme.primaryColor,
                        borderColor: appData.theme.primaryColor
                      }
                    }">
                    <span v-html="t('bouton.main.sousMain.exemple.proprietes.etats.container6.container7.outlinedButton.value', `outlined button`)" />
                  </KaButton>
                </KaContainer>
                <KaCodePreview
                  code="code-preview-1"
                  :options="{ elementToPreview: `ffKUSk2BbSdmjUyZUW4UgU` }"
                  value="https://www.kapix.fr" />
                <!-- Couleurs -->
                <KaContainer code="container-8">
                  <!-- Couleurs -->
                  <KaContainer code="container-9">
                    <KaText code="text-6">
                      <h4 v-html="t('bouton.main.sousMain.exemple.proprietes.etats.container6.container8.container9.text6.value', `Rounded`)" />
                    </KaText>
                    <KaText code="rounded-buttons-behave">
                      <span v-html="t('bouton.main.sousMain.exemple.proprietes.etats.container6.container8.container9.roundedButtonsBehave.value', `rounded buttons behave the same as regular buttons but have rounded edges.`)" />
                    </KaText>
                    <!-- Sample Colors -->
                    <KaContainer code="sample-colors">
                      <KaButton
                        code="rounded-button"
                        :options="{
                          ripple: true,
                          style: {
                            innerBackgroundColor: appData.theme.primaryColor,
                            color: appData.theme.backgroundColor2
                          }
                        }">
                        <span v-html="t('bouton.main.sousMain.exemple.proprietes.etats.container6.container8.container9.sampleColors.roundedButton.value', `rounded button`)" />
                      </KaButton>
                    </KaContainer>
                    <KaCodePreview
                      code="code-preview-2"
                      :options="{ elementToPreview: `nRZwaiDEPbPqBWPVaEPTJK` }"
                      value="https://www.kapix.fr" />
                    <!-- Couleurs -->
                    <KaContainer code="container-10">
                      <KaText code="sizing">
                        <h4 v-html="t('bouton.main.sousMain.exemple.proprietes.etats.container6.container8.container9.container10.sizing.value', `Sizing`)" />
                      </KaText>
                      <KaText code="buttons-can-be-given">
                        <span v-html="t('bouton.main.sousMain.exemple.proprietes.etats.container6.container8.container9.container10.buttonsCanBeGiven.value', `<span style='background-color:rgb(255,255,255);color:rgba(0,0,0,0.87);'>Buttons can be given different sizing options to fit a multitude of scenarios</span>`)" />
                      </KaText>
                      <KaCodePreview
                        code="code-preview-3"
                        :options="{ elementToPreview: `igPCXX5CGGpxjPLq7R2uMY` }"
                        value="https://www.kapix.fr" />
                      <!-- Sample Colors -->
                      <KaContainer code="container-11" />
                      <KaCodePreview
                        code="code-preview-4"
                        :options="{ elementToPreview: `igPCXX5CGGpxjPLq7R2uMY` }"
                        value="https://www.kapix.fr" />
                      <!-- Couleurs -->
                      <KaContainer code="container-12">
                        <KaText code="tile">
                          <h4 v-html="t('bouton.main.sousMain.exemple.proprietes.etats.container6.container8.container9.container10.container12.tile.value', `Tile`)" />
                        </KaText>
                        <KaText code="tile-buttons-behave">
                          <span v-html="t('bouton.main.sousMain.exemple.proprietes.etats.container6.container8.container9.container10.container12.tileButtonsBehave.value', `tile buttons behave the same as regular buttons but have no border radius.`)" />
                        </KaText>
                        <!-- Sample Colors -->
                        <KaContainer code="container-13">
                          <KaButton
                            code="button-2"
                            :options="{ ripple: true }">
                            <span v-html="t('bouton.main.sousMain.exemple.proprietes.etats.container6.container8.container9.container10.container12.container13.button2.value', `button`)" />
                          </KaButton>
                        </KaContainer>
                        <!-- Sample Colors -->
                        <KaContainer code="container-14">
                          <KaCodePreview
                            code="code-preview-5"
                            :options="{ elementToPreview: `uMir9gphFcP9Vei3Z4z5k6` }"
                            value="https://www.kapix.fr" />
                        </KaContainer>
                        <KaText code="text-7">
                          <h3 v-html="t('bouton.main.sousMain.exemple.proprietes.etats.container6.container8.container9.container10.container12.text7.value', `Misc`)" />
                        </KaText>
                      </KaContainer>
                      <!-- Couleurs -->
                      <KaContainer code="container-15">
                        <KaText code="raised">
                          <h4 v-html="t('bouton.main.sousMain.exemple.proprietes.etats.container6.container8.container9.container10.container15.raised.value', `Raised`)" />
                        </KaText>
                        <KaText code="raised-buttons-have">
                          <span v-html="t('bouton.main.sousMain.exemple.proprietes.etats.container6.container8.container9.container10.container15.raisedButtonsHave.value', `raised buttons have a box shadow that increases when clicked. This is the default style.`)" />
                        </KaText>
                        <!-- Sample Colors -->
                        <KaContainer code="container-16" />
                      </KaContainer>
                    </KaContainer>
                  </KaContainer>
                </KaContainer>
              </KaContainer>
            </KaContainer>
            <KaText code="icon">
              <h4 v-html="t('bouton.main.sousMain.exemple.proprietes.icon.value', `Icon`)" />
            </KaText>
          </KaContainer>
        </KaContainer>
        <!-- Couleurs -->
        <KaContainer code="container-17">
          <KaText code="text-8">
            <h4 v-html="t('bouton.main.sousMain.container17.text8.value', `Icon`)" />
          </KaText>
          <KaText code="icons-can-be-used">
            <span v-html="t('bouton.main.sousMain.container17.iconsCanBeUsed.value', `<span style='background-color:rgb(255,255,255);color:rgba(0,0,0,0.87);'>Icons can be used for the primary content of a button. This property makes the button rounded and applies the </span><strong>text</strong><span style='background-color:rgb(255,255,255);color:rgba(0,0,0,0.87);'> prop styles.</span>`)" />
          </KaText>
        </KaContainer>
      </KaContainer>
    </KaContainer>
    <!-- Right Panel -->
    <KaContainer code="right-panel">
      <!-- Sous Nav -->
      <KaContainer code="sous-nav">
        <!-- Container -->
        <KaContainer code="container-18">
          <KaText code="contenu">
            <span v-html="t('bouton.rightPanel.sousNav.container18.contenu.value', `Contenu`)" />
          </KaText>
        </KaContainer>
        <!-- Container 1 -->
        <KaContainer code="container-19">
          <KaText
            code="text-9"
            :options="{
              href: { hash: `#utilisation-p5` },
              ariaLabel: `titre`,
              click: page.text9Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('bouton.rightPanel.sousNav.container19.text9.value', `Utilisation`)" />
          </KaText>
          <KaText
            code="text-10"
            :options="{
              href: { hash: `#api-p5` },
              ariaLabel: `titre`,
              click: page.text10Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('bouton.rightPanel.sousNav.container19.text10.value', `API`)" />
          </KaText>
          <KaText
            code="text-11"
            :options="{
              href: { hash: `#exemple-p5` },
              ariaLabel: `titre`,
              click: page.text11Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('bouton.rightPanel.sousNav.container19.text11.value', `Exemples`)" />
          </KaText>
          <!-- sous-categorie -->
          <KaContainer code="sous-categorie">
            <KaText
              code="sous-titre"
              :options="{
                href: { hash: `#proprietes-p5` },
                ariaLabel: `sous titre`,
                click: page.sousTitreClick
              }"
              :selected="{ style: { borderColor: appData.theme.primaryColor } }">
              <span v-html="t('bouton.rightPanel.sousNav.container19.sousCategorie.sousTitre.value', `Propriétés`)" />
            </KaText>
            <!-- sous-sous-categorie -->
            <KaContainer code="sous-sous-categorie">
              <KaText
                code="text-12"
                :options="{
                  href: { hash: `#couleurs-p5` },
                  ariaLabel: `sous titre`,
                  click: page.text12Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('bouton.rightPanel.sousNav.container19.sousCategorie.sousSousCategorie.text12.value', `Couleurs`)" />
              </KaText>
              <KaText
                code="text-13"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.text13Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('bouton.rightPanel.sousNav.container19.sousCategorie.sousSousCategorie.text13.value', `Valeurs`)" />
              </KaText>
              <KaText
                code="text-14"
                :options="{
                  href: { hash: `#etats-p5` },
                  ariaLabel: `sous titre`,
                  click: page.text14Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('bouton.rightPanel.sousNav.container19.sousCategorie.sousSousCategorie.text14.value', `Etats`)" />
              </KaText>
            </KaContainer>
          </KaContainer>
        </KaContainer>
      </KaContainer>
    </KaContainer>
    <KapixTeleport :disabled="!$breakpoint.mdAndUp">
      <KaIcon
        code="icon-1"
        :options="{
          animationIn: `fadeInUp`,
          animationOut: `fadeOutDown`,
          click: page.icon1Click,
          hidden: page.$info.bouton.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarBouton } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarBouton'
})
provide('$scoped', '-p5')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = headerWithLeftSidebarBouton()
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
