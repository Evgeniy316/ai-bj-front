<script lang="ts" setup>
const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  close: []
  continue: []
}>()
</script>

<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-content">
      <h2>Round Over</h2>
      <button class="action-button" @click="emit('continue')">
        Continue
      </button>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 300px;
}

.modal-content h2 {
  margin-bottom: 1.5rem;
  color: #333;
}

.action-button {
  padding: 0.75rem 2rem;
  font-size: 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.action-button:hover {
  background-color: #45a049;
}
</style>
