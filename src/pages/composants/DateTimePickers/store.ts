import type { WritableComputedRef } from 'vue'
import { remove } from 'lodash-es'
import { defineStore } from 'pinia'
import type { CustomStoreImplementationOptions, KaElementClickEvent, KaElementMap, MergeCustomStore, StoreIdentifier } from 'kapix-components-vue3'
import { initAliveStoreIds, kapixContext, navigateTo } from 'kapix-components-vue3'
import headerWithLeftSidebarDateTimePickersStoreCustom from './store.custom'
import { $translate } from '~/modules/i18n'

const storeName = 'headerWithLeftSidebarDateTimePickers'
const customImplement: CustomStoreImplementationOptions = headerWithLeftSidebarDateTimePickersStoreCustom.options
const aliveStoreIds = initAliveStoreIds()

function headerWithLeftSidebarDateTimePickersFactory (storeId?: Nullable<StoreIdentifier>) {
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
        $title: $translate('date-time-pickers.title', 'Date Time pickers'),
        $description: $translate('date-time-pickers.description', ''),
        $publishedTime: new Date('2023-06-08T09:02:02.207Z'),
        $modifiedTime: new Date('2023-07-11T15:41:56.248Z'),
        // Constants,
        $constants: {},
        // Data,
        $inputs: {
          saisieDeDateHeure: undefined as Nullable<Date>,
          dateTimePicker1: undefined as Nullable<Date>,
          saisieDeDate: undefined as Nullable<Date>,
          datePicker1: undefined as Nullable<Date>,
          datePicker2: undefined as Nullable<Date>,
          datePicker3: undefined as Nullable<Date>
        },
        $info: { dateTimePickers: { scrollTop: 0 } },
        ...(customImplement.state && customImplement.state())
      }
    },
    getters: {
      /* @ts-ignore: to allow override in your file */
      saisieDeDateHeure (): WritableComputedRef<Nullable<Date>> {
        return computed({
          get: () => this.$inputs.saisieDeDateHeure,
          set: (value) => {
            this.$inputs.saisieDeDateHeure = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      dateTimePicker1 (): WritableComputedRef<Nullable<Date>> {
        return computed({
          get: () => this.$inputs.dateTimePicker1,
          set: (value) => {
            this.$inputs.dateTimePicker1 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      saisieDeDate (): WritableComputedRef<Nullable<Date>> {
        return computed({
          get: () => this.$inputs.saisieDeDate,
          set: (value) => {
            this.$inputs.saisieDeDate = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      datePicker1 (): WritableComputedRef<Nullable<Date>> {
        return computed({
          get: () => this.$inputs.datePicker1,
          set: (value) => {
            this.$inputs.datePicker1 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      datePicker2 (): WritableComputedRef<Nullable<Date>> {
        return computed({
          get: () => this.$inputs.datePicker2,
          set: (value) => {
            this.$inputs.datePicker2 = value
          }
        })
      },
      /* @ts-ignore: to allow override in your file */
      datePicker3 (): WritableComputedRef<Nullable<Date>> {
        return computed({
          get: () => this.$inputs.datePicker3,
          set: (value) => {
            this.$inputs.datePicker3 = value
          }
        })
      },
      ...customImplement.getters
    },
    actions: {
      /* @ts-ignore: to allow override in your file */
      async text2Click () {
        await navigateTo({ hash: '#utilisation-p9' })
      },
      /* @ts-ignore: to allow override in your file */
      async text3Click () {
        await navigateTo({ hash: '#api-p9' })
      },
      /* @ts-ignore: to allow override in your file */
      async text4Click () {
        await navigateTo({ hash: '#exemple-p9' })
      },
      /* @ts-ignore: to allow override in your file */
      async sousTitreClick () {
        await navigateTo({ hash: '#proprietes-p9' })
      },
      /* @ts-ignore: to allow override in your file */
      async text5Click () {
        await navigateTo({ hash: '#couleurs-p9' })
      },
      /* @ts-ignore: to allow override in your file */
      async text6Click () {
        await navigateTo({ hash: '#formatting-p9' })
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
  return headerWithLeftSidebarDateTimePickersFactory(storeId)()
}

export const headerWithLeftSidebarDateTimePickersRaw = headerWithLeftSidebarDateTimePickersFactory()
export const headerWithLeftSidebarDateTimePickers = () => headerWithLeftSidebarDateTimePickersRaw() as MergeCustomStore<typeof headerWithLeftSidebarDateTimePickersStoreCustom.instance>
