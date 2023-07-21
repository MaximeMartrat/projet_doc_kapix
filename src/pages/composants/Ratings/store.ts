import type { WritableComputedRef } from 'vue'
import { remove } from 'lodash-es'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { $first, initAliveStoreIds, kapixContext, navigateTo } from 'kapix-components-vue3'
import headerWithLeftSidebarRatingsStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarRatings'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarRatingsStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarRatingsFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('ratings.title', 'Ratings'),
        $description: $translate('ratings.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-07-20T10:46:49.751Z'),
        // Constants,
        $constants: {},
        // Data,
        $data: {
          half: false,
          color: '',
          size: 24,
          length: 5,
          customLength: 5,
          rating: 0
        },
        $inputs: {
          evaluationAvecEtoiles: 3,
          caseACocherOui: undefined as Nullable<boolean>,
          curseur: undefined as Nullable<number>,
          slider1: undefined as Nullable<number>,
          checkbox1: false,
          caseACocherOui1: undefined as Nullable<boolean>,
          caseACocherOui2: undefined as Nullable<boolean>,
          caseACocherOui4: undefined as Nullable<boolean>,
          caseACocherOui5: undefined as Nullable<boolean>,
          rating1: undefined as Nullable<number>,
          slider2: undefined as Nullable<number>,
          rating2: undefined as Nullable<number>,
          rating3: undefined as Nullable<number>,
          rating4: 4,
          rating5: 4,
          rating6: 4,
          rating7: 4,
          rating8: undefined as Nullable<number>,
          slider3: undefined as Nullable<number>
        },
        $info: { ratings: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your file */
      evaluationAvecEtoiles (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.evaluationAvecEtoiles,
          set: (value) => {
            this.$inputs.evaluationAvecEtoiles = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      caseACocherOui (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$data.half,
          set: (value) => {
            this.$data.half = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      curseur (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$data.size,
          set: (value) => {
            this.$data.size = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      slider1 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$data.length,
          set: (value) => {
            this.$data.length = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      checkbox1 (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.checkbox1,
          set: (value) => {
            this.$inputs.checkbox1 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      caseACocherOui1 (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.caseACocherOui1,
          set: (value) => {
            this.$inputs.caseACocherOui1 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      caseACocherOui2 (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.caseACocherOui2,
          set: (value) => {
            this.$inputs.caseACocherOui2 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      caseACocherOui4 (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.caseACocherOui4,
          set: (value) => {
            this.$inputs.caseACocherOui4 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      caseACocherOui5 (): WritableComputedRef<Nullable<boolean>> {
        return computed({
          get: () => this.$inputs.caseACocherOui5,
          set: (value) => {
            this.$inputs.caseACocherOui5 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      rating1 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.rating1,
          set: (value) => {
            this.$inputs.rating1 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      slider2 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$data.customLength,
          set: (value) => {
            this.$data.customLength = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      rating2 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.rating2,
          set: (value) => {
            this.$inputs.rating2 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      rating3 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.rating3,
          set: (value) => {
            this.$inputs.rating3 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      rating4 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.rating4,
          set: (value) => {
            this.$inputs.rating4 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      rating5 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.rating5,
          set: (value) => {
            this.$inputs.rating5 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      rating6 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.rating6,
          set: (value) => {
            this.$inputs.rating6 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      rating7 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.rating7,
          set: (value) => {
            this.$inputs.rating7 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      rating8 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.rating8 || $first([
            this.$data.rating === 0 ? null : undefined,
            this.$data.rating === 0.5 ? 0.5 : undefined,
            this.$data.rating === 1 ? 1 : undefined,
            this.$data.rating === 1.5 ? 1.5 : undefined,
            this.$data.rating === 2 ? 2 : undefined,
            this.$data.rating === 2.5 ? 2.5 : undefined,
            this.$data.rating === 3 ? 3 : undefined,
            this.$data.rating === 3.5 ? 3.5 : undefined,
            this.$data.rating === 4 ? 4 : undefined,
            this.$data.rating === 4.5 ? 3.5 : undefined,
            5
          ]),
          set: (value) => {
            this.$inputs.rating8 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      slider3 (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$data.rating,
          set: (value) => {
            this.$data.rating = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your file */
      caseACocherOuiClick () {
      },
      /* @ts-ignore: to allow override in your file */
      checkbox1Click () {
        this.$data.color = 'red'
      },
      /* @ts-ignore: to allow override in your file */
      caseACocherOui1Click () {
        this.$data.color = 'blue'
      },
      /* @ts-ignore: to allow override in your file */
      caseACocherOui2Click () {
        this.$data.color = 'green'
      },
      /* @ts-ignore: to allow override in your file */
      caseACocherOui4Click () {
        this.$data.color = 'blue-kapix'
      },
      /* @ts-ignore: to allow override in your file */
      caseACocherOui5Click () {
        this.$data.color = 'yellow-kapix'
      },
      /* @ts-ignore: to allow override in your file */
      async text8Click () {
        await navigateTo({ hash: '#utilisation-p10' })
      },
      /* @ts-ignore: to allow override in your file */
      async text9Click () {
        await navigateTo({ hash: '#api-p10' })
      },
      /* @ts-ignore: to allow override in your file */
      async text10Click () {
        await navigateTo({ hash: '#exemple-p10' })
      },
      /* @ts-ignore: to allow override in your file */
      async sousTitreClick () {
        await navigateTo({ hash: '#proprietes-p10' })
      },
      /* @ts-ignore: to allow override in your file */
      async text11Click () {
        await navigateTo({ hash: '#couleurs-p10' })
      },
      /* @ts-ignore: to allow override in your file */
      async text12Click () {
        await navigateTo({ hash: '#container-3-p10' })
      },
      /* @ts-ignore: to allow override in your file */
      async text13Click () {
        await navigateTo({ hash: '#etats-p10' })
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
  return headerWithLeftSidebarRatingsFactory(storeId)()
}

export const headerWithLeftSidebarRatingsRaw = headerWithLeftSidebarRatingsFactory()
export const headerWithLeftSidebarRatings = () => headerWithLeftSidebarRatingsRaw() as MergeCustomStore<typeof headerWithLeftSidebarRatingsStoreCustom.instance>
