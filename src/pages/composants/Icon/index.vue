<template>
  <KaContainer
    code="icon"
    :data="page.$info.icon">
    <!-- Page -->
    <KaContainer code="page">
      <!-- Sous page -->
      <KaContainer code="sous-page">
        <KaText code="titre">
          <h1 v-html="t('icon.page.sousPage.titre.value', `Icons`)" />
        </KaText>
        <KaText code="paragraphe">
          <span v-html="t('icon.page.sousPage.paragraphe.value', `The v-icon component provides a large set of glyphs to provide context to various aspects of your application. For a list of all available icons, visit the official <a href='https://materialdesignicons.com/'>Material Design Icons</a> page. To use any of these icons simply use the mdi- prefix followed by the icon name.`)" />
        </KaText>
        <!-- Usage -->
        <KaContainer code="usage">
          <KaText code="titre-categorie">
            <h2 v-html="t('icon.page.sousPage.usage.titreCategorie.value', `Usage`)" />
          </KaText>
          <KaText code="text-1">
            <span v-html="t('icon.page.sousPage.usage.text1.value', `Icons come in two themes (light and dark), and five different sizes (x-small, small, medium (default), large, and x-large).`)" />
          </KaText>
          <!-- Section 1 -->
          <KaContainer code="section-1">
            <!-- Container -->
            <KaContainer code="container">
              <KaButton
                code="bouton-default"
                :options="{
                  ripple: true,
                  click: page.boutonDefaultClick,
                  $state: { selected: page.$data.size === `medium` && page.$data.color === `default` && page.$data.icon === `mdi-plus` }
                }">
                <span v-html="t('icon.page.sousPage.usage.section1.container.boutonDefault.value', `default`)" />
              </KaButton>
              <!-- Container -->
              <KaContainer code="container-1">
                <!-- Container -->
                <KaContainer
                  code="container-2"
                  :options="{
                    style: {
                      fontSize: $first([
                        page.$data.size === `x-small` ? `0.67em` : undefined,
                        page.$data.size === `small` ? `0.83em` : undefined,
                        page.$data.size === `medium` ? `1em` : undefined,
                        page.$data.size === `large` ? `1.17em` : undefined,
                        page.$data.size === `x-large` ? `1.5em` : undefined,
                        `2em`
                      ])
                    }
                  }"
                  inner>
                  <KaIcon
                    code="usage-icon-sample"
                    :options="{
                      style: {
                        color: $first([
                          page.$data.color === `default` ? `#000000FF` : undefined,
                          page.$data.color === `success` ? `#00FF0AFF` : undefined,
                          page.$data.color === `info` ? `#0028FFFF` : undefined,
                          page.$data.color === `warning` ? `#FF7700FF` : undefined,
                          `#FF0000FF`
                        ])
                      }
                    }"
                    :value="$first([
                      page.$data.icon === `mdi-plus` ? 'i-fa-solid:plus' : undefined,
                      page.$data.icon === `mdi-check-circle` ? 'i-fa-solid:check-circle' : undefined,
                      page.$data.icon === `mdi-information` ? 'i-fa-solid:info-circle' : undefined,
                      page.$data.icon === `mdi-alert` ? 'i-fa-solid:exclamation-triangle' : undefined,
                      page.$data.icon === `mdi-alert-circle` ? 'i-fa-solid:exclamation-circle' : undefined,
                      'i-fa-solid:wifi'
                    ])" />
                </KaContainer>
                <!-- Container 1 -->
                <KaContainer code="container-3">
                  <KaSelectInput
                    v-model="page.size.value"
                    code="size"
                    :options="{
                      tooltip: { content: t('icon.page.sousPage.usage.section1.container.container1.container3.size.tooltip', `Size`) },
                      debounce: 10,
                      placeholder: t('icon.page.sousPage.usage.section1.container.container1.container3.size.placeholder', `Size`)
                    }" />
                  <KaSelectInput
                    v-model="page.color.value"
                    code="color"
                    :options="{
                      debounce: 10,
                      placeholder: t('icon.page.sousPage.usage.section1.container.container1.container3.color.placeholder', `Color`)
                    }" />
                  <KaSelectInput
                    v-model="page.selectInput1.value"
                    code="select-input-1"
                    :options="{
                      debounce: 10,
                      placeholder: t('icon.page.sousPage.usage.section1.container.container1.container3.selectInput1.placeholder', `Icon`)
                    }" />
                </KaContainer>
              </KaContainer>
            </KaContainer>
            <KaCodePreview
              code="code-preview"
              :options="{ elementToPreview: `8eJsnSaFqVD2psfgSV4xXd` }"
              value="https://www.kapix.fr" />
          </KaContainer>
        </KaContainer>
        <!-- Exemple -->
        <KaContainer code="exemple">
          <KaText code="exemples">
            <h2 v-html="t('icon.page.sousPage.exemple.exemples.value', `Examples`)" />
          </KaText>
          <!-- Proprietes -->
          <KaContainer code="proprietes">
            <KaText code="text-2">
              <h3 v-html="t('icon.page.sousPage.exemple.proprietes.text2.value', `Props`)" />
            </KaText>
            <!-- Couleurs -->
            <KaContainer code="couleurs">
              <KaText code="text-3">
                <h4 v-html="t('icon.page.sousPage.exemple.proprietes.couleurs.text3.value', `Color`)" />
              </KaText>
              <KaText code="text-4">
                <span v-html="t('icon.page.sousPage.exemple.proprietes.couleurs.text4.value', `Using color helpers you can change the color of an icon from the standard dark and light themes.`)" />
              </KaText>
              <!-- Sample Colors -->
              <KaContainer code="sample-colors">
                <!-- Conteneur haut -->
                <KaContainer code="conteneur-haut">
                  <KaIcon
                    code="reverse-color"
                    :options="{
                      tooltip: { content: t('icon.page.sousPage.exemple.proprietes.couleurs.sampleColors.conteneurHaut.reverseColor.tooltip', `Invert example colors`) },
                      click: page.reverseColorClick,
                      $state: { selected: page.$data.reverseColor === true }
                    }"
                    :selected="{ click: page.reverseColorClickWhenSelected }"
                    :value="page.$data.reverseColor === false ? 'i-fa-solid:sun' : 'i-fa-solid:moon'" />
                  <KaIcon
                    code="icon-1"
                    :options="{
                      click: page.icon1Click,
                      $state: { selected: page.$data.previewCode === true }
                    }"
                    :selected="{ click: page.icon1ClickWhenSelected }"
                    value="i-fa-solid:code" />
                </KaContainer>
                <KaCodePreview
                  code="code-preview-1"
                  :options="{
                    hidden: page.$data.previewCode === true ? false : true,
                    elementToPreview: `m1BsU8yAGbKZmwcz5kDgT9`
                  }"
                  value="https://www.kapix.fr" />
                <!-- Icons color -->
                <KaContainer
                  code="icons-color"
                  :options="{
                    style: {
                      color: `$invert`,
                      innerBackgroundColor: page.$data.reverseColor === false ? {
                        Angle: 90,
                        Colors: [`#ffffffff`]
                      } : {
                        Angle: 90,
                        Colors: [`#000000ff`]
                      }
                    }
                  }">
                  <KaIcon
                    code="icon-2"
                    value="i-fa-solid:city" />
                  <KaIcon
                    code="chatbox"
                    value="i-fa-solid:comment-alt" />
                  <KaIcon
                    code="keyboard"
                    value="i-fa-regular:keyboard" />
                  <KaIcon
                    code="letter"
                    value="i-fa-solid:envelope" />
                  <KaIcon
                    code="arrow"
                    value="i-fa-solid:expand-arrows-alt" />
                  <KaIcon
                    code="alternate-arrow"
                    value="i-fa-solid:arrow-alt-circle-up" />
                </KaContainer>
              </KaContainer>
            </KaContainer>
            <!-- Valeurs -->
            <KaContainer code="valeurs">
              <KaText code="events">
                <h4 v-html="t('icon.page.sousPage.exemple.proprietes.valeurs.events.value', `Events`)" />
              </KaText>
              <KaText code="click">
                <h4 v-html="t('icon.page.sousPage.exemple.proprietes.valeurs.click.value', `Click`)" />
              </KaText>
              <KaText code="binding-any-click-event">
                <span v-html="t('icon.page.sousPage.exemple.proprietes.valeurs.bindingAnyClickEvent.value', `Binding any click event to v-icon will automatically change the cursor to a pointer.`)" />
              </KaText>
              <!-- Sample Colors -->
              <KaContainer code="container-4">
                <!-- Conteneur haut -->
                <KaContainer code="container-5">
                  <KaIcon
                    code="reverse-color-2"
                    :options="{
                      tooltip: { content: t('icon.page.sousPage.exemple.proprietes.valeurs.container4.container5.reverseColor2.tooltip', `Invert example colors`) },
                      click: page.reverseColor2Click,
                      $state: { selected: page.$data.reverseColor2 === true }
                    }"
                    :selected="{ click: page.reverseColor2ClickWhenSelected }"
                    :value="page.$data.reverseColor2 === false ? 'i-fa-solid:sun' : 'i-fa-solid:moon'" />
                  <KaIcon
                    code="code-preview-2"
                    :options="{
                      click: page.codePreview2Click,
                      $state: { selected: page.$data.previewCode === true }
                    }"
                    :selected="{ click: page.codePreview2ClickWhenSelected }"
                    value="i-fa-solid:code" />
                </KaContainer>
                <KaCodePreview
                  code="code-preview-2"
                  :options="{
                    hidden: page.$data.previewCode === true ? false : true,
                    elementToPreview: `v732xtDAw7QivSw3i4nbVN`
                  }"
                  value="https://www.kapix.fr" />
                <!-- Conteneur - Bas -->
                <KaContainer
                  code="conteneur-bas"
                  :options="{
                    style: {
                      color: `$invert`,
                      innerBackgroundColor: page.$data.reverseColor === false ? {
                        Angle: 90,
                        Colors: [`#ffffffff`]
                      } : {
                        Angle: 90,
                        Colors: [`#000000ff`]
                      }
                    }
                  }">
                  <!-- Content -->
                  <KaContainer
                    code="content"
                    :options="{
                      style: {
                        color: `$invert`,
                        backgroundColor: page.$data.reverseColor2 === false ? {
                          Angle: 90,
                          Colors: [`#ffffffff`]
                        } : {
                          Angle: 90,
                          Colors: [`#1E1D1DFF`]
                        }
                      }
                    }">
                    <!-- Barre haut -->
                    <KaContainer code="barre-haut">
                      <KaText code="text-5">
                        <span v-html="t('icon.page.sousPage.exemple.proprietes.valeurs.container4.conteneurBas.content.barreHaut.text5.value', `Upcoming Changes`)" />
                      </KaText>
                    </KaContainer>
                    <!-- Bas -->
                    <KaContainer code="bas">
                      <KaText code="text-6">
                        <span v-html="t('icon.page.sousPage.exemple.proprietes.valeurs.container4.conteneurBas.content.bas.text6.value', `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`)" />
                      </KaText>
                      <KaIcon
                        code="icon-3"
                        value="i-fa-solid:angle-right"
                        inner />
                    </KaContainer>
                  </KaContainer>
                </KaContainer>
              </KaContainer>
            </KaContainer>
            <!-- Valeurs -->
            <KaContainer code="container-6">
              <KaText code="misc">
                <h4 v-html="t('icon.page.sousPage.exemple.proprietes.container6.misc.value', `Misc`)" />
              </KaText>
              <KaText code="buttons">
                <h4 v-html="t('icon.page.sousPage.exemple.proprietes.container6.buttons.value', `Buttons`)" />
              </KaText>
              <KaText code="icons-can-be-used-inside">
                <span v-html="t('icon.page.sousPage.exemple.proprietes.container6.iconsCanBeUsedInside.value', `Icons can be used inside of buttons to add emphasis to the action.`)" />
              </KaText>
              <!-- Sample Colors -->
              <KaContainer code="container-7">
                <!-- Conteneur haut -->
                <KaContainer code="container-8">
                  <KaIcon
                    code="icon-4"
                    :options="{
                      tooltip: { content: t('icon.page.sousPage.exemple.proprietes.container6.container7.container8.icon4.tooltip', `Invert example colors`) },
                      click: page.icon4Click,
                      $state: { selected: page.$data.reverseColor3Copy === true }
                    }"
                    :selected="{ click: page.icon4ClickWhenSelected }"
                    :value="page.$data.reverseColor3Copy === false ? 'i-fa-solid:sun' : 'i-fa-solid:moon'" />
                  <KaIcon
                    code="icon-5"
                    :options="{
                      click: page.icon5Click,
                      $state: { selected: page.$data.codePreview2Copy === true }
                    }"
                    :selected="{ click: page.icon5ClickWhenSelected }"
                    value="i-fa-solid:code" />
                </KaContainer>
                <KaCodePreview
                  code="code-preview-3"
                  :options="{
                    hidden: page.$data.codePreview2Copy === true ? false : true,
                    elementToPreview: `ibnVh9GWFjDjU7uw9gtU8S`
                  }"
                  value="https://www.kapix.fr" />
                <!-- Première ligne -->
                <KaContainer
                  code="premiere-ligne"
                  :options="{
                    style: {
                      color: `$invert`,
                      innerBackgroundColor: page.$data.reverseColor3Copy === false ? {
                        Angle: 90,
                        Colors: [`#ffffffff`]
                      } : {
                        Angle: 90,
                        Colors: [`#2C2929FF`]
                      }
                    }
                  }">
                  <!-- Premère ligne -->
                  <KaContainer code="premere-ligne">
                    <!-- 1 -->
                    <KaContainer code="k-1">
                      <KaText code="accept">
                        <span v-html="t('icon.page.sousPage.exemple.proprietes.container6.container7.premiereLigne.premereLigne.k1.accept.value', `ACCEPT`)" />
                      </KaText>
                      <KaIcon
                        code="icon-6"
                        value="i-fa-solid:check-circle" />
                    </KaContainer>
                    <!-- 2 -->
                    <KaContainer code="k-2">
                      <KaText code="decline">
                        <span v-html="t('icon.page.sousPage.exemple.proprietes.container6.container7.premiereLigne.premereLigne.k2.decline.value', `DECLINE`)" />
                      </KaText>
                      <KaIcon
                        code="icon-7"
                        value="i-fa-solid:ban" />
                    </KaContainer>
                    <!-- 3 -->
                    <KaContainer code="k-3">
                      <KaIcon
                        code="icon-8"
                        value="i-fa-solid:minus-circle" />
                      <KaText code="cancel">
                        <span v-html="t('icon.page.sousPage.exemple.proprietes.container6.container7.premiereLigne.premereLigne.k3.cancel.value', `CANCEL`)" />
                      </KaText>
                    </KaContainer>
                  </KaContainer>
                  <!-- Deuxième ligne -->
                  <KaContainer code="deuxieme-ligne">
                    <!-- 1 -->
                    <KaContainer code="container-9">
                      <KaIcon
                        code="icon-9"
                        value="i-fa-solid:arrow-left" />
                      <KaText code="back">
                        <span v-html="t('icon.page.sousPage.exemple.proprietes.container6.container7.premiereLigne.deuxiemeLigne.container9.back.value', `BACK`)" />
                      </KaText>
                    </KaContainer>
                    <KaIcon
                      code="icon-10"
                      value="i-fa-solid:tools" />
                    <KaIcon
                      code="icon-11"
                      value="i-fa-solid:cloud-upload-alt" />
                  </KaContainer>
                  <!-- 3è ligne -->
                  <KaContainer code="k-3-e-ligne">
                    <KaIcon
                      code="icon-12"
                      value="i-fa-solid:thumbs-up" />
                    <KaIcon
                      code="icon-13"
                      value="i-fa-solid:thumbs-down" />
                  </KaContainer>
                </KaContainer>
              </KaContainer>
            </KaContainer>
            <!-- Font -->
            <KaContainer code="font">
              <KaText code="font-awesome">
                <span v-html="t('icon.page.sousPage.exemple.proprietes.font.fontAwesome.value', `Font awesome`)" />
              </KaText>
              <KaText code="font-awesome-is-also">
                <span v-html="t('icon.page.sousPage.exemple.proprietes.font.fontAwesomeIsAlso.value', `<a href='https://fontawesome.com/icons/'>Font Awesome</a> is also supported. Simply use the fa- prefixed icon name. Please note that you still need to include the Font Awesome icons in your project. For more information on how to install it, please navigate to the <a href='https://v2.vuetifyjs.com/en/features/icon-fonts/#install-font-awesome-5-icons'>installation page</a>`)" />
              </KaText>
              <!-- Global -->
              <KaContainer code="global">
                <!-- Haut -->
                <KaContainer code="haut">
                  <KaIcon
                    code="icon-14"
                    :options="{
                      click: page.icon14Click,
                      $state: { selected: page.$data.reverseColor4 === true }
                    }"
                    :selected="{ click: page.icon14ClickWhenSelected }"
                    :value="page.$data.reverseColor4 === false ? 'i-fa-solid:sun' : 'i-fa-solid:moon'" />
                  <KaIcon
                    code="code"
                    :options="{
                      click: page.codeClick,
                      $state: { selected: page.$data.previewCode3 === true }
                    }"
                    :selected="{ click: page.codeClickWhenSelected }"
                    value="i-fa-solid:code" />
                </KaContainer>
                <KaCodePreview
                  code="code-preview-4"
                  :options="{
                    hidden: page.$data.previewCode3 === true ? false : null,
                    elementToPreview: `nAFQR5Dt8otEVYm131mnhk`
                  }"
                  value="https://www.kapix.fr" />
                <!-- Bas -->
                <KaContainer
                  code="container-10"
                  :options="{
                    style: {
                      color: `$invert`,
                      innerBackgroundColor: page.$data.reverseColor4 === false ? {
                        Angle: 90,
                        Colors: [`#ffffffff`]
                      } : {
                        Angle: 90,
                        Colors: [`#000000ff`]
                      }
                    }
                  }">
                  <KaIcon
                    code="lock"
                    value="i-fa-solid:lock" />
                  <KaIcon
                    code="look"
                    value="i-fa-solid:search" />
                  <KaIcon
                    code="bars"
                    value="i-fa-solid:bars" />
                  <KaIcon
                    code="edit"
                    value="i-fa-solid:edit" />
                  <KaIcon
                    code="refresh"
                    value="i-fa-solid:history" />
                  <KaIcon
                    code="circle"
                    value="i-fa-solid:circle-notch" />
                </KaContainer>
              </KaContainer>
            </KaContainer>
            <!-- Material -->
            <KaContainer code="material">
              <KaText code="material-design">
                <span v-html="t('icon.page.sousPage.exemple.proprietes.material.materialDesign.value', `Material Design`)" />
              </KaText>
              <KaText code="material-design-is">
                <span v-html="t('icon.page.sousPage.exemple.proprietes.material.materialDesignIs.value', `<a href='https://material.io/tools/icons/?style=baseline'>Material Design</a> is also supported. For more information on how to install it please <a href='https://v2.vuetifyjs.com/en/features/icon-fonts/#install-material-icons'>navigate here</a>`)" />
              </KaText>
              <!-- Global -->
              <KaContainer code="container-11">
                <!-- Haut -->
                <KaContainer code="container-12">
                  <KaIcon
                    code="icon-15"
                    :options="{
                      click: page.icon15Click,
                      $state: { selected: page.$data.reverseColor5 === true }
                    }"
                    :selected="{ click: page.icon15ClickWhenSelected }"
                    :value="page.$data.reverseColor5 === false ? 'i-fa-solid:sun' : 'i-fa-solid:moon'" />
                  <KaIcon
                    code="icon-16"
                    :options="{
                      click: page.icon16Click,
                      $state: { selected: page.$data.previewCode4 === true }
                    }"
                    :selected="{ click: page.icon16ClickWhenSelected }"
                    value="i-fa-solid:code" />
                </KaContainer>
                <KaCodePreview
                  code="code-preview-5"
                  :options="{
                    hidden: page.$data.previewCode4 === true ? false : null,
                    elementToPreview: `goduaXwKPivxZKZNHexyem`
                  }"
                  value="https://www.kapix.fr" />
                <!-- Bas -->
                <KaContainer
                  code="container-13"
                  :options="{
                    style: {
                      color: `$invert`,
                      innerBackgroundColor: page.$data.reverseColor5 === false ? {
                        Angle: 90,
                        Colors: [`#ffffffff`]
                      } : {
                        Angle: 90,
                        Colors: [`#000000ff`]
                      }
                    }
                  }">
                  <!-- Container -->
                  <KaContainer code="container-14">
                    <!-- Container -->
                    <KaContainer code="container-15">
                      <KaIcon
                        code="home"
                        value="i-fa-solid:home" />
                      <KaIcon
                        code="calendar"
                        value="i-fa-solid:calendar-day" />
                      <KaIcon
                        code="info"
                        value="i-fa-solid:info-circle" />
                    </KaContainer>
                    <!-- Container -->
                    <KaContainer code="container-16">
                      <KaIcon
                        code="icon-17"
                        value="i-fa-solid:home" />
                      <KaIcon
                        code="icon-18"
                        value="i-fa-solid:calendar-day" />
                      <KaIcon
                        code="icon-19"
                        value="i-fa-solid:info-circle" />
                    </KaContainer>
                  </KaContainer>
                  <!-- Container -->
                  <KaContainer code="container-17">
                    <!-- Container -->
                    <KaContainer code="container-18">
                      <KaIcon
                        code="icon-20"
                        value="i-fa-solid:home" />
                      <KaIcon
                        code="icon-21"
                        value="i-fa-solid:calendar-day" />
                      <KaIcon
                        code="icon-22"
                        value="i-fa-solid:info-circle" />
                    </KaContainer>
                    <!-- Container -->
                    <KaContainer code="container-19">
                      <KaIcon
                        code="icon-23"
                        value="i-fa-solid:home" />
                      <KaIcon
                        code="icon-24"
                        value="i-fa-solid:calendar-day" />
                      <KaIcon
                        code="icon-25"
                        value="i-fa-solid:info-circle" />
                    </KaContainer>
                  </KaContainer>
                  <!-- Container -->
                  <KaContainer code="container-20">
                    <!-- Container -->
                    <KaContainer code="container-21">
                      <KaIcon
                        code="icon-26"
                        value="i-fa-solid:home" />
                      <KaIcon
                        code="icon-27"
                        value="i-fa-solid:calendar-day" />
                      <KaIcon
                        code="icon-28"
                        value="i-fa-solid:info-circle" />
                    </KaContainer>
                    <!-- Container -->
                    <KaContainer code="container-22">
                      <KaIcon
                        code="icon-29"
                        value="i-fa-solid:home" />
                      <KaIcon
                        code="icon-30"
                        value="i-fa-solid:calendar-day" />
                      <KaIcon
                        code="icon-31"
                        value="i-fa-solid:info-circle" />
                    </KaContainer>
                  </KaContainer>
                  <!-- Container -->
                  <KaContainer code="container-23">
                    <!-- Container -->
                    <KaContainer code="container-24">
                      <KaIcon
                        code="icon-32"
                        value="i-fa-solid:home" />
                      <KaIcon
                        code="icon-33"
                        value="i-fa-solid:calendar-day" />
                      <KaIcon
                        code="icon-34"
                        value="i-fa-solid:info-circle" />
                    </KaContainer>
                    <!-- Container -->
                    <KaContainer code="container-25">
                      <KaIcon
                        code="icon-35"
                        value="i-fa-solid:home" />
                      <KaIcon
                        code="icon-36"
                        value="i-fa-solid:calendar-day" />
                      <KaIcon
                        code="icon-37"
                        value="i-fa-solid:info-circle" />
                    </KaContainer>
                  </KaContainer>
                </KaContainer>
              </KaContainer>
            </KaContainer>
            <!-- MDI -->
            <KaContainer code="mdi">
              <KaText code="mdi-svg">
                <span v-html="t('icon.page.sousPage.exemple.proprietes.mdi.mdiSvg.value', `MDI SVG`)" />
              </KaText>
              <KaText code="text-7">
                <span v-html="t('icon.page.sousPage.exemple.proprietes.mdi.text7.value', `You can manually import only the icons you use when using the <a href='https://www.npmjs.com/package/&#64;mdi/js'>&#64;mdi/js</a> package. If you want to use SVG icons with VIcon component, read about using them <a href='https://v2.vuetifyjs.com/en/features/icon-fonts/#install-material-design-icons-js-svg'>here</a>.`)" />
              </KaText>
              <!-- Global -->
              <KaContainer code="container-26">
                <!-- Haut -->
                <KaContainer code="container-27">
                  <KaIcon
                    code="icon-38"
                    :options="{
                      click: page.icon38Click,
                      $state: { selected: page.$data.reverseColor6 === true }
                    }"
                    :selected="{ click: page.icon38ClickWhenSelected }"
                    :value="page.$data.reverseColor6 === false ? 'i-fa-solid:sun' : 'i-fa-solid:moon'" />
                  <KaIcon
                    code="icon-39"
                    :options="{
                      click: page.icon39Click,
                      $state: { selected: page.$data.previewCode5 === true }
                    }"
                    :selected="{ click: page.icon39ClickWhenSelected }"
                    value="i-fa-solid:code" />
                </KaContainer>
                <KaCodePreview
                  code="code-preview-6"
                  :options="{
                    hidden: page.$data.previewCode5 === true ? false : null,
                    elementToPreview: `65NXqQKAvmsUpauGEjG5Jr`
                  }"
                  value="https://www.kapix.fr" />
                <!-- Bas -->
                <KaContainer
                  code="container-28"
                  :options="{
                    style: {
                      color: `$invert`,
                      innerBackgroundColor: page.$data.reverseColor6 === false ? {
                        Angle: 90,
                        Colors: [`#ffffffff`]
                      } : {
                        Angle: 90,
                        Colors: [`#000000ff`]
                      }
                    }
                  }">
                  <KaIcon
                    code="people"
                    value="i-fa-solid:user" />
                  <KaIcon
                    code="pencil"
                    value="i-fa-solid:pen" />
                  <KaIcon
                    code="share"
                    value="i-fa-solid:share-alt" />
                  <!-- Bouton -->
                  <KaContainer code="bouton">
                    <KaIcon
                      code="trash"
                      value="i-fa-solid:trash-alt" />
                    <KaText code="delete">
                      <span v-html="t('icon.page.sousPage.exemple.proprietes.mdi.container26.container28.bouton.delete.value', `Delete`)" />
                    </KaText>
                  </KaContainer>
                </KaContainer>
              </KaContainer>
            </KaContainer>
          </KaContainer>
        </KaContainer>
        <!-- Accessibility -->
        <KaContainer code="accessibility">
          <KaText
            code="h-2-1"
            :options="{
              style: {
                color: appData.theme.fontColor2,
                fontFamily: appData.theme.fontFamily2
              }
            }">
            <h2 v-html="t('icon.page.sousPage.accessibility.h21.value', `Accessibility`)" />
          </KaText>
          <KaText code="icons-can-convey-all">
            <span v-html="t('icon.page.sousPage.accessibility.iconsCanConveyAll.value', `<p style='margin-left:0px;'>Icons can convey all sorts of meaningful information, so it’s important that they reach the largest amount of people possible. There are two use cases you’ll want to consider:</p><p style='margin-left:40px;'><strong>Decorative Icons</strong> are only being used for visual or branding reinforcement. If they were removed from the page, users would still understand and be able to use your page.</p><p style='margin-left:40px;'><strong>Semantic Icons</strong> are ones that you’re using to convey meaning, rather than just pure decoration. This includes icons without text next to them used as interactive controls — buttons, form elements, toggles, etc.</p>`)" />
          </KaText>
          <KaText
            code="decorative-font-icons"
            :options="{
              style: {
                color: appData.theme.fontColor2,
                fontFamily: appData.theme.fontFamily2
              }
            }">
            <h3 v-html="t('icon.page.sousPage.accessibility.decorativeFontIcons.value', `Decorative Font Icons`)" />
          </KaText>
          <KaText code="if-your-icons-are-purely">
            <span v-html="t('icon.page.sousPage.accessibility.ifYourIconsArePurely.value', `If your icons are purely decorative, you’ll need to manually add an attribute to each of your icons so they’re accessible.aria-hidden(automatically by vuetify)`)" />
          </KaText>
          <KaText
            code="semantic-font-icons"
            :options="{
              style: {
                color: appData.theme.fontColor2,
                fontFamily: appData.theme.fontFamily2
              }
            }">
            <h3 v-html="t('icon.page.sousPage.accessibility.semanticFontIcons.value', `Semantic Font Icons`)" />
          </KaText>
          <KaText code="if-your-icons-have">
            <span v-html="t('icon.page.sousPage.accessibility.ifYourIconsHave.value', `If your icons have semantic meaning, you need to provide a text alternative inside a (or similar) element. Also include appropriate CSS to visually hide the element while keeping it accessible to assistive technologies.`)" />
          </KaText>
          <KaText
            code="decorative-svg-icons"
            :options="{
              style: {
                color: appData.theme.fontColor2,
                fontFamily: appData.theme.fontFamily2
              }
            }">
            <h3 v-html="t('icon.page.sousPage.accessibility.decorativeSvgIcons.value', `Decorative SVG Icons`)" />
          </KaText>
          <KaText code="text-8">
            <span v-html="t('icon.page.sousPage.accessibility.text8.value', `If your icons are purely decorative, you’ll need to manually add an attribute to each of your icons so they’re accessible.aria-hidden(automatically by vuetify)`)" />
          </KaText>
          <KaText
            code="semantic-svg-icons"
            :options="{
              style: {
                color: appData.theme.fontColor2,
                fontFamily: appData.theme.fontFamily2
              }
            }">
            <h3 v-html="t('icon.page.sousPage.accessibility.semanticSvgIcons.value', `Semantic SVG Icons`)" />
          </KaText>
          <KaText code="apply-accessibility">
            <span v-html="t('icon.page.sousPage.accessibility.applyAccessibility.value', page.$constants.applyAccessibility)" />
          </KaText>
        </KaContainer>
        <!-- Ready -->
        <KaContainer code="ready">
          <KaText
            code="h-2-2"
            :options="{
              style: {
                color: appData.theme.fontColor2,
                fontFamily: appData.theme.fontFamily2
              }
            }">
            <h2 v-html="t('icon.page.sousPage.ready.h22.value', `Ready for more?`)" />
          </KaText>
          <KaText code="continue-your-learning">
            <span v-html="t('icon.page.sousPage.ready.continueYourLearning.value', `Continue your learning with related content selected by the <a href='https://v2.vuetifyjs.com/en/about/meet-the-team/'>Team</a> or move between pages by using the navigation links below.`)" />
          </KaText>
          <!-- Global -->
          <KaContainer code="container-29">
            <!-- Gauche -->
            <KaContainer code="gauche">
              <KaIcon
                code="icon-40"
                value="i-fa-solid:edit" />
              <!-- Droite -->
              <KaContainer code="droite">
                <KaText code="icon-fonts">
                  <span v-html="t('icon.page.sousPage.ready.container29.gauche.droite.iconFonts.value', `Icon Fonts`)" />
                </KaText>
                <KaText code="features">
                  <span v-html="t('icon.page.sousPage.ready.container29.gauche.droite.features.value', `Features`)" />
                </KaText>
              </KaContainer>
            </KaContainer>
            <!-- Milieu -->
            <KaContainer code="milieu">
              <KaIcon
                code="colonne"
                value="i-fa-brands:trello" />
              <!-- Droite -->
              <KaContainer code="container-30">
                <KaText code="text-9">
                  <span v-html="t('icon.page.sousPage.ready.container29.milieu.container30.text9.value', `Buttons`)" />
                </KaText>
                <KaText code="components">
                  <span v-html="t('icon.page.sousPage.ready.container29.milieu.container30.components.value', `Components`)" />
                </KaText>
              </KaContainer>
            </KaContainer>
            <!-- Droite -->
            <KaContainer code="container-31">
              <KaIcon
                code="button"
                value="i-fa-solid:grip-vertical" />
              <!-- Droite@ -->
              <KaContainer code="container-32">
                <KaText code="cards">
                  <span v-html="t('icon.page.sousPage.ready.container29.container31.container32.cards.value', `Cards`)" />
                </KaText>
                <KaText code="text-10">
                  <span v-html="t('icon.page.sousPage.ready.container29.container31.container32.text10.value', `Components`)" />
                </KaText>
              </KaContainer>
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
        <KaContainer code="container-33">
          <KaText code="contenu">
            <span v-html="t('icon.rightPanel.sousNav.container33.contenu.value', `Contenu`)" />
          </KaText>
        </KaContainer>
        <!-- Container 1 -->
        <KaContainer code="container-34">
          <KaText
            code="text-11"
            :options="{
              href: { hash: `#usage-p6` },
              ariaLabel: `titre`,
              click: page.text11Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('icon.rightPanel.sousNav.container34.text11.value', `Utilisation`)" />
          </KaText>
          <KaText
            code="text-12"
            :options="{
              href: undefined,
              ariaLabel: `titre`,
              click: page.text12Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('icon.rightPanel.sousNav.container34.text12.value', `API`)" />
          </KaText>
          <KaText
            code="text-13"
            :options="{
              href: { hash: `#exemple-p6` },
              ariaLabel: `titre`,
              click: page.text13Click
            }"
            :selected="{ style: { borderColor: appData.theme.primaryColor } }">
            <span v-html="t('icon.rightPanel.sousNav.container34.text13.value', `Exemples`)" />
          </KaText>
          <!-- sous-categorie -->
          <KaContainer code="sous-categorie">
            <KaText
              code="sous-titre"
              :options="{
                href: { hash: `#proprietes-p6` },
                ariaLabel: `sous titre`,
                click: page.sousTitreClick
              }"
              :selected="{ style: { borderColor: appData.theme.primaryColor } }">
              <span v-html="t('icon.rightPanel.sousNav.container34.sousCategorie.sousTitre.value', `Propriétés`)" />
            </KaText>
            <!-- sous-sous-categorie -->
            <KaContainer code="sous-sous-categorie">
              <KaText
                code="text-14"
                :options="{
                  href: { hash: `#couleurs-p6` },
                  ariaLabel: `sous titre`,
                  click: page.text14Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('icon.rightPanel.sousNav.container34.sousCategorie.sousSousCategorie.text14.value', `Couleurs`)" />
              </KaText>
              <KaText
                code="text-15"
                :options="{
                  href: { hash: `#valeurs-p6` },
                  ariaLabel: `sous titre`,
                  click: page.text15Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('icon.rightPanel.sousNav.container34.sousCategorie.sousSousCategorie.text15.value', `Valeurs`)" />
              </KaText>
              <KaText
                code="text-16"
                :options="{
                  href: undefined,
                  ariaLabel: `sous titre`,
                  click: page.text16Click
                }"
                :selected="{ style: { borderColor: appData.theme.primaryColor } }">
                <span v-html="t('icon.rightPanel.sousNav.container34.sousCategorie.sousSousCategorie.text16.value', `Etats`)" />
              </KaText>
            </KaContainer>
          </KaContainer>
        </KaContainer>
      </KaContainer>
    </KaContainer>
    <KapixTeleport :disabled="!$breakpoint.mdAndUp">
      <KaIcon
        code="icon-41"
        :options="{
          animationIn: `fadeInUp`,
          animationOut: `fadeOutDown`,
          click: page.icon41Click,
          hidden: page.$info.icon.scrollTop > 0 ? false : null
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
import { headerWithLeftSidebarIcon } from './store'
import { appDataStore } from '~/stores'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'HeaderWithLeftSidebarIcon'
})
provide('$scoped', '-p6')
const props = withDefaults(defineProps<{
  seo?: boolean
}>(), {
  seo: true
})
const appData = appDataStore()
const page = headerWithLeftSidebarIcon()
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
