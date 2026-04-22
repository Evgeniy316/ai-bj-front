<script setup lang="ts">
const { user, fetch } = useUserSession()

const suggestion = ref<string | null>(null)

watch(() => user.value?.suggestion, (newSuggestion) => {
    console.log(`suggestion == ${user.value?.suggestion}`)
  suggestion.value = newSuggestion ?? null
}, { immediate: true })

onMounted(async () => {
  await fetch()
})
</script>

<template>
  <div class="suggestions-card">
    <div v-if="suggestion" class="suggestion-content">
      <span class="suggestion-label">Suggestion:</span>
      <span class="suggestion-text">{{ suggestion }}</span>
    </div>
  </div>
</template>

<style scoped>
.suggestions-card {
  padding: 16px;
  border: 2px solid #333;
  border-radius: 8px;
  margin: 8px;
  background-color: #f9f9f9;
}

.suggestion-content {
  display: flex;
  gap: 8px;
  align-items: center;
}

.suggestion-label {
  font-weight: bold;
  color: #333;
}

.suggestion-text {
  color: #555;
}
</style>
