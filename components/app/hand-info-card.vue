<script lang="ts" setup>
defineProps<{
  info: Record<string, string | number>
}>()
</script>

<template>
  <div class="hand-info-card">
    <div v-for="(value, key) in info" :key="key" class="info-row">
      <span class="info-label">{{ key }}:</span>
      <span class="info-value">{{ value }}</span>
    </div>
  </div>
</template>

<style scoped>
.hand-info-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background-color: #f8f9fa;
  border: 2px solid #333;
  border-radius: 8px;
  box-sizing: border-box;
  min-width: 200px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  border-bottom: 1px solid #dee2e6;
}

.info-row:last-child {
  border-bottom: none;
}

.info-label {
  font-weight: bold;
  color: #495057;
  text-transform: capitalize;
}

.info-value {
  color: #212529;
  font-weight: 500;
}
</style>
