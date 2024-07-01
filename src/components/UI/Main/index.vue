<script setup>
const props = defineProps({
  error: {
    type: String,
    default: "",
  },
  isError: {
    type: Number,
    default: false,
  },
  isLoading: {
    type: Number,
    default: false,
  },
})
</script>

<template>
  <div class="">
    <div v-if="props.isLoading" class="">Loading...</div>

    <div v-else-if="props.isError" class="">{{ props.error }}</div>

    <div class="container p-3">
      <slot></slot>
    </div>
  </div>
</template>
