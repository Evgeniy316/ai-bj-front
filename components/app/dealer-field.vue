<script lang="ts" setup>
import type { Card } from '~/types/round-response'
import { CardSuit, CardValue, mapApiCardToDisplayCard, mapApiCardsToDisplayCards } from '~/types/card'

const { user, session, loggedIn, clear, fetch} = useUserSession()

const dealerUpcard = computed(() => user.value?.dealerUpcard ?? null)
const dealerHand = computed(() => user.value?.dealer_hand ?? null)

const showRoundOverModal = ref()

onMounted(async() =>{
  await fetch()

})
const dealer_info = ref()

watch (() => user.value?.dealer_total, (newTotal) =>{
  if(newTotal){
    dealer_info.value = { Total: newTotal }
  }
  else{
    dealer_info.value = {Total : 0}
  }
})

watch(() => user.value, (isRoundOver) => {
  if (isRoundOver) {
    showRoundOverModal.value = true
  }
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
    <AppHandCard :cards="dealerCards" :hand-info="dealer_info" />
  </div>
</template>

<style scoped>
.dealer-field {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-start;
  padding: 16px;
  border: 2px solid #444;
  border-radius: 8px;
  /* background-color: #f9f9f9; */
  box-sizing: border-box;
}
</style>
