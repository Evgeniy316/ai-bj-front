<script lang="ts" setup>
import { CardValue, CardSuit } from '~/types/card';

defineProps<{
  cards?: Array<{ value: CardValue; suit: CardSuit; faceUp: boolean }>;
}>();
</script>

<template>
  <div class="hand-card">
    <template v-if="cards && cards.length > 0">
      <template v-for="(card, index) in cards" :key="index">
        <AppCardFaceUp v-if="card.faceUp" :value="card.value" :suit="card.suit" />
        <AppCardFaceDown v-else />
      </template>
    </template>
    <AppCardFaceDown v-else />
  </div>
</template>

<style scoped>
.hand-card {
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px;
  box-sizing: border-box;
  border: 2px solid pink;
}
</style>
