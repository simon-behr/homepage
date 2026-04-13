<script setup lang="ts">
import type { Project } from '~/types/project'

defineProps<{ project: Project }>()

const card = useTemplateRef<HTMLElement>('card')
const visible = ref(false)

useIntersectionObserver(
  card,
  ([entry]) => {
    if (entry && entry.isIntersecting) visible.value = true
  },
  { threshold: 0.15 },
)
</script>

<template>
  <a
    ref="card"
    :href="project.link || ''"
    class="p-7 min-w-80 card-fade justify-end flex flex-col gap-5 relative transition-all bg-background-secondary border border-border hover:border-primary rounded-2xl"
    :class="{ 'pointer-events-none': project.construction, 'is-visible': visible }"
    target="_blank"
  >
    <div
      v-if="project.icon"
      class="flex items-center bg-background-tertiary justify-center w-10 h-10 rounded-xl border border-border"
    >
      {{ project.icon }}
    </div>
    <div class="flex flex-col gap-1">
      <span class="text-xl font-bold">{{ project.title }}</span>
      <p class="text-sm text-text-muted">{{ project.description }}</p>
    </div>
    <div class="flex gap-x-2 gap-y-2.5 flex-wrap text-xs text-text-muted font-syne-mono">
      <div v-if="project.alive" class="badge green flex gap-1 items-center">
        <div class="w-1.5 h-1.5 bg-green-500 rounded-full mr-1" />
        live
      </div>
      <div v-else-if="project.alive === false" class="badge red flex gap-1 items-center">
        <div class="w-1.5 h-1.5 bg-red-500 rounded-full mr-1" />
        offline
      </div>

      <span v-for="tech in project.tech" :key="tech" class="badge">{{ tech }} </span>
    </div>

    <div v-if="project.construction" class="wip-overlay">
      <ConstructionOverlay />
    </div>
  </a>
</template>

<style scoped>
@reference '~/assets/css/main.css';

.card-fade {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.card-fade.is-visible {
  opacity: 1;
  transform: translateY(0);
}

a,
a::before {
  transition: all 0.3s ease;
}

a::before {
  @apply text-text-muted;
  content: '↗';
  position: absolute;
  right: 24px;
  top: 24px;
}

a:not(.construction):hover {
  &::before {
    @apply text-primary scale-x-150;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 0%, var(--color-primary-light) 0%, transparent 60%);
  }
}

.badge {
  @apply rounded-full border px-2 py-1 border-border bg-background-tertiary whitespace-nowrap;

  &.green {
    @apply border-green-500/50 text-green-500;
  }
  &.red {
    @apply border-red-500/50 text-red-500;
  }
}

.wip-overlay {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background: color-mix(in srgb, var(--color-background) 55%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
