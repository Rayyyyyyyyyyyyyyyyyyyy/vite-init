<script setup lang="ts">
import LinkTag from "./LinkTag.vue"
import RouterNames from "../router/name";

</script>

<template lang="pug">
.aside-menu
  LinkTag
  LinkTag(tag-text="Terms & conditions"
    :defaultRoutName="{name : RouterNames.terms}"
  )
  LinkTag(tag-text="Legalities"
    :defaultRoutName="{name : RouterNames.legalities}"
  )
  LinkTag(tag-text="Privacy policy"
  :defaultRoutName="{name : RouterNames.privacy}"
  )
  LinkTag(tag-text="Refund policy"
    :defaultRoutName="{name : RouterNames.refund}"
  )


</template>

<style scoped>
.aside-menu{
  @apply flex flex-col items-center p-4;
  background: #FAFAFA;
}

</style>
