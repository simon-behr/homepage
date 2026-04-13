<script setup lang="ts">
const data = [
  {
    label: "Frontend",
    items: ["Vue 3", "Nuxt 4", "TypeScript", "Tailwind CSS", "Pinia", "Svelte", "Electron"],
  },
  {
    label: "Backend & APIs",
    items: ["Node.js", "Supabase", "PostgreSQL", "Auth.js", "REST APIs"],
  },
  {
    label: "Tooling & DevOps",
    items: ["Git", "Docker", "Vercel", "Vitest", "Playwright"],
  },
];

const groups = useTemplateRef<HTMLElement>("groups");
const visible = ref(false);

useIntersectionObserver(
  groups,
  ([entry]) => {
    if (entry && entry.isIntersecting) visible.value = true;
  },
  { threshold: 0.15 },
);
</script>

<template>
  <div ref="groups" class="groups" :class="{ 'is-visible': visible }">
    <div
      v-for="(group, index) in data"
      :key="group.label"
      class="group group-fade"
      :style="{ transitionDelay: `${index * 0.1}s` }"
    >
      <div class="group-label">{{ group.label }}</div>
      <div class="tech-list">
        <div v-for="item in group.items" :key="item" class="tech">
          <div class="tech-dot" />
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.group {
  padding: 28px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px) saturate(1.4);
  -webkit-backdrop-filter: blur(20px) saturate(1.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2),
    0 4px 24px rgba(0, 0, 0, 0.3);
  transition:
    background 0.3s,
    border-color 0.3s,
    opacity 0.6s ease,
    transform 0.6s ease;
}

.group-fade {
  opacity: 0;
  transform: translateY(24px);
}

.groups.is-visible .group-fade {
  opacity: 1;
  transform: translateY(0);
}

.groups {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 12px;
}

.group:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.13);
}

.group-label {
  font-family: "Syne Mono", monospace;
  font-size: 9px;
  letter-spacing: 0.16em;
  color: var(--color-text-muted);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.group-label::before {
  content: "";
  display: block;
  width: 16px;
  height: 1px;
  background: var(--color-text-muted);
}

.tech-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tech {
  font-size: 13px;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: default;
  transition: color 0.2s;
}

.tech:hover {
  color: var(--color-primary);
}

.tech-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
  transition: background 0.2s;
}

.tech:hover .tech-dot {
  background: var(--color-primary);
}
</style>
