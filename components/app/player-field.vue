<script lang="ts" setup>
import { CardValue, CardSuit } from '~/types/card';
</script>

<template>
  <div class="player-field">
    <AppHandCard />
    <!-- <AppHandCard :cards="[{ value: CardValue.ACE, suit: CardSuit.SPADES, faceUp: true }]" /> -->
    <AppHandCard />
  </div>
</template>

<style scoped>
.player-field {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 16px;
  border: 2px solid #444;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-sizing: border-box;
}

.hand-card {
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px;
  box-sizing: border-box;
}
</style>
