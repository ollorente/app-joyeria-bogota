<script setup>
import UIMainAside from "@/components/UI/Main/Aside/index.vue"

const title = "Nosotros"
</script>

<template>
  <div class="container">
    <div class="row py-3">
      <div class="col-12 col-md-9">
        <h1 class="h4 fw-semibold">{{ title }}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates ullam perspiciatis vel vero dolor obcaecati minima corrupti laborum asperiores. Molestias facilis porro ducimus quas excepturi incidunt laboriosam. Quidem maiores excepturi fugiat recusandae, ea suscipit iusto similique tempore nostrum. Quo, ad.</p>
      </div>
      <div class="col-12 col-md-3">
        <UIMainAside />
      </div>
    </div>
  </div>
</template>
