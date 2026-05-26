<script lang="ts" setup>
import type { RoundResult } from '~/types/round-response'
import { GameResultTranslation, UI_TRANSLATIONS } from '~/utils/constants/translations'

const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  close: []
  continue: []
}>()

const { user } = useUserSession()

const isInitial = ref(false)
const isSlideOut = ref(false)
const results = ref<RoundResult[] | null>(null)

watch(() => props.show, (newVal) => {
  if (newVal) {
    isSlideOut.value = false
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

const translateResult = (result: string): string => {
  const upperResult = result.toUpperCase()
  return GameResultTranslation[upperResult as keyof typeof GameResultTranslation] || result
}

const displayResults = computed(() => {
  if (!results.value || results.value.length === 0) return ''
  
  if (results.value.length === 1) {
    return `${UI_TRANSLATIONS.RESULT}: ${translateResult(results.value[0] ?? '')}`
  }
  
  const translatedResults = results.value.map(r => translateResult(r)).join(' | ')
  return `${UI_TRANSLATIONS.RESULTS}: ${translatedResults}`
})

const handleContinue = () => {
  isSlideOut.value = true
  setTimeout(() => {
    emit('continue')
  }, 400)
}
</script>

<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-content" :class="{ 'initial': isInitial, 'slide-out': isSlideOut }">
      <h2>{{ UI_TRANSLATIONS.ROUND_OVER }}</h2>
      <p v-if="displayResults" class="results-text">{{ displayResults }}</p>
      <button class="action-button" @click="handleContinue">
        {{ UI_TRANSLATIONS.CONTINUE }}
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
  justify-content: flex-end;
  align-items: stretch;
  z-index: 1000;
  pointer-events: none;
}

.modal-content {
  background: rgb(71, 93, 100);
  padding: 2rem;
  box-shadow: -4px 0 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 33.333%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s ease;
  transform: translateX(100%);
  animation: slideIn 0.4s ease forwards;
  pointer-events: auto;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

@keyframes slideIn {
  to {
    transform: translateX(0);
  }
}

.modal-content.slide-out {
  animation: slideOut 0.4s ease forwards;
}

@keyframes slideOut {
  to {
    transform: translateX(100%);
  }
}

.modal-content h2 {
  margin-bottom: 1.5rem;
  color: white;
}

.results-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.5rem;
  text-transform: capitalize;
  
}

.action-button {
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background-color: black;
  color: white;
  border: 2px solid white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.action-button:hover {
  background-color: rgb(208, 112, 23);
}

@media (max-width: 1000px) {
  .modal-overlay {
    justify-content: center;
    align-items: flex-end;
  }

  .modal-content {
    width: 100%;
    height: auto;
    max-height: 50%;
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(100%);
    animation: slideInBottom 0.4s ease forwards;
  }

  @keyframes slideInBottom {
    to {
      transform: translateY(0);
    }
  }

  .modal-content.slide-out {
    animation: slideOutBottom 0.4s ease forwards;
  }

  @keyframes slideOutBottom {
    to {
      transform: translateY(100%);
    }
  }
}

</style>
