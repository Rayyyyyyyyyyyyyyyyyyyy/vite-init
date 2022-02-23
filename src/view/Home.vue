<script setup lang="ts">
import Header from "../components/Header.vue"

</script>

<template lang="pug">
Header
main.main
  .slider
    //
      <button class="prevPage btn">
      <i class="fa-solid fa-angle-left"></i>
      </button>
    ul.slider-img-list
      li
        img(src="src/assets/images/header/home/slider/slider1.jpeg" alt="slider")
    //
      <button class="nextPage btn">
      <i class="fa-solid fa-angle-right"></i>
      </button>
  .announcement
    .w-lg.flex.items-center
      .w-8.h-8.flex.justify-center.items-center
        img(src="src/assets/images/header/home/announcement.png" alt="announcement")
      p Attention ! Come and Try our newly released BetB2B Sports and enjoy more options for your favorite Sports games betting with FUN88
  section
    img(src="src/assets/images/header/home/section/section1.png" alt="section")
  section
    img(src="src/assets/images/header/home/section/section2.png" alt="section")
  section.mobileApp.flex
    .mobileApp-left
      img(src="src/assets/images/header/home/phone.png" alt="phone")
    .mobileApp-right
      img(src="src/assets/images/header/home/phone-text1.png" alt="phone-text")
      img(src="src/assets/images/header/home/phone-text2.png" alt="phone-text")
  hr.hr
  section.global
    img(src="src/assets/images/header/home/global.png" alt="global")
  section
    img(src="src/assets/images/header/home/1.png" alt)
    img(src="src/assets/images/header/home/2.png" alt)
    img(src="src/assets/images/header/home/3.png" alt)
    img(src="src/assets/images/header/home/4.png" alt)
    img(src="src/assets/images/header/home/5.png" alt)
    img(src="src/assets/images/header/home/6.png" alt)
    img(src="src/assets/images/header/home/7.png" alt)
    img(src="src/assets/images/header/home/8.png" alt)
    img(src="src/assets/images/header/home/9.png" alt)
    img(src="src/assets/images/header/home/10.png" alt)
    img(src="src/assets/images/header/home/11.png" alt)
  .footer
    img(src="src/assets/images/header/home/footer-icons.png" alt="footer")
    .text-white
      p.footer-title Top Games & More
      .footer-link
        .footer-link-left
          .link About us
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
   
  img {
    @apply w-full h-full;
      object-fit: cover;
  }
  .main {
    @apply absolute;
      top: 12.5rem;
      min-height: 100vh;
        }
  .w-lg {
      max-width: 64rem;
      @apply mx-auto;
  }
  .slider {
    max-width: 1440px;
    min-height: 348px;
    @apply w-full h-full;
    @apply relative;
    overflow: hidden;
  }
  
  .slider-img-list {
    @apply h-full;
    min-height: 348px;
  }
  
  .slider-img-list li {
    @apply h-full;
    min-height: 348px;
    
  }
  
  .prevPage,
  .nextPage {
    @apply absolute;

      top: calc(50% - 2.2rem)
  }
  
  .prevPage {
    @apply left-0;

  }
  
  .nextPage {
    @apply right-0;

  }

.announcement {
    @apply w-full;

    height: 2.5rem;
    background: #F4F5F9;
  }
  
  .announcement p {
      @apply ml-4 text-sm;

      color: #CCCDD0;
  }
  
  .mobileApp {
      width: 1440px;
      @apply mx-auto;

  }
  
  .mobileApp-left img {
      width: 70%;
  }
  
  .mobileApp-left,
  .mobileApp-right {
      @apply flex-1;

  }
  
  .mobileApp-right {
      @apply flex flex-col;


  }
  
  .mobileApp-right img {
      width: 70%;
  }
  
  .hr {
      @apply mt-8;

  }
  
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
    @apply flex items-center mb-3 mx-auto;
    width: 1024px;
  }
</style>
