<script lang="ts" setup>
defineProps<{
  label: string;
}>();
</script>

<template>
  <button class="action-button">
    {{ label }}
  </button>
</template>

<style scoped>
.action-button {
  flex: 1;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #2c3e50;
  border: 2px solid #34495e;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-button:hover {
  background-color: #34495e;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.action-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.action-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}
</style>
