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
    <div class="left-section">
      <AppHandCard 
        v-for="(hand, index) in displayHands" 
        :key="index"
        :cards="hand"
        :handInfo="getHandInfo(index)"
        :isActive="isActiveHand(index)"
      />
    </div>
    <div class="right-section">
      <AppActionButtons />
    </div>
  </div>
</template>

<style scoped>
.player-field {
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 16px;
  border: 2px solid #444;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-sizing: border-box;
}

.left-section {
  flex: 2;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
}

.right-section {
  flex: 1;
  display: flex;
  align-items: stretch;
}

.hand-card {
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px;
  box-sizing: border-box;
}
</style>
