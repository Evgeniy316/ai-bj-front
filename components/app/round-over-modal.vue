<script lang="ts" setup>
import type { RoundResult } from '~/types/round-response'

const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  close: []
  continue: []
}>()

const { user } = useUserSession()

const isInitial = ref(false)
const results = ref<RoundResult[] | null>(null)

watch(() => props.show, (newVal) => {
  if (newVal) {
    isInitial.value = true
    setTimeout(() => {
      isInitial.value = false
    }, 1900)
  }
})

watch(() => user.value?.results, (newResults) => {
  if (newResults) {
    results.value = newResults
  }
})

const displayResults = computed(() => {
  if (!results.value || results.value.length === 0) return ''
  
  if (results.value.length === 1) {
    return `Result: ${results.value[0]}`
  }
  
  return `Results: ${results.value.join(' | ')}`
})
</script>

<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-content" :class="{ 'initial': isInitial }">
      <h2>Round Over</h2>
      <p v-if="displayResults" class="results-text">{{ displayResults }}</p>
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
  opacity: 0.3;
  transition: opacity 0.3s ease;
}

.modal-content.initial {
  opacity: 1;
}

.modal-content:hover {
  opacity: 1;
}

.modal-content h2 {
  margin-bottom: 1.5rem;
  color: #333;
}

.results-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: #4CAF50;
  margin-bottom: 1.5rem;
  text-transform: capitalize;
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
