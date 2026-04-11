<script setup lang="ts"></script>
<template>
  <div id="layout">
    <TheHeader />
    <main class="px-side pt-header relative">
      <ConstellationBackground />
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
#layout {
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
