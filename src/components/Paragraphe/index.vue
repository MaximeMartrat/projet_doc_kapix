<template>
  <KaContainer
    code="paragraphe"
    :options="options"
    :instance-class="instanceClass"
    :inner="inner"
    :xs="xs"
    :sm="sm">
    <KaText code="text">
      <span v-html="componentInstance.$content.value" />
    </KaText>
  </KaContainer>
</template>

<script setup lang="ts">
import { NOOP, kapixContext } from 'kapix-components-vue3'
import { paragrapheComponent } from './store'
import './style.scss'
import './style.custom.scss'

defineOptions({
  name: 'Paragraphe'
})
provide('$scoped', '-c1')
const component = paragrapheComponent()
const componentInstance = component.newStoreInstance()
provide('$elements', componentInstance.$elements)
onBeforeMount(() => componentInstance.beforeMount())
onMounted(() => componentInstance.mounted())
onServerPrefetch(() => componentInstance.serverPrefetch())
onBeforeUnmount(() => componentInstance.beforeUnmount())
onUnmounted(() => componentInstance.unmounted())

const props = withDefaults(defineProps<{
  content?: Nullable<string>
  instanceClass?: Nullable<string>
  options?: Nullable<KeyValuePair>
  sm?: Nullable<KeyValuePair>
  xs?: Nullable<KeyValuePair>
  inner?: Nullable<boolean>
}>(), {
  content: 'default',
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
  'update:content'
])
componentInstance.$emit = emit

watch(() => props.content, (value) => {
  componentInstance.$data.content = value
}, { immediate: true })

</script>
