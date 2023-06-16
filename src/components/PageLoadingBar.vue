<script setup lang="ts">
import ProgressBar from "primevue/progressbar";
import BlockUI from "primevue/blockui";
import { PAGE_IS_LOADING } from "../composables/Generic";
</script>

<template>
  <div v-if="PAGE_IS_LOADING" class="absolute w-full p-2">
    <ProgressBar
      mode="indeterminate"
      :pt="{
        root: { class: 'page__progress_bar' },
      }"
    />
  </div>
  <BlockUI :blocked="PAGE_IS_LOADING" full-screen />
  <slot />
</template>

<style lang="scss" scoped>
.page__progress_bar {
  @apply w-full h-6px rounded-none;
}
</style>
