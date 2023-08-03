<script setup lang="ts">
import { reactive } from '@vue/reactivity'

const state = reactive({
  count: 1
})
</script>

<template lang="pug">
.container
  .text-3xl home

</template>

<style lang="scss" scoped></style>
