<script setup lang="ts">
import { useSmoothScroll } from '~/composable/useSmoothScroll'

defineProps<{ visible: boolean }>()
const emit = defineEmits(['close'])

const { scrollTo } = useSmoothScroll()

const handleClick = (sectionId: string) => {
  emit('close')
  scrollTo(sectionId)
}
</script>

<template>
  <Transition name="nav">
    <div
      v-if="visible"
      class="mobile-nav fixed inset-0 z-50 flex flex-col items-center justify-center gap-16"
    >
      <button
        @click="emit('close')"
        class="absolute top-6 p-1 pt-1.5 text-text! text-xl! right-side"
      >
        ✕
      </button>
      <nav class="flex flex-col items-center gap-8">
        <button @click="handleClick('#project-section')">Work</button>
        <button @click="handleClick('#about-section')">About</button>
        <a href="https://github.com/simon-behr" target="_blank">Github</a>
      </nav>
    </div>
  </Transition>
</template>

<style scoped>
@reference '~/assets/css/main.css';

.mobile-nav {
  @apply bg-background/75 backdrop-blur-md;
}

button,
a {
  @apply font-syne text-3xl font-bold text-text-muted/60 bg-none border-none cursor-pointer no-underline transition-colors duration-200;
}

button:hover,
a:hover {
  @apply text-text;
}

.nav-enter-active,
.nav-leave-active {
  transition: opacity 0.3s ease;
}

.nav-enter-from,
.nav-leave-to {
  opacity: 0;
}
</style>
