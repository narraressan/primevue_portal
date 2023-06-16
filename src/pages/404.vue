<script setup lang="ts">
import { useI18n } from "vue-i18n";
import ErrorPageLayout from "../components/layout/ErrorPageLayout.vue";

const { t } = useI18n();
</script>

<template>
  <ErrorPageLayout>
    <template #title>
      <div>{{ t("page.404.title") }}</div>
    </template>
    <template #heading>
      <div>{{ t("page.404.heading") }}</div>
    </template>
    <template #subheading>
      <div>
        {{ t("page.404.subheading") }}
      </div>
    </template>
  </ErrorPageLayout>
</template>
