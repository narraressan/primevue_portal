<script setup lang="ts">
import { watch } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "./components/layout/DefaultLayout.vue";
import { PAGE_IS_LOADING } from "./composables/Generic";

const route = useRoute();
watch(
  () => route.name,
  () => {
    PAGE_IS_LOADING.value = true;
    setTimeout(() => {
      PAGE_IS_LOADING.value = false;
    }, 3000);
  }
);
</script>

<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>

<style scoped>
/* TODO */
</style>
