import type { WritableComputedRef } from 'vue'
import { remove } from 'lodash-es'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { initAliveStoreIds, kapixContext, navigateTo } from 'kapix-components-vue3'
import headerWithLeftSidebarIconStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarIcon'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarIconStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarIconFactory (storeId?: Nullable<StoreIdentifier>) {
  return defineStore(storeId == null ? storeName : `${storeName}/${storeId}`, {
    state: () => {
      return {
        $aliveStoreIds: aliveStoreIds,
        $subStoreIds: 1,
        $storeId: storeId,
        $emit: (() => {}) as (propName: any, value: any) => void,
        $elements: {} as KaElementMap,
        $router: kapixContext.isClient ? kapixContext.$router : undefined,
        $route: kapixContext.isClient ? kapixContext.$route : undefined,
        // Page info,
        $title: $translate('icon.title', 'Icon'),
        $description: $translate('icon.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-07-19T09:20:40.074Z'),
        // Constants,
        $constants: { applyAccessibility: 'Apply accessibility attributes to the <a href=\'https://v2.vuetifyjs.com/en/components/icons/\'>v-icon</a> component, such as role="img", to give it a semantic meaning.' },
        // Data,
        $data: {
          size: 'medium',
          color: 'default',
          icon: 'mdi-plus',
          reverseColor: false,
          previewCode: false,
          reverseColor2: false,
          reverseColor3Copy: false,
          codePreview2Copy: false,
          reverseColor4: false,
          previewCode3: false,
          reverseColor5: false,
          previewCode4: false,
          reverseColor6: false,
          previewCode5: false
        },
        $inputs: {
          size: undefined as Nullable<string>,
          color: undefined as Nullable<string>,
          selectInput1: undefined as Nullable<string>
        },
        $info: { icon: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your file */
      size (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$data.size,
          set: (value) => {
            this.$data.size = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      color (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$data.color,
          set: (value) => {
            this.$data.color = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      selectInput1 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$data.icon,
          set: (value) => {
            this.$data.icon = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your file */
      boutonDefaultClick () {
        this.$data.size = 'medium'
        this.$data.color = 'default'
        this.$data.icon = 'mdi-plus'
      },
      /* @ts-ignore: to allow override in your file */
      reverseColorClick () {
        this.$data.reverseColor = true
      },
      /* @ts-ignore: to allow override in your file */
      reverseColorClickWhenSelected () {
        this.$data.reverseColor = false
      },
      /* @ts-ignore: to allow override in your file */
      icon1Click () {
        this.$data.previewCode = true
      },
      /* @ts-ignore: to allow override in your file */
      icon1ClickWhenSelected () {
        this.$data.previewCode = false
      },
      /* @ts-ignore: to allow override in your file */
      reverseColor2Click () {
        this.$data.reverseColor2 = true
      },
      /* @ts-ignore: to allow override in your file */
      reverseColor2ClickWhenSelected () {
        this.$data.reverseColor2 = null
      },
      /* @ts-ignore: to allow override in your file */
      codePreview2Click () {
        this.$data.previewCode = true
      },
      /* @ts-ignore: to allow override in your file */
      codePreview2ClickWhenSelected () {
        this.$data.previewCode = false
      },
      /* @ts-ignore: to allow override in your file */
      icon4Click () {
        this.$data.reverseColor3Copy = true
      },
      /* @ts-ignore: to allow override in your file */
      icon4ClickWhenSelected () {
        this.$data.reverseColor3Copy = null
      },
      /* @ts-ignore: to allow override in your file */
      icon5Click () {
        this.$data.codePreview2Copy = true
      },
      /* @ts-ignore: to allow override in your file */
      icon5ClickWhenSelected () {
        this.$data.codePreview2Copy = false
      },
      /* @ts-ignore: to allow override in your file */
      icon14Click () {
        this.$data.reverseColor4 = true
      },
      /* @ts-ignore: to allow override in your file */
      icon14ClickWhenSelected () {
        this.$data.reverseColor4 = false
      },
      /* @ts-ignore: to allow override in your file */
      codeClick () {
        this.$data.previewCode3 = true
      },
      /* @ts-ignore: to allow override in your file */
      codeClickWhenSelected () {
        this.$data.previewCode3 = false
      },
      /* @ts-ignore: to allow override in your file */
      icon15Click () {
        this.$data.reverseColor5 = true
      },
      /* @ts-ignore: to allow override in your file */
      icon15ClickWhenSelected () {
        this.$data.reverseColor5 = null
      },
      /* @ts-ignore: to allow override in your file */
      icon16Click () {
        this.$data.previewCode4 = true
      },
      /* @ts-ignore: to allow override in your file */
      icon16ClickWhenSelected () {
        this.$data.previewCode4 = null
      },
      /* @ts-ignore: to allow override in your file */
      icon38Click () {
        this.$data.reverseColor6 = true
      },
      /* @ts-ignore: to allow override in your file */
      icon38ClickWhenSelected () {
        this.$data.reverseColor6 = null
      },
      /* @ts-ignore: to allow override in your file */
      icon39Click () {
        this.$data.previewCode5 = true
      },
      /* @ts-ignore: to allow override in your file */
      icon39ClickWhenSelected () {
        this.$data.previewCode5 = null
      },
      /* @ts-ignore: to allow override in your file */
      async text11Click () {
        await navigateTo({ hash: '#usage-p6' })
      },
      /* @ts-ignore: to allow override in your file */
      async text12Click () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your file */
      async text13Click () {
        await navigateTo({ hash: '#exemple-p6' })
      },
      /* @ts-ignore: to allow override in your file */
      async sousTitreClick () {
        await navigateTo({ hash: '#proprietes-p6' })
      },
      /* @ts-ignore: to allow override in your file */
      async text14Click () {
        await navigateTo({ hash: '#couleurs-p6' })
      },
      /* @ts-ignore: to allow override in your file */
      async text15Click () {
        await navigateTo({ hash: '#valeurs-p6' })
      },
      /* @ts-ignore: to allow override in your file */
      async text16Click () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your file */
      async icon41Click (event: KaElementClickEvent) {
        await event.vm?.scrollToStart()
      },
      /* @ts-ignore: to allow override in your file */
      getStoreInstance (storeId?: Nullable<StoreIdentifier>) {
        return storeId != null ? getStoreInstance(storeId) : this
      },
      /* @ts-ignore: to allow override in your file */
      getStoreInstances () {
        return aliveStoreIds.map(storeId => this.getStoreInstance(storeId))
      },
      /* @ts-ignore: to allow override in your file */
      newStoreInstance (storeId?: Nullable<StoreIdentifier>) {
        const newStoreId = storeId || this.$subStoreIds++
        if (aliveStoreIds.includes(newStoreId)) {
          throw new Error(`Store with id ${storeId} already exists`)
        }
        aliveStoreIds.push(newStoreId)
        return getStoreInstance(newStoreId)
      },
      ...customImplement.actions,
      /* @ts-ignore: to allow override in your file */
      beforeMount () {
        customImplement.actions?.beforeMount?.call(this)
      },
      /* @ts-ignore: to allow override in your file */
      mounted () {
        customImplement.actions?.mounted?.call(this)
      },
      /* @ts-ignore: to allow override in your file */
      serverPrefetch () {
        customImplement.actions?.serverPrefetch?.call(this)
      },
      /* @ts-ignore: to allow override in your file */
      beforeUnmount () {
        customImplement.actions?.beforeUnmount?.call(this)
      },
      /* @ts-ignore: to allow override in your file */
      unmounted () {
        if (this.$storeId != null) {
          this.$dispose()
          remove(aliveStoreIds, this.$storeId)
        }
        customImplement.actions?.unmounted?.call(this)
      }
    }
  })
}

function getStoreInstance (storeId?: Nullable<StoreIdentifier>) {
  return headerWithLeftSidebarIconFactory(storeId)()
}

export const headerWithLeftSidebarIconRaw = headerWithLeftSidebarIconFactory()
export const headerWithLeftSidebarIcon = () => headerWithLeftSidebarIconRaw() as MergeCustomStore<typeof headerWithLeftSidebarIconStoreCustom.instance>
