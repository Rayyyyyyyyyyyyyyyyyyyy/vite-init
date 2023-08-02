<script setup lang="ts">

import RouterNames from "@/router/name";
import {useRouter} from "vue-router";
import SvgIcon from "../components/SvgIcon.vue";

const router = useRouter()
onMounted(()=>{
  setTimeout(()=>{
    router.push({
      name: RouterNames.home
    })
  }, 1500)
})

</script>
<template>
  <div class="error">
    <svg-icon name="404"
              class="error-img"
              :width="300"
              :height="300"
    />
    <h2 class="title">您访问的页面不存在</h2>

    <router-link to="/">
      <el-button type="primary">返回首页</el-button>
    </router-link>
  </div>
</template>



<style lang="scss" scoped>
.error {
  @apply w-screen h-screen;
  @apply flex items-center justify-center;
  @apply flex-col;

  .title {
    @apply text-2xl my-8;
  }
}


</style>
