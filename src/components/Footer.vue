<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const pushLink = (linkName: string) => {
  router.push({name: linkName})

}

</script>

<template lang="pug">
.footer
  <img src="@/assets/images/header/home/footer-icons.png" alt="footer"/>
  .text-white
    p.footer-title Top Games & More
    .footer-link
      .footer-link-col
        .cantClick Sports
        .cantClick Exchange
        .cantClick Virtual
      .footer-link-col
        .cantClick Live Casion
        .cantClick Poker
        .cantClick Slots
      .footer-link-col
        .cantClick Promotions
        .cantClick Sponsorships
        .cantClick Become An Affiliate
      .footer-link-col
        .cantClick Blog
        .link(@click="pushLink('about')") About us
        .link(@click="pushLink('refund')") Refund policy
      .footer-link-col
        .link(@click="pushLink('terms')") Terms & conditions
        .link(@click="pushLink('legalities')") Legalities
        .link(@click="pushLink('privacy')") Privacy policy
      .footer-link-col
        .cantClick Download Mobile App
        .cantClick Contact Us
        .cantClick FAQs
    .footer-text
      <img class="mr-4" src="@/assets/images/header/home/coop.png" alt="coop"/>
      <img src="@/assets/images/header/home/text.png" alt="text"/>
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
      @apply w-10/12 mx-auto flex justify-center text-left justify-around mb-8;
  }

  .link {
      @apply my-4 mx-0 cursor-pointer;
  }
  .cantClick {
    @apply my-4 mx-0;
  }
  .footer-text{
    @apply flex items-center mb-3 mx-auto justify-center;
    max-width: 680px;
  }

</style>
