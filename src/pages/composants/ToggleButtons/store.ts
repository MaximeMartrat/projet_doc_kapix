import type { WritableComputedRef } from 'vue'
import { remove } from 'lodash-es'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { initAliveStoreIds, kapixContext, navigateTo } from 'kapix-components-vue3'
import headerWithLeftSidebarToggleButtonsStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarToggleButtons'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarToggleButtonsStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarToggleButtonsFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('toggle-buttons.title', 'ToggleButtons'),
        $description: $translate('toggle-buttons.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-07-12T15:18:10.846Z'),
        // Constants,
        $constants: {
          choixAvecBoutonsItems: [
            {
              description: 'edit',
              icon: 'fas fa-pencil-alt',
              value: 'edit'
            },
            {
              description: 'icons',
              icon: 'fas fa-icons',
              value: 'icons'
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-right',
              color: null,
              background: null
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-justify',
              color: null,
              background: null
            }
          ],
          toggleButton1Items: [
            {
              description: 'edit',
              icon: 'fas fa-pencil-alt',
              value: 'edit'
            },
            {
              description: 'icons',
              icon: 'fas fa-icons',
              value: 'icons'
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-right',
              color: null,
              background: null
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-justify',
              color: null,
              background: null
            }
          ],
          toggleButton2Items: [
            {
              description: 'edit',
              icon: 'fas fa-pencil-alt',
              value: 'edit'
            },
            {
              description: 'icons',
              icon: 'fas fa-icons',
              value: 'icons'
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-right',
              color: null,
              background: null
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-justify',
              color: null,
              background: null
            }
          ],
          toggleButton3Items: [
            {
              description: 'edit',
              icon: 'fas fa-pencil-alt',
              value: 'edit'
            },
            {
              description: 'icons',
              icon: 'fas fa-icons',
              value: 'icons'
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-right',
              color: null,
              background: null
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-justify',
              color: null,
              background: null
            }
          ],
          toggleButton4Items: [
            {
              description: 'edit',
              icon: 'fas fa-pencil-alt',
              value: 'edit'
            },
            {
              description: 'icons',
              icon: 'fas fa-icons',
              value: 'icons'
            },
            {
              label: 'RIGHT',
              value: 'RIGHT',
              description: 'RIGHT',
              icon: null,
              color: null,
              background: null
            },
            {
              label: 'JUSTIFY',
              value: 'JUSTIFY',
              description: 'JUSTIFY',
              icon: 'fas fa-align-justify',
              color: null,
              background: null
            }
          ],
          toggleButton5Items: [
            {
              description: 'edit',
              icon: 'fas fa-pencil-alt',
              value: 'edit'
            },
            {
              description: 'icons',
              icon: 'fas fa-icons',
              value: 'icons'
            },
            {
              label: 'RIGHT',
              value: 'RIGHT',
              description: 'RIGHT',
              icon: 'fas fa-align-right',
              color: null,
              background: null
            },
            {
              label: 'JUSTIFY',
              value: 'JUSTIFY',
              description: 'JUSTIFY',
              icon: 'fas fa-align-justify',
              color: null,
              background: null
            }
          ],
          toggleButton6Items: [
            {
              description: 'edit',
              icon: 'fas fa-pencil-alt',
              value: 'edit'
            },
            {
              description: 'icons',
              icon: 'fas fa-icons',
              value: 'icons'
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-right',
              color: null,
              background: null
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-justify',
              color: null,
              background: null
            }
          ],
          toggleButton7Items: [
            {
              description: 'edit',
              icon: 'fas fa-pencil-alt',
              value: 'edit'
            },
            {
              description: 'icons',
              icon: 'fas fa-icons',
              value: 'icons'
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-right',
              color: null,
              background: null
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-justify',
              color: null,
              background: null
            }
          ],
          toggleButton8Items: [
            {
              description: 'edit',
              icon: 'fas fa-pencil-alt',
              value: 'edit'
            },
            {
              description: 'icons',
              icon: 'fas fa-icons',
              value: 'icons'
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-right',
              color: null,
              background: null
            },
            {
              label: null,
              value: null,
              description: null,
              icon: 'fas fa-align-justify',
              color: null,
              background: null
            }
          ]
        },
        // Data,
        $inputs: {
          choixAvecBoutons: 'Align left',
          toggleButton1: 'Align left',
          toggleButton2: 'Align left',
          toggleButton3: 'Align left',
          toggleButton4: 'Align left',
          toggleButton5: 'Align left',
          toggleButton6: 'Align left',
          toggleButton7: 'Align left',
          toggleButton8: 'Align left'
        },
        $info: { toggleButtons: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your file */
      choixAvecBoutons (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.choixAvecBoutons,
          set: (value) => {
            this.$inputs.choixAvecBoutons = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      toggleButton1 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.toggleButton1,
          set: (value) => {
            this.$inputs.toggleButton1 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      toggleButton2 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.toggleButton2,
          set: (value) => {
            this.$inputs.toggleButton2 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      toggleButton3 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.toggleButton3,
          set: (value) => {
            this.$inputs.toggleButton3 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      toggleButton4 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.toggleButton4,
          set: (value) => {
            this.$inputs.toggleButton4 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      toggleButton5 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.toggleButton5,
          set: (value) => {
            this.$inputs.toggleButton5 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      toggleButton6 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.toggleButton6,
          set: (value) => {
            this.$inputs.toggleButton6 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      toggleButton7 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.toggleButton7,
          set: (value) => {
            this.$inputs.toggleButton7 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      toggleButton8 (): WritableComputedRef<Nullable<string>> {
        return computed({
          get: () => this.$inputs.toggleButton8,
          set: (value) => {
            this.$inputs.toggleButton8 = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your file */
      async text7Click () {
        await navigateTo({ hash: '#utilisation-p7' })
      },
      /* @ts-ignore: to allow override in your file */
      async text8Click () {
        await navigateTo({ hash: '#api-p7' })
      },
      /* @ts-ignore: to allow override in your file */
      async text9Click () {
        await navigateTo({ hash: '#example-p7' })
      },
      /* @ts-ignore: to allow override in your file */
      async sousTitreClick () {
        await navigateTo({ hash: '#props-p7' })
      },
      /* @ts-ignore: to allow override in your file */
      async text10Click () {
        await navigateTo({ hash: '#container-7-p7' })
      },
      /* @ts-ignore: to allow override in your file */
      async text11Click () {
        await navigateTo({ hash: '#container-8-p7' })
      },
      /* @ts-ignore: to allow override in your file */
      async text12Click () {
        await navigateTo({ hash: '#rounded-p7' })
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
  return headerWithLeftSidebarToggleButtonsFactory(storeId)()
}

export const headerWithLeftSidebarToggleButtonsRaw = headerWithLeftSidebarToggleButtonsFactory()
export const headerWithLeftSidebarToggleButtons = () => headerWithLeftSidebarToggleButtonsRaw() as MergeCustomStore<typeof headerWithLeftSidebarToggleButtonsStoreCustom.instance>
