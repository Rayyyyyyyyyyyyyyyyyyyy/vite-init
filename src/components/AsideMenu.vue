<script setup lang="ts">
import LinkTag from "./LinkTag.vue"

</script>

<template lang="pug">
.aside-menu
  LinkTag
  LinkTag(tag-text="Fair play violation")
  LinkTag(tag-text="Terms & conditions")
  LinkTag(tag-text="Legalities")
  LinkTag(tag-text="Privacy policy")

  
</template>

<style scoped>
.aside-menu{
  @apply flex flex-col items-center p-4;
  background: #FAFAFA;
}

</style>
