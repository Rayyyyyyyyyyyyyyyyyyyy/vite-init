<script setup lang="ts">
import { reactive } from '@vue/reactivity'

const state = reactive({
  count: 1
})
</script>

<template lang="pug">
Header
.container
  el-button.text-button home

</template>

<style lang="scss" scoped>
.text-button {
  @apply text-3xl;
}
</style>
