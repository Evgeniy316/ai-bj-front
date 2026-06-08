<script lang="ts" setup>
import type { ActionType } from '~/types/round-response'
import { ACTION_TRANSLATIONS } from '~/utils/constants/translations'

const { user } = useUserSession()

const validActions = computed(() => user.value?.valid_actions ?? [])

const isActionDisabled = (action: ActionType) => {
  return !validActions.value.includes(action)
}
</script>

<template>
  <div class="action-buttons">
    <AppActionButton :label="ACTION_TRANSLATIONS.HIT" action="hit" :disabled="isActionDisabled('hit')" />
    <AppActionButton :label="ACTION_TRANSLATIONS.STAND" action="stand" :disabled="isActionDisabled('stand')" />
    <AppActionButton :label="ACTION_TRANSLATIONS.DOUBLE" action="double" :disabled="isActionDisabled('double')" />
    <AppActionButton :label="ACTION_TRANSLATIONS.SPLIT" action="split" :disabled="isActionDisabled('split')" />
  </div>
</template>

<style scoped>
.action-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 12px;
  padding: 12px;
  border: 2px solid #555;
  border-radius: 8px;
  background-color: white;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
</style>
