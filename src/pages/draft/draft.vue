<template>
  <div class="draft" @click="onClick">draft</div>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
})
const emits = defineEmits(['ip'])
const onClick = () => {
  emits('ip', props.list) //通道名称+ 数据
}
</script>

<style lang="scss"></style>
