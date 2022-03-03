<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const pushLink = (linkName: string) => {
  router.push({name: linkName})

}

</script>

<template lang="pug">
.footer
  img(src="src/assets/images/header/home/footer-icons.png" alt="footer")
  .text-white
    p.footer-title Top Games & More
    .footer-link
      .footer-link-left
        .link(@click="pushLink('about')") About us
        .link Fair play violation
        .link terms & conditions
      .footer-link-right
        .link legalities
        .link privacy policy
    .footer-text
      img.mr-4(src="src/assets/images/header/home/coop.png" alt="coop")
      img(src="src/assets/images/header/home/text.png" alt="text")
</template>

<style scoped>
.footer {
      @apply flex flex-col text-center;
      background: #3BAAE0;
  
  }
  
  .footer-title {
      @apply text-lg mb-4;
  }
  
  .footer-link {
      @apply flex justify-center text-left;

    
  }
  
  .footer-link-left {
      @apply mr-16;

  }
  
  .link {
      @apply my-4 mx-0 cursor-pointer;

  }
  .footer-text{
    @apply flex items-center mb-3 mx-auto justify-center;
    max-width: 680px;
  }
  
</style>
