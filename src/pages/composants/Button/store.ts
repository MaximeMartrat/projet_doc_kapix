import type { WritableComputedRef } from 'vue'
import { remove } from 'lodash-es'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { $first, initAliveStoreIds, kapixContext, navigateTo } from 'kapix-components-vue3'
import headerWithLeftSidebarBoutonStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarBouton'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarBoutonStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarBoutonFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('bouton.title', 'Bouton'),
        $description: $translate('bouton.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-07-18T16:12:42.320Z'),
        // Constants,
        $constants: {
          button: [
            1,
            1,
            1,
            1
          ],
          buttonRounded: [
            9999,
            9999,
            9999,
            9999
          ],
          button1: [
            7,
            7,
            7,
            7
          ],
          colorItems: [
            'primary',
            'secondary',
            'lostark'
          ]
        },
        // Data,
        $data: {
          outlined: 'default',
          plain: 'default',
          rounded: 'default',
          color: '',
          tile: 'default'
        },
        $inputs: { color: undefined as Nullable<string> },
        $info: { bouton: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your file */
      color (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.color || $first([
            this.$data.color === 'primary' ? 'primary' : undefined,
            this.$data.color === 'secondary' ? 'secondary' : undefined,
            'lostark'
          ]),
          set: (value) => {
            this.$inputs.color = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your file */
      outlinedClick () {
        this.$data.outlined = 'outlined'
      },
      /* @ts-ignore: to allow override in your file */
      plainClick () {
        this.$data.plain = 'plain'
      },
      /* @ts-ignore: to allow override in your file */
      roundedClick () {
        this.$data.rounded = 'rounded'
      },
      /* @ts-ignore: to allow override in your file */
      async text9Click () {
        await navigateTo({ hash: '#utilisation-p5' })
      },
      /* @ts-ignore: to allow override in your file */
      async text10Click () {
        await navigateTo({ hash: '#api-p5' })
      },
      /* @ts-ignore: to allow override in your file */
      async text11Click () {
        await navigateTo({ hash: '#exemple-p5' })
      },
      /* @ts-ignore: to allow override in your file */
      async sousTitreClick () {
        await navigateTo({ hash: '#proprietes-p5' })
      },
      /* @ts-ignore: to allow override in your file */
      async text12Click () {
        await navigateTo({ hash: '#couleurs-p5' })
      },
      /* @ts-ignore: to allow override in your file */
      async text13Click () {
        await navigateTo({ query: {} }, true)
      },
      /* @ts-ignore: to allow override in your file */
      async text14Click () {
        await navigateTo({ hash: '#etats-p5' })
      },
      /* @ts-ignore: to allow override in your file */
      async icon1Click (event: KaElementClickEvent) {
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
  return headerWithLeftSidebarBoutonFactory(storeId)()
}

export const headerWithLeftSidebarBoutonRaw = headerWithLeftSidebarBoutonFactory()
export const headerWithLeftSidebarBouton = () => headerWithLeftSidebarBoutonRaw() as MergeCustomStore<typeof headerWithLeftSidebarBoutonStoreCustom.instance>
