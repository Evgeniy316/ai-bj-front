<script lang="ts" setup>
import type { Card } from '~/types/round-response'
import { CardSuit, CardValue, mapApiCardToDisplayCard, mapApiCardsToDisplayCards } from '~/types/card'

const { user, session, loggedIn, clear, fetch} = useUserSession()

const dealerUpcard = computed(() => user.value?.dealerUpcard ?? null)
const dealerHand = computed(() => user.value?.dealer_hand ?? null)



onMounted(async() =>{
  await fetch()

})
// const dealerCards = computed(() => {

//   if (!dealerUpcard) return []
//   return [mapApiCardToDisplayCard(dealerUpcard.value, true)]
// })

// Compute the cards to display
const dealerCards = computed(() => {
  // If dealer hand is revealed (round over), show all cards face up
  if (dealerHand.value && dealerHand.value.length > 0) {
    return mapApiCardsToDisplayCards(dealerHand.value, true)
  }
  
  // Otherwise, show upcard + face down card
  if (dealerUpcard.value) {
    return [
      mapApiCardToDisplayCard(dealerUpcard.value, true),
      // Face down card placeholder
      { value: CardValue.ACE, suit: CardSuit.SPADES, faceUp: false }
    ]
  }
  
  // Fallback: no cards
  return []
})
const showFaceDownCard = computed(() => {
  return dealerUpcard.value && !dealerHand.value
})
</script>

<template>
  <div class="dealer-field">
    <div class="cards-container">
      <!-- Render all dealer cards dynamically -->
      <div 
        v-for="(card, index) in dealerCards" 
        :key="index"
        class="card-wrapper"
        
      >
      <!-- :style="{ left: index > 0 ? `-${40 * index}px` : '0', zIndex: dealerCards.length - index }"?> -->
        <AppHandCard :cards="[card]" />
      </div>
      
      <!-- Fallback when no cards at all -->
      <div v-if="dealerCards.length === 0" class="card-wrapper">
        <AppHandCard />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dealer-field {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
  border: 2px solid #444;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-sizing: border-box;
}

.cards-container {
  position: relative;
  display: flex;
  align-items: center;
}

.card-wrapper {
  position: relative;
}

.first-card {
  z-index: 2;
}

.second-card {
  position: relative;
  left: -20px;
  z-index: 1;
}
</style>
