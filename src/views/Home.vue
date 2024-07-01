<script setup>
const title = "Home"
// const Error = ref(null)
// const isError = ref(false)
// const isLoading = ref(true)
// const items = ref()

// const getItems = async () => {
//   isLoading.value = true

//   try {
//     items.value = []
//   } catch (error) {
//     isError.value = true
//     Error.value = error
//   } finally {
//     isLoading.value = false
//   }
// }

// onMounted(() => getItems())
</script>

<template>
  <div class="container">
    <div class="row py-3">
      <div class="col-12">
        <h1 class="h4 fw-semibold">{{ title }}</h1>
      </div>
      <div class="col-12 col-md-3">
        [ASIDE]
      </div>
      <div class="col-12 col-md-3">
        [ASIDE]
      </div>
      <div class="col-12 col-md-3">
        [ASIDE]
      </div>
      <div class="col-12 col-md-3">
        [ASIDE]
      </div>
    </div>

    <div class="row py-3">
      <div class="col-12">
        <h1 class="h4 fw-semibold">{{ title }}</h1>
      </div>
      <div class="col-12 col-md-3">
        [ASIDE]
      </div>
      <div class="col-12 col-md-3">
        [ASIDE]
      </div>
      <div class="col-12 col-md-3">
        [ASIDE]
      </div>
      <div class="col-12 col-md-3">
        [ASIDE]
      </div>
    </div>
  </div>
</template>
