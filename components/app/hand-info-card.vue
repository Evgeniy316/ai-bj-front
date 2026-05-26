<script lang="ts" setup>
import { UI_TRANSLATIONS } from '~/utils/constants/translations'

defineProps<{
  info: Record<string, string | number>
}>()

const keyTranslations: Record<string, string> = {
  'Total': UI_TRANSLATIONS.TOTAL_SCORE,
}

const getTranslation = (key: string) => keyTranslations[key] || key
</script>

<template>
  <div class="hand-info-card">
    <div v-for="(value, key) in info" :key="key" class="info-row">
      <span class="info-label">{{ getTranslation(key) }}:</span>
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
  background-color: #000000;
  border: 2px solid #ffffff;
  color: white;
  border-radius: 8px;
  box-sizing: border-box;
  /* min-width: 200px; */
}

.info-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  /* align-items: center; */
  /* padding: 6px 0; */
  border-bottom: 1px solid #dee2e6;
  /* background-color: aqua; */
}

.info-row:last-child {
  border-bottom: none;
}

.info-label {
  font-weight: bold;
  text-transform: capitalize;
}

.info-value {
  font-weight: 500;
}
</style>
