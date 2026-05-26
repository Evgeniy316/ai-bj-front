<script setup lang="ts">
import { UI_TRANSLATIONS, ACTION_TRANSLATIONS } from '~/utils/constants/translations'

const { user, fetch } = useUserSession()

const suggestion = ref<string | null>(null)

const strategy = ref<string | null>(null)

const isExpanded = ref(false)

watch(() => user.value?.suggestion, (newSuggestion) => {
    // console.log(`suggestion == ${user.value?.suggestion}`)
  suggestion.value = newSuggestion ?? null
}, { immediate: true })

watch(() => user.value?.strategy, (newStrategy) =>{
  strategy.value = newStrategy ?? null
},{ immediate: true })

const translateSuggestion = (suggestion: string | null): string => {
  if (!suggestion) return ''
  const upperSuggestion = suggestion.toUpperCase()
  return ACTION_TRANSLATIONS[upperSuggestion as keyof typeof ACTION_TRANSLATIONS] || suggestion
}

const translateStrategy = (strategy: string | null): string =>{
  if (!strategy) return ''
  const upperStrategy = strategy.toUpperCase()
  return ACTION_TRANSLATIONS[upperStrategy as keyof typeof ACTION_TRANSLATIONS] || suggestion
}

const toggleSuggestions = () => {
  isExpanded.value = !isExpanded.value
}

onMounted(async () => {
  await fetch()
})
</script>

<template>
  <div class="suggestions-card" :class="isExpanded ? 'suggestions-card-expanded' : 'suggestions-card-collapsed' " @click="toggleSuggestions">
    <div v-if="!isExpanded" class="suggestions-collapsed">
      <span class="suggestions-title">{{ UI_TRANSLATIONS.SUGGESTIONS }}</span>
    </div>
    <div v-else class="suggestions-expanded">
      <div class="suggestion-content">
        <span class="suggestion-label">{{ UI_TRANSLATIONS.SUGGESTION }}</span>
        <span v-if="suggestion" class="suggestion-text">{{ translateSuggestion(suggestion) }}</span>
      </div>
      <div class="suggestion-content">
        <span class="suggestion-label">{{ UI_TRANSLATIONS.STRATEGY }}</span>
        <span v-if="strategy" class="suggestion-text">{{ translateStrategy(strategy) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.suggestions-card {
  padding: 16px;
  border: 2px solid #333;
  border-radius: 8px;
  margin: 8px;
  /* background-color: rgb(208, 112, 23); */
  cursor: pointer;
  transition: background-color 0.2s;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  width: 30%;
  min-width: 250px;
  align-self: left;
}
.suggestions-card-collapsed{
  background-color: rgb(208, 112, 23); 
  color: white;
}
.suggestions-card-expanded{
  background-color: white;
  color: black;
}


.suggestions-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)
}

.suggestions-collapsed {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.suggestions-title {
  font-weight: bold;
  font-size: 18px;
  /* color: #333; */
}

.suggestions-expanded {
  display: flex;
  /* background-color: white; */
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.suggestion-content {
  display: flex;
  gap: 8px;
  align-items: center;
}

.suggestion-label {
  font-weight: bold;
  color: black;
}

.suggestion-text {
  color: black;
}
</style>
