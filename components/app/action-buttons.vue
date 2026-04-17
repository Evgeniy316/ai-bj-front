<script lang="ts" setup>
import type { ActionType } from '~/types/round-response'

const { user } = useUserSession()

const validActions = computed(() => user.value?.valid_actions ?? [])

const isActionDisabled = (action: ActionType) => {
  return !validActions.value.includes(action)
}
</script>

<template>
  <div class="action-buttons">
    <AppActionButton label="Hit" action="hit" :disabled="isActionDisabled('hit')" />
    <AppActionButton label="Stand" action="stand" :disabled="isActionDisabled('stand')" />
    <AppActionButton label="Double" action="double" :disabled="isActionDisabled('double')" />
    <AppActionButton label="Split" action="split" :disabled="isActionDisabled('split')" />
  </div>
</template>

<style scoped>
.action-buttons {
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding: 12px;
  border: 2px solid #555;
  border-radius: 8px;
  background-color: #f5f5f5;
}
</style>
