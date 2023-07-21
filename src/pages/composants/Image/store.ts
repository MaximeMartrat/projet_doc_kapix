import type { WritableComputedRef } from 'vue'
import { remove } from 'lodash-es'
import type { CustomStoreImplementationOptions, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { defineStore } from 'pinia'
import { initAliveStoreIds, kapixContext } from 'kapix-components-vue3'
import headerWithLeftSidebarImageStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarImage'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarImageStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarImageFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('image.title', 'Image'),
        $description: $translate('image.description', ''),
        $publishedTime: new Date('2023-07-12T13:10:19.890Z'),
        $modifiedTime: new Date('2023-07-12T13:54:17.662Z'),
        // Constants,
        $constants: {
          ajustementItems: [
            'None',
            'Contain',
            'Cover',
            'Fill',
            'Scale down'
          ]
        },
        // Data,
        $inputs: {
          ajustement: undefined as Nullable<string>,
          hauteurMax: undefined as Nullable<number>,
          largeurMax: undefined as Nullable<number>
        },
        $info: { image: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your file */
      ajustement (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.ajustement,
          set: (value) => {
            this.$inputs.ajustement = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      hauteurMax (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.hauteurMax,
          set: (value) => {
            this.$inputs.hauteurMax = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      largeurMax (): WritableComputedRef<Nullable<number>> {
        return computed({
          get: () => this.$inputs.largeurMax,
          set: (value) => {
            this.$inputs.largeurMax = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
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
  return headerWithLeftSidebarImageFactory(storeId)()
}

export const headerWithLeftSidebarImageRaw = headerWithLeftSidebarImageFactory()
export const headerWithLeftSidebarImage = () => headerWithLeftSidebarImageRaw() as MergeCustomStore<typeof headerWithLeftSidebarImageStoreCustom.instance>
