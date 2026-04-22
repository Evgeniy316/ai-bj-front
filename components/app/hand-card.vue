<script lang="ts" setup>
import { CardValue, CardSuit } from '~/types/card';

defineProps<{
  cards?: Array<{ value: CardValue; suit: CardSuit; faceUp: boolean }>;
  handInfo?: Record<string, string | number>;
  isActive?: boolean;
}>();
</script>

<template>
  <div class="hand-card" :class="{ 'active-hand': isActive }">
    <div class="cards-section">
      <template v-if="cards && cards.length > 0">
        <template v-for="(card, index) in cards" :key="index">
          <AppCardFaceUp v-if="card.faceUp" :value="card.value" :suit="card.suit" />
          <AppCardFaceDown v-else />
        </template>
      </template>
      <AppCardFaceDown v-else />
    </div>
    <AppHandInfoCard v-if="handInfo" :info="handInfo" />
  </div>
</template>

<style scoped>
.hand-card {
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 8px;
  box-sizing: border-box;
  border: 2px solid transparent;
  align-items: flex-start;
}

.hand-card.active-hand {
  border: 2px solid #4CAF50;
  border-radius: 8px;
  background-color: #f0f8f0;
}

.cards-section {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
</style>
