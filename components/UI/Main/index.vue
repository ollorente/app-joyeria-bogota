<script setup lang="ts">
const props = defineProps({
  error: {
    type: String,
    default: "",
  },
  isError: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <main class="">

    <div v-if="props.loading" class="p-3">Loading...</div>

    <div v-else-if="props.isError" class="p-3">{{ props.error }}</div>

    <div v-else class="p-3">
      <slot></slot>
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: calc(100vh - 10rem);
}
</style>