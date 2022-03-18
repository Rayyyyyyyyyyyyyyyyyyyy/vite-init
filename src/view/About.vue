<script setup lang="ts">
import { reactive, toRefs } from "@vue/reactivity"
import { onMounted } from "@vue/runtime-core"

const state = reactive({

})

onMounted(()=>{
  window.scrollTo(0,0)
})

</script>

<template lang="pug">
.about about



</template>

<style scoped>
.about{
  max-width: 64rem;
  @apply flex mx-auto py-6;
}

</style>
