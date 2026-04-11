<script setup lang="ts">
import { useSmoothScroll } from "~/composable/useSmoothScroll";

const { scrollTo } = useSmoothScroll();
</script>

<template>
  <header
    class="w-full fixed bg-background z-20 animate-fadeDown border-b-border h-header px-side border-b flex items-center justify-between"
  >
    <div class="flex items-center gap-2">
      <div class="badge" />
      <span class="font-bold text-sm tracking-widest">Simon B.</span>
    </div>
    <nav class="flex text-text-muted items-center gap-8 animate-fadeDown">
      <button @click="scrollTo('#project-section')">Work</button>
      <button @click="scrollTo('#about-section')">About</button>
      <a href="https://github.com/simon-behr" target="_blank">Github</a>
    </nav>
    <button
      @click="navigateTo('https://www.linkedin.com/in/simon-behr-831b942a1/', { external: true })"
      class="button-primary animate-fadeDown"
    >
      Get in touch ↗
    </button>
  </header>
</template>

<style scoped>
@reference '~/assets/css/main.css';
.badge {
  @apply w-1.5 h-1.5 bg-primary rounded-full;
  animation: pulse 2.5s infinite;
}

nav a,
nav button {
  @apply hover:text-text duration-200;
}
</style>
