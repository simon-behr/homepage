<template>
  <div class="wip">
    <div class="wip-icon">⚙</div>
    <div class="wip-title">under construction</div>
    <div class="wip-sub">coming soon</div>
    <div class="progress-bar">
      <div class="progress-fill" />
    </div>
  </div>
</template>

<style scoped>
.wip {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.wip-icon {
  font-size: 26px;
  opacity: 0.6;
  animation: spin 6s linear infinite;
  color: #ffffff;
}

.wip-title {
  font-family: "Syne Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  color: #fac775;
}

.wip-sub {
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0.04em;
}

.progress-bar {
  width: 120px;
  height: 2px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 99px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  width: 35%;
  background: linear-gradient(90deg, #fac775, #ef9f27);
  border-radius: 99px;
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
