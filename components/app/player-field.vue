<script lang="ts" setup>
import type { Hand } from '~/types/round-response';
import { mapApiCardsToDisplayCards } from '~/types/card';

const { user, fetch } = useUserSession();
const playerHands = computed(() => user.value?.player_hands ?? []);
const playerTotals = computed(() => user.value?.player_totals ?? []);
const currentHandIdx = computed(() => user.value?.current_hand_idx ?? null);

onMounted(async () => {
  await fetch();
});

const displayHands = computed(() => {
  if (!playerHands.value || playerHands.value.length === 0) return [];
  return playerHands.value.map((hand: Hand) => mapApiCardsToDisplayCards(hand, true));
});

// Create hand info for each hand with its total
const getHandInfo = (index: number) => {
  const total = playerTotals.value[index];
  if (total === undefined) return undefined;
  
  return {
    'Total': total
  };
};

// Check if this hand is the active one
const isActiveHand = (index: number) => {
  return currentHandIdx.value === index;
};
</script>

<template>
  <div class="player-field">
    <AppHandCard 
      v-for="(hand, index) in displayHands" 
      :key="index"
      :cards="hand"
      :handInfo="getHandInfo(index)"
      :isActive="isActiveHand(index)"
    />
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
