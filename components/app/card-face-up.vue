<script lang="ts" setup>
import { CardValue, CardSuit } from '~/types/card';

defineProps<{
  value: CardValue;
  suit: CardSuit;
}>();

const getSuitColor = (suit: CardSuit) => {
  return suit === CardSuit.HEARTS || suit === CardSuit.DIAMONDS ? 'red' : 'black';
};
</script>

<template>
  <div class="card-face-up">
    <div class="card-corner top-left" :style="{ color: getSuitColor(suit) }">
      <div class="card-value">{{ value }}</div>
      <div class="card-suit">{{ suit }}</div>
    </div>
    <div class="card-corner bottom-right" :style="{ color: getSuitColor(suit) }">
      <div class="card-value">{{ value }}</div>
      <div class="card-suit">{{ suit }}</div>
    </div>
  </div>
</template>

<style scoped>
.card-face-up {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 3px solid #333;
  border-radius: 12px;
  width: 80px;
  height: 120px;
  box-sizing: border-box;
}

.card-corner {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  line-height: 1;
}

.top-left {
  top: 6px;
  left: 8px;
}

.bottom-right {
  bottom: 6px;
  right: 8px;
  transform: rotate(180deg);
}

.card-value {
  font-size: 18px;
  margin-bottom: 2px;
}

.card-suit {
  font-size: 16px;
}
</style>
