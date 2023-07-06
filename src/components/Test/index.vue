<template>
  <KaContainer
    code="test"
    :options="options"
    :instance-class="instanceClass"
    :inner="inner"
    :xs="xs"
    :sm="sm">
    <KaTypeWriter
      code="type-writer"
      :value="componentInstance.$typeWriter.value" />
    <!-- Container -->
    <KaContainer code="container">
      <KaImage
        code="image"
        :options="{
          animationIn: `fadeIn`,
          lazyOptions: {
            throttle: 200,
            once: true,
            intersection: { threshold: 0.1 }
          },
          hidden: componentInstance.$typeDeMedia.value === `image` ? false : null
        }"
        :value="componentInstance.$image.value" />
    </KaContainer>
  </KaContainer>
</template>

<script setup lang="ts">
import { NOOP, kapixContext } from 'kapix-components-vue3'
import { testComponent } from './store'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'Test'
})
provide('$scoped', '-c0')
const component = testComponent()
const componentInstance = component.newStoreInstance()
provide('$elements', componentInstance.$elements)
onBeforeMount(() => componentInstance.beforeMount())
onMounted(() => componentInstance.mounted())
onServerPrefetch(() => componentInstance.serverPrefetch())
onBeforeUnmount(() => componentInstance.beforeUnmount())
onUnmounted(() => componentInstance.unmounted())

const props = withDefaults(defineProps<{
  image?: Nullable<string>
  typeDeMedia?: Nullable<'image' | 'video'>
  instanceClass?: Nullable<string>
  options?: Nullable<KeyValuePair>
  sm?: Nullable<KeyValuePair>
  xs?: Nullable<KeyValuePair>
  inner?: Nullable<boolean>
}>(), {
  image: 'https://ucarecdn.com/83a003e0-0add-4ee3-afaf-ac1437100353/',
  typeDeMedia: 'image',
  instanceClass: undefined,
  options: undefined,
  sm: undefined,
  xs: undefined,
  inner: undefined
})

if (kapixContext.isClient) {
  componentInstance.$parentPage = inject('$parentPage', NOOP)
  componentInstance.$parentComponent = inject('$parentComponent', NOOP)
}

const emit = defineEmits([
  'update:image',
  'update:typeDeMedia'
])
componentInstance.$emit = emit

watch(() => props.image, (value) => {
  componentInstance.$data.image = value
}, { immediate: true })
watch(() => props.typeDeMedia, (value) => {
  componentInstance.$data.typeDeMedia = value
}, { immediate: true })

</script>
