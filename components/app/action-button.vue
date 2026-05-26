<script lang="ts" setup>
import type { ActionType } from '~/types/round-response';

const props = defineProps<{
  label: string;
  disabled?: boolean;
  action: ActionType;
}>();

const currentAction = inject<Ref<ActionType | null>>('currentAction')

const handleClick = () => {
  if (currentAction) {
    currentAction.value = props.action
  }
}

</script>

<template>
  <button class="action-button" :disabled="disabled" @click="handleClick">
    {{ label }}
  </button>
</template>

<style scoped>
.action-button {
  flex: 1;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: white;
  background-color: black;
  border: 2px solid black;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.action-button:active {
  transform: translateY(0);
}

.action-button:disabled {
  background-color: rgb(71, 93, 100);
  /* opacity: 0.6; */
  cursor: not-allowed;
  transform: none;
}
</style>
