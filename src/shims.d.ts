declare interface Window {
  // extend the window
}

// with vite-plugin-vue-markdown, markdown files can be treated as Vue components
declare module '*.md' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare type Nullable<T> = T | null | undefined
declare type KeyValuePair<V = any> = {
  [key: string]: V
}
declare type KeyPair = KeyValuePair<string>
declare type PartialEntity<T> = Nullable<Partial<T>>
declare type PartialEntities<T> = Nullable<Array<Partial<T>>>
declare type TwitterCard = 'summary' | 'summary_large_image' | 'app' | 'player'
declare type KaElement = {
  value: any
  options: KeyValuePair
  style: KeyValuePair
}

declare type KaElementMap = {
  [key: string]: KaElement
}

declare type RoleEnum = null | 'admin' | 'manager'
declare interface IUser {
  name: string
  email: string
  roles: RoleEnum[]
}

declare type IGradientColor = string | { Angle?: number; Colors: string[] }
declare type KapixListData<T = any> = {
  items?: Nullable<Array<T>>
  scrollTop?: Nullable<number>
  scrollLeft?: Nullable<number>
  loading?: Nullable<boolean>
  quickSearch?: Nullable<string>
  addItem?: (item: PartialEntity<T>) => void
  removeItem?: (item: PartialEntity<T>) => boolean
}

declare namespace Kapix {
  declare namespace Entity {
    declare interface IUser {
      id: unknown
      email: string
      userName: string
      imageUrl: string
      emailConfirmed: boolean
      state: Nullable<null | `premium` | `blocked` | `banned` | `waiting`>
    }
    declare interface IApplication {
      name: string
      owner: string
      title: string
      icon: string
      version: string
      copyright: string
    }
  }
}