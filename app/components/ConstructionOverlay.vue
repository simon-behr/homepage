<script setup lang="ts"></script>
<template>
  <div class="flex flex-col items-center justify-center gap-2.5">
    <div class="wip-icon">⚙</div>
    <div class="font-syne-mono text-xs tracking-widest text-warning">under construction</div>
    <div class="text-xs tracking-wider">coming soon</div>
    <div class="progress-bar">
      <div class="progress-fill" />
    </div>
  </div>
</template>

<style scoped>
@reference '~/assets/css/main.css';

.wip-icon {
  @apply text-3xl opacity-60;
  animation: spin 6s linear infinite;
}

.progress-bar {
  @apply w-30 h-0.5 bg-text-muted/9 rounded-full overflow-hidden;
}

.progress-fill {
  @apply h-full bg-linear-to-r from-warning to-warning-dark rounded-full;
  animation: prog 2s ease-in-out infinite alternate;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes prog {
  from {
    width: 25%;
  }
  to {
    width: 55%;
  }
}
</style>
