<script setup lang="ts">
import { reactive } from '@vue/reactivity'

const state = reactive({
  count: 1
})
</script>

<template>
  <div class="container">
    <p>home {{ state.count }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
