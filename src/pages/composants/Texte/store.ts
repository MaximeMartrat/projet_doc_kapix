import type { WritableComputedRef } from 'vue'
import { remove } from 'lodash-es'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { initAliveStoreIds, kapixContext, navigateTo } from 'kapix-components-vue3'
import headerWithLeftSidebarTexteStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarTexte'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarTexteStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarTexteFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('texte.title', 'Texte'),
        $description: $translate('texte.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-07-13T08:19:05.684Z'),
        // Constants,
        $constants: {},
        // Data,
        $inputs: {
          textArea: undefined as Nullable<string>,
          textArea1: undefined as Nullable<string>,
          textArea2: undefined as Nullable<string>,
          thisIsClearableText: 'This is clearable text.',
          textArea3: undefined as Nullable<string>,
          textArea4: undefined as Nullable<string>,
          textArea5: undefined as Nullable<string>,
          textArea6: undefined as Nullable<string>,
          textArea7: undefined as Nullable<string>,
          textArea8: undefined as Nullable<string>,
          textArea9: undefined as Nullable<string>,
          textArea10: undefined as Nullable<string>
        },
        $info: { texte: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your file */
      textArea (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.textArea,
          set: (value) => {
            this.$inputs.textArea = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      textArea1 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.textArea1,
          set: (value) => {
            this.$inputs.textArea1 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      textArea2 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.textArea2,
          set: (value) => {
            this.$inputs.textArea2 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      thisIsClearableText (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.thisIsClearableText,
          set: (value) => {
            this.$inputs.thisIsClearableText = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      textArea3 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.textArea3,
          set: (value) => {
            this.$inputs.textArea3 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      textArea4 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.textArea4,
          set: (value) => {
            this.$inputs.textArea4 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      textArea5 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.textArea5,
          set: (value) => {
            this.$inputs.textArea5 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      textArea6 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.textArea6,
          set: (value) => {
            this.$inputs.textArea6 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      textArea7 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.textArea7,
          set: (value) => {
            this.$inputs.textArea7 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      textArea8 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.textArea8,
          set: (value) => {
            this.$inputs.textArea8 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      textArea9 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.textArea9,
          set: (value) => {
            this.$inputs.textArea9 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      textArea10 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.textArea10,
          set: (value) => {
            this.$inputs.textArea10 = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your file */
      async titreClick () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your file */
      async text10Click () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your file */
      async text11Click () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your file */
      async sousTitreClick () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your file */
      async text12Click () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your file */
      async text13Click () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your file */
      async text14Click () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your file */
      async iconClick (event: KaElementClickEvent) {
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
  return headerWithLeftSidebarTexteFactory(storeId)()
}

export const headerWithLeftSidebarTexteRaw = headerWithLeftSidebarTexteFactory()
export const headerWithLeftSidebarTexte = () => headerWithLeftSidebarTexteRaw() as MergeCustomStore<typeof headerWithLeftSidebarTexteStoreCustom.instance>
