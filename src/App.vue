<script setup>
import UIHeader from "@/components/UI/Header/index.vue"
import UIFooter from "@/components/UI/Footer/index.vue"
</script>

<template>
  <div class="">
    <UIHeader />

    <main class="">
      <router-view></router-view>
    </main>

    <UIFooter />
  </div>
</template>
