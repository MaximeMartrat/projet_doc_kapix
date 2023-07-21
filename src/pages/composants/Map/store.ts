import type { WritableComputedRef } from 'vue'
import { remove } from 'lodash-es'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { initAliveStoreIds, kapixContext, navigateTo } from 'kapix-components-vue3'
import headerWithLeftSidebarMapStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarMap'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarMapStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarMapFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('map.title', 'Map'),
        $description: $translate('map.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-07-12T16:43:07.084Z'),
        // Constants,
        $constants: {
          zoom118Value: -1,
          zoom118Value1: 1,
          minZoomValue: -1,
          minZoomValue1: 1,
          maxZoomValue: -1,
          maxZoomValue1: 1
        },
        // Data,
        $data: {
          zoom118: 13,
          minZoom: 3,
          maxZoom: 18
        },
        $inputs: {
          leaflet1: undefined as Nullable<KeyValuePair>,
          zoom118: undefined as Nullable<number>,
          minZoom: undefined as Nullable<number>,
          maxZoom: undefined as Nullable<number>,
          leaflet2: undefined as Nullable<KeyValuePair>,
          number1: undefined as Nullable<number>,
          number2: undefined as Nullable<number>,
          number3: undefined as Nullable<number>,
          leaflet3: undefined as Nullable<KeyValuePair>
        },
        $info: {
          map: { scrollTop: 0 },
          leaflet1: { zoom: undefined as Nullable<number> },
          leaflet2: { zoom: undefined as Nullable<number> },
          leaflet3: { zoom: undefined as Nullable<number> }
        },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your file */
      leaflet1 (): WritableComputedRef<Nullable<KeyValuePair>> {
        return computed({
          get: () => this.$inputs.leaflet1,
          set: (value) => {
            this.$inputs.leaflet1 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      zoom118 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$data.zoom118,
          set: (value) => {
            this.$data.zoom118 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      minZoom (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$data.minZoom,
          set: (value) => {
            this.$data.minZoom = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      maxZoom (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$data.maxZoom,
          set: (value) => {
            this.$data.maxZoom = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      leaflet2 (): WritableComputedRef<Nullable<KeyValuePair>> {
        return computed({
          get: () => this.$inputs.leaflet2,
          set: (value) => {
            this.$inputs.leaflet2 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      number1 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$data.zoom118,
          set: (value) => {
            this.$data.zoom118 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      number2 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$data.minZoom,
          set: (value) => {
            this.$data.minZoom = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      number3 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$data.maxZoom,
          set: (value) => {
            this.$data.maxZoom = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      leaflet3 (): WritableComputedRef<Nullable<KeyValuePair>> {
        return computed({
          get: () => this.$inputs.leaflet3,
          set: (value) => {
            this.$inputs.leaflet3 = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your file */
      minusClick () {
        this.$elements['zoom-118'].value += this.$constants.zoom118Value
      },
      /* @ts-ignore: to allow override in your file */
      plusClick () {
        this.$elements['zoom-118'].value += this.$constants.zoom118Value1
      },
      /* @ts-ignore: to allow override in your file */
      icon1Click () {
        this.$elements['min-zoom'].value += this.$constants.minZoomValue
      },
      /* @ts-ignore: to allow override in your file */
      icon2Click () {
        this.$elements['min-zoom'].value += this.$constants.minZoomValue1
      },
      /* @ts-ignore: to allow override in your file */
      icon3Click () {
        this.$elements['max-zoom'].value += this.$constants.maxZoomValue
      },
      /* @ts-ignore: to allow override in your file */
      icon4Click () {
        this.$elements['max-zoom'].value += this.$constants.maxZoomValue1
      },
      /* @ts-ignore: to allow override in your file */
      icon5Click () {
        this.$elements['number-1'].value += this.$constants.zoom118Value
      },
      /* @ts-ignore: to allow override in your file */
      icon6Click () {
        this.$elements['number-1'].value += this.$constants.zoom118Value1
      },
      /* @ts-ignore: to allow override in your file */
      icon7Click () {
        this.$elements['number-2'].value += this.$constants.minZoomValue
      },
      /* @ts-ignore: to allow override in your file */
      icon8Click () {
        this.$elements['number-2'].value += this.$constants.minZoomValue1
      },
      /* @ts-ignore: to allow override in your file */
      icon9Click () {
        this.$elements['number-3'].value += this.$constants.maxZoomValue
      },
      /* @ts-ignore: to allow override in your file */
      icon10Click () {
        this.$elements['number-3'].value += this.$constants.maxZoomValue1
      },
      /* @ts-ignore: to allow override in your file */
      async text4Click () {
        await navigateTo({ hash: '#utilisation-p12' })
      },
      /* @ts-ignore: to allow override in your file */
      async text5Click () {
        await navigateTo({ hash: '#api-p12' })
      },
      /* @ts-ignore: to allow override in your file */
      async text6Click () {
        await navigateTo({ hash: '#example-p12' })
      },
      /* @ts-ignore: to allow override in your file */
      async sousTitreClick () {
        await navigateTo({ hash: '#props-p12' })
      },
      /* @ts-ignore: to allow override in your file */
      async text7Click () {
        await navigateTo({ hash: '#mandatory-p12' })
      },
      /* @ts-ignore: to allow override in your file */
      async text8Click () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your file */
      async text9Click () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your file */
      async icon11Click (event: KaElementClickEvent) {
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
  return headerWithLeftSidebarMapFactory(storeId)()
}

export const headerWithLeftSidebarMapRaw = headerWithLeftSidebarMapFactory()
export const headerWithLeftSidebarMap = () => headerWithLeftSidebarMapRaw() as MergeCustomStore<typeof headerWithLeftSidebarMapStoreCustom.instance>
