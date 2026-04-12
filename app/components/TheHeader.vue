<script setup lang="ts">
import { useSmoothScroll } from "~/composable/useSmoothScroll";
import ColorModeButton from "~/components/ColorModeButton.vue";

const { scrollTo } = useSmoothScroll();
const isDesktop = useMediaQuery("(min-width: 768px)");

const mobileNavOpen = defineModel<boolean>({ required: true });
</script>

<template>
  <header
    class="w-full fixed bg-background z-20 animate-fadeDown border-b-border h-header px-side border-b flex items-center justify-between"
  >
    <div class="flex items-center gap-2">
      <div class="badge" />
      <NuxtLink to="/" class="font-bold text-sm tracking-widest">Simon B.</NuxtLink>
    </div>
    <nav v-if="isDesktop" class="flex text-text-muted items-center gap-8 animate-fadeDown">
      <button @click="scrollTo('#project-section')">Work</button>
      <button @click="scrollTo('#about-section')">About</button>
      <a href="https://github.com/simon-behr" target="_blank">Github</a>
    </nav>
    <div class="flex items-center gap-4">
      <button
        v-if="isDesktop"
        @click="navigateTo('https://www.linkedin.com/in/simon-behr-831b942a1/', { external: true })"
        class="button-primary animate-fadeDown"
      >
        Get in touch ↗
      </button>
      <ColorModeButton />
      <button
          v-if="!isDesktop"
          @click="mobileNavOpen = true"
          class="hamburger flex flex-col gap-1 p-1 pt-1.5"
      >
        <span/><span/><span/>
      </button>
    </div>
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

.hamburger span {
  display: block;
  width: 20px;
  height: 1px;
  background: var(--color-text-muted);
  border-radius: 99px;
}
</style>
