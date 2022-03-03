<script setup lang="ts">
import RouterNames from "../router/name";


const prop = defineProps({
  tagText: {
    type: String,
    default: "About Us"
  },
  defaultRoutName: {
    type: Object,
    default: { name : RouterNames.about } 
  }
})


</script>

<template lang="pug">
router-link.tabBtn(:to="defaultRoutName")
  p {{ tagText }}
</template>

<style scoped>
.tabBtn{
  width: 140px;
  background: #8EAFCB;
  min-height: 40px;
  @apply rounded-full text-white my-4;
  @apply py-2 px-4 text-center cursor-pointer;

}
.tabBtn p {
  @apply text-xl;
}
.tabBtn:hover{
  background: #25AAE1;

}

</style>
