<script lang="ts" setup>
import { CardValue, CardSuit } from '~/types/card';

const props = defineProps<{
  cards?: Array<{ value: CardValue; suit: CardSuit; faceUp: boolean }>;
  handInfo?: Record<string, string | number>;
  isActive?: boolean;
}>();

const hasMoreThanFourCards = computed(() => {
  return props.cards && props.cards.length > 2;
});
</script>

<template>
  <div class="hand-card" :class="{ 'active-hand': isActive }">
    <div class="cards-section" :class="{ 'scrollable': hasMoreThanFourCards }">
      <template v-if="cards && cards.length > 0">
        <template v-for="(card, index) in cards" :key="index">
          <div class="card">
            <AppCardFaceUp v-if="card.faceUp" :value="card.value" :suit="card.suit" />
            <AppCardFaceDown v-else />
          </div>
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

.card {
  flex-shrink: 0;
}

.card + .card {
  margin-left: -50px;
  z-index: 1;
}

.cards-section {
  display: flex;
  flex-direction: row;
  overflow-x: scroll; /* Always scroll, not auto - this reserves scrollbar space */
  overflow-y: hidden;
  max-width: 140px; /* Fixed width for 2 cards: 80px (first card) + 30px (second card visible part) = 110px */
  padding-bottom: 12px; /* Always reserve space for scrollbar */
  scroll-behavior: smooth;
}

/* Always reserve space for scrollbar track */
.cards-section::-webkit-scrollbar {
  height: 10px;
  background: transparent; /* Invisible by default */
}

.cards-section::-webkit-scrollbar-track {
  background: transparent; /* Invisible by default */
  border-radius: 5px;
}

.cards-section::-webkit-scrollbar-thumb {
  background: transparent; /* Invisible by default */
  border-radius: 5px;
}

/* Show scrollbar only when scrollable class is applied (>4 cards) */
.cards-section.scrollable::-webkit-scrollbar {
  background: #e0e0e0;
}

.cards-section.scrollable::-webkit-scrollbar-track {
  background: #e0e0e0;
  border: 1px solid #ccc;
}

.cards-section.scrollable::-webkit-scrollbar-thumb {
  background: #666;
  border: 1px solid #555;
  min-width: 40px;
}

.cards-section.scrollable::-webkit-scrollbar-thumb:hover {
  background: #444;
  cursor: grab;
}

.cards-section.scrollable::-webkit-scrollbar-thumb:active {
  background: #333;
  cursor: grabbing;
}

/* Firefox scrollbar styling */
.cards-section {
  scrollbar-width: auto;
  scrollbar-color: transparent transparent; /* Invisible by default */
}

.cards-section.scrollable {
  scrollbar-color: #666 #e0e0e0; /* Visible when scrollable */
}
</style>
