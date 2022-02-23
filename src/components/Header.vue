<script setup lang="ts">


</script>

<template lang="pug">
.header
  span
    .topSide
      .w-lg
        ul.topSide-list.text-white.flex.items-center
          li.topSide-list-item App Download
          li.topSide-list-item FAQ
          li.topSide-list-item BLOG
          li.topSide-list-item AFFILIATE
    .flex.items-center.w-lg
      .logo-left
        img(src="src/assets/images/header/logo.png" alt)
      .logo-right
        img(src="src/assets/images/header/hero.png" alt)
  .header-footer.flex.items-center.text-white
    ul.header-footer-bar
      li SPORTS
      li EXCHANGE
      li VIRTUAL
      li LIVE CASINO
      li POKER
      li SLOTS
      li PROMOTIONS
      li SPONSORSHIPS
</template>

<style scoped>
  .w-lg {
      max-width: 64rem;
      margin: 0 auto;
  }
  .header {
      background-color: #3BAAE0;
      height: 12.5rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
  }
  
  .topSide {
      background-color: #339ACF;
      height: 2rem;
      width: 100%;
  }
  
  .topSide-list {
      padding: 0.5rem 0;
      font-size: 0.875rem;
      line-height: 1rem;
  }
  
  .topSide-list li+li {
      border-left: 1px solid white;
  }
  
  .topSide-list-item {
      padding: 0 16px;
  }
  
  .logo-left,
  .logo-right {
      width: 200px;
  }
  
  .header-footer {
      width: 100%;
  }
  
  .header-footer-bar {
      display: flex;
      align-items: center;
      width: 60rem;
      margin: 0 auto 1rem auto;
      justify-content: space-between;
  }
  
  .header-footer-bar li {
      width: max-content;
  }
</style>
