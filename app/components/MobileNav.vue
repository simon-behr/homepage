<script setup lang="ts">
import {useSmoothScroll} from '~/composable/useSmoothScroll'

defineProps<{ visible: boolean }>()
const emit = defineEmits(['close'])

const {scrollTo} = useSmoothScroll()

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
      <button @click="emit('close')" class="absolute top-6 p-1 pt-1.5 text-text! text-xl! right-side">✕</button>
      <nav class="flex flex-col items-center gap-8">
        <button @click="handleClick('#project-section')">Work</button>
        <button @click="handleClick('#about-section')">About</button>
        <a href="https://github.com/simon-behr" target="_blank">Github</a>
      </nav>
    </div>
  </Transition>
</template>

<style scoped>
.mobile-nav {
  background: rgba(7, 7, 12, 0.75);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

button, a {
  font-family: 'Syne', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.2);
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s;
}

button:hover, a:hover {
  color: var(--color-text);
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