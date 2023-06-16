<script setup lang="ts"></script>

<template>
  <div class="h-screen w-screen bg-gray-100 flex items-center justify-center">
    <div class="max-w-md px-5 text-gray-700">
      <div class="text-8xl font-bold">
        <slot name="title" />
      </div>
      <div class="text-4xl font-bold">
        <slot name="heading" />
      </div>
      <div class="mb-8 font-light py-3">
        <slot name="subheading" />
      </div>
    </div>
  </div>
</template>
