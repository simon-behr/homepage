<script setup lang="ts"></script>

<template>
  <footer
    class="text-sm z-10 bg-background h-footer border-t border-t-border w-full px-side flex items-center justify-between text-text-muted"
  >
    <span class="font-syne-mono text-xs"> &copy; {{ new Date().getFullYear() }} Simon B. </span>
    <div class="flex items-center gap-4">
      <a href="https://github.com/simon-behr" target="_blank">GitHub</a>
      <a href="https://www.linkedin.com/in/simon-behr-831b942a1/" target="_blank">LinkedIn</a>
      <a href="mailto:behrsimon08@gmail.com">Email</a>
    </div>
  </footer>
</template>

<style scoped>
@reference '~/assets/css/main.css';
a {
  @apply hover:text-text duration-200;
}
</style>
