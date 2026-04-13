<script setup lang="ts">
import { useConstellation } from '~/composable/useConstellation'

const canvas = useTemplateRef<HTMLCanvasElement>('canvas')
useConstellation(canvas)
</script>

<template>
  <canvas ref="canvas" class="constellation" />
</template>

<style scoped>
.constellation {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -10;
}
</style>
