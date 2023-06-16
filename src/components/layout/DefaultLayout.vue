<script setup lang="ts">
import Toast from "primevue/toast";
import PageLoadingBar from "../PageLoadingBar.vue";
</script>

<template>
  <Toast />
  <PageLoadingBar />
  <slot />
</template>
