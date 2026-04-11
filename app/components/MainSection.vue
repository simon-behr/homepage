<script setup lang="ts">
defineProps<{ title: string; subTitle?: string; construction?: boolean }>();
</script>

<template>
  <div class="flex flex-col gap-5 md:gap-10">
    <div class="flex flex-col">
      <h2 class="text-primary text-xs font-syne-mono">// {{ title }}</h2>
      <span v-if="subTitle" class="text-3xl font-bold"> {{ subTitle }} </span>
    </div>
    <WipOverlay v-if="construction" />
    <slot v-else />
  </div>
</template>

<style scoped></style>
