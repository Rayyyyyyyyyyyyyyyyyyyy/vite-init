<script setup lang="ts">

</script>

<template lang="pug">
main
  .main
    .slider
      //
        <button class="prevPage btn">
        <i class="fa-solid fa-angle-left"></i>
        </button>
      ul.slider-img-list
        li
          //- img(src="@/assets/images/header/home/slider/slider1.jpeg" alt="slider")
          <img src="@/assets/images/header/home/slider/slider1.jpeg" alt="slider"/>
      //
        <button class="nextPage btn">
        <i class="fa-solid fa-angle-right"></i>
        </button>
    .announcement
      .w-lg.flex.items-center
        .w-8.h-8.flex.justify-center.items-center
          //- img(src="@/assets/images/header/home/announcement.png" alt="announcement")
          <img src="@/assets/images/header/home/announcement.png" alt="announcement" />
        p Attention ! Come and Try our newly released BetB2B Sports and enjoy more options for your favorite Sports games betting with FUN88
    section
      <img src="@/assets/images/header/home/section/section1.png" alt="section" />
      //- img(src="@/assets/images/header/home/section/section1.png" alt="section")
    section
      <img src="@/assets/images/header/home/section/section2.png" alt="section" />
      //- img(src="@/assets/images/header/home/section/section2.png" alt="section")
    section.mobileApp.flex
      .mobileApp-left
        <img src="@/assets/images/header/home/phone.png" alt="phone" />
        //- img(src="@/assets/images/header/home/phone.png" alt="phone")
      .mobileApp-right
        <img src="@/assets/images/header/home/phone-text1.png" alt="phone-text" />
        <img src="@/assets/images/header/home/phone-text2.png" alt="phone-text" />
        //- img(src="@/assets/images/header/home/phone-text1.png" alt="phone-text")
        //- img(src="@/assets/images/header/home/phone-text2.png" alt="phone-text")
    hr.hr
    section.global
      <img src="@/assets/images/header/home/global.png" alt="global" />
      //- img(src="@/assets/images/header/home/global.png" alt="global")
    section
      <img src="@/assets/images/header/home/1.png" alt=""/>
      <img src="@/assets/images/header/home/2.png" alt=""/>
      <img src="@/assets/images/header/home/3.png" alt=""/>
      <img src="@/assets/images/header/home/4.png" alt=""/>
      <img src="@/assets/images/header/home/5.png" alt=""/>
      <img src="@/assets/images/header/home/6.png" alt=""/>
      <img src="@/assets/images/header/home/7.png" alt=""/>
      <img src="@/assets/images/header/home/8.png" alt=""/>
      <img src="@/assets/images/header/home/9.png" alt=""/>
      <img src="@/assets/images/header/home/10.png" alt=""/>
      <img src="@/assets/images/header/home/11.png" alt=""/>
    
</template>

<style scoped>
   
  img {
    @apply w-full h-full;
      object-fit: cover;
  }
 
  .w-lg {
    max-width: 64rem;
    @apply mx-auto;
  }
  .slider {
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
   .slider-img-list li img{
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
      max-width: 1440px;
      @apply mx-auto justify-center;

  }
  
  .mobileApp-left img {
      width: 70%;
      @apply mx-auto
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
  
  
</style>
