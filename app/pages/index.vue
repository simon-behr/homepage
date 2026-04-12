<script setup lang="ts">
import type { Project } from "~/components/ProjectCard.vue";
import { useSmoothScroll } from "~/composable/useSmoothScroll";

useSeoMeta({
  title: 'Simon B. — Frontend Developer & Student Pilot',
  description: 'Vue 3, Nuxt 4, TypeScript — building clean interfaces with a pilot\'s eye for precision.',
  ogTitle: 'Simon B. — Frontend Developer & Student Pilot',
  ogDescription: 'Vue 3, Nuxt 4, TypeScript — building clean interfaces with a pilot\'s eye for precision.',
  ogImage: '/og-image.png',
})

const upperWords = ["Building", "interfaces", "that"];
const lowerWords = ["feel", "like", "flying."];

const startDate = new Date("2024-01-15");
const experience = new Date().getFullYear() - startDate.getFullYear();

const projects: Project[] = [
  {
    title: "METAR Explorer",
    description:
      "Real-time aviation weather decoded. Search any ICAO station, visualize wind, clouds and flight categories - parsed form raw METAR strings.",
    tech: ["Nuxt 4", "TypeScript", "Tailwind CSS"],
    icon: "✈",
    construction: true,
  },
];

const { scrollTo } = useSmoothScroll();
</script>
<template>
  <div class="md:pt-24 pt-12 pb-10 md:pb-20 flex flex-col gap-10 lg:gap-40 md:gap-20">
    <div class="flex flex-col gap-7">
      <div class="hero-tag">Frontend Developer &amp; Student Pilot</div>
      <h1 class="hero">
        <span v-for="(word, i) in upperWords" :key="word" class="word-wrap">
          <span class="word" :style="{ animationDelay: `${0.3 + i * 0.12}s` }"
            >{{ word }}&nbsp;&nbsp;</span
          >
        </span>
        <br class="hidden xl:block" />
        <span v-for="(word, i) in lowerWords" :key="word" class="word-wrap">
          <span
            class="word text-primary"
            :style="{ animationDelay: `${0.3 + (upperWords.length + i) * 0.12}s` }"
            >{{ word }}&nbsp;&nbsp;</span
          >
        </span>
      </h1>
      <span class="text-text-muted animate-fadeUp" style="animation-delay: 1s">
        Vue 3 · Nuxt · TypeScript · Tailwind — with a pilot's eye for precision <br />
        and a developer's instinct for clean systems.
      </span>
      <div class="pt-4 flex gap-4 animate-fadeUp" style="animation-delay: 1.2s">
        <button @click="scrollTo('#project-section')" class="button-primary filled">
          View projects
        </button>
      </div>
    </div>

    <div id="about-section" class="about-section" style="animation-delay: 0.2s">
      <div class="flex flex-col gap-4 flex-1">
        <h2 class="text-primary text-xs font-syne-mono">// about</h2>
        <p class="text-2xl">
          I'm a frontend developer with
          <span class="text-primary font-bold">{{ experience }}+ years of experience</span> and a
          thing for clean architecture. Currently also training for my
          <span class="text-primary font-bold">PPL</span> at a Flight School in Austria — which
          turns out to share a lot with writing smart code.
        </p>
      </div>
      <div class="flex flex-col gap-8 flex-1">
        <div>
          <span class="text-4xl text-primary font-bold"> {{ experience }}+ </span>
          <span class="text-xs text-text-muted">years shipping Vue & Nuxt</span>
        </div>
        <div>
          <span class="text-4xl text-primary font-bold"> DE/AT </span>
          <span class="text-xs text-text-muted">based between Germany & Austria</span>
        </div>
        <div>
          <span class="text-4xl text-primary font-bold"> PPL </span>
          <span class="text-xs text-text-muted">student pilot in training</span>
        </div>
      </div>
    </div>

    <MainSection id="project-section" class="lg:pt-16" title="selected work" sub-title="Projects">
      <div class="flex gap-4 flex-wrap">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.title"
          :project="project"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        />
      </div>
    </MainSection>

    <MainSection title="tech stack" sub-title="What I work with">
      <TechStack />
    </MainSection>
  </div>
</template>

<style scoped>
@reference '~/assets/css/main.css';
.hero-tag {
  @apply animate-fadeUp text-primary;
  font-family: "Syne Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.12em;
  opacity: 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero-tag::before {
  @apply bg-primary;
  content: "";
  display: block;
  width: 24px;
  height: 1px;
}

.hero {
  font-size: clamp(44px, 7vw, 80px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.word-wrap {
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
}

.word {
  display: inline-block;
  opacity: 0;
  transform: translateY(100%);
  animation: wordUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes wordUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about-section {
  @apply flex py-20 z-10 gap-16 items-center animate-fadeUp flex-col lg:flex-row;

  &::before {
    @apply border-t border-b border-border bg-background -left-side -right-side;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    height: 100%;
    z-index: -1;
  }
}
</style>
