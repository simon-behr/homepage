<script setup lang="ts">
const mobileNavOpen = ref(false);
</script>
<template>
  <div id="layout">
    <TheHeader v-model="mobileNavOpen"/>
    <main class="px-side pt-header relative">
      <MobileNav :visible="mobileNavOpen" @close="mobileNavOpen = false"/>
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
