import { remove } from 'lodash-es'
import type { CustomStoreImplementationOptions, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { defineStore } from 'pinia'
import { NOOP, initAliveStoreIds, kapixContext } from 'kapix-components-vue3'
import testComponentStoreCustom from './store.custom'

const storeName = 'testComponent'
const customImplement: CustomStoreImplementationOptions = testComponentStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function testComponentFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $parentPage: NOOP,
        $parentComponent: NOOP,
        // Constants,
        $constants: {},
        // Data,
        $data: {
          image: undefined as Nullable<string>,
          typeDeMedia: undefined as Nullable<'image' | 'video'>
        },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your file */
      $image (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$data.image,
          set: (value) => {
            this.$data.image = value
            this.$emit('update:image', value)
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      $typeDeMedia (): WritableComputedRef<Nullable<'image' | 'video'>> {
        return computed({
          get: () => this.$data.typeDeMedia,
          set: (value) => {
            this.$data.typeDeMedia = value
            this.$emit('update:typeDeMedia', value)
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
  return testComponentFactory(storeId)()
}

export const testComponentRaw = testComponentFactory()
export const testComponent = () => testComponentRaw() as MergeCustomStore<typeof testComponentStoreCustom.instance>
