<script setup lang="ts">
const data = [
  {
    label: 'Frontend',
    items: ['Vue 3', 'Nuxt 4', 'TypeScript', 'Tailwind CSS', 'Pinia', 'Svelte', 'Electron'],
  },
  {
    label: 'Backend & APIs',
    items: ['Node.js', 'Supabase', 'PostgreSQL', 'Auth.js', 'REST APIs'],
  },
  {
    label: 'Tooling & DevOps',
    items: ['Git', 'Docker', 'Netlify', 'Vitest', 'Playwright'],
  },
]

const groups = useTemplateRef<HTMLElement>('groups')
const visible = ref(false)

useIntersectionObserver(
  groups,
  ([entry]) => {
    if (entry && entry.isIntersecting) visible.value = true
  },
  { threshold: 0.15 },
)
</script>

<template>
  <div
    ref="groups"
    class="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-3"
    :class="{ 'is-visible': visible }"
  >
    <div
      v-for="(group, index) in data"
      :key="group.label"
      class="group group-fade"
      :style="{ transitionDelay: `${index * 0.1}s` }"
    >
      <div
        class="group-label flex items-center gap-2 font-syne-mono text-xs tracking-widest text-text-muted mb-5"
      >
        {{ group.label }}
      </div>
      <div class="flex flex-col gap-2.5">
        <div
          v-for="item in group.items"
          :key="item"
          class="tech flex items-center gap-2.5 text-sm text-text cursor-default transition-colors duration-200 hover:text-primary"
        >
          <div
            class="tech-dot w-1 h-1 rounded-full bg-white/15 shrink-0 transition-colors duration-200"
          />
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference '~/assets/css/main.css';

.group {
  @apply p-7 rounded-2xl bg-white/3 backdrop-blur-2xl border border-white/8 transition-all duration-300 hover:bg-white/5 hover:border-white/13;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2),
    0 4px 24px rgba(0, 0, 0, 0.3);
}

.group-fade {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.is-visible .group-fade {
  opacity: 1;
  transform: translateY(0);
}

.group-label::before {
  content: '';
  display: block;
  width: 16px;
  height: 1px;
  @apply bg-text-muted;
}

.tech:hover .tech-dot {
  @apply bg-primary;
}
</style>
