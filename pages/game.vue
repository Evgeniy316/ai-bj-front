<script lang="ts" setup>
import { FrontPaths } from '~/utils/constants/frontEndRoutes'
import type { Hand, Card, ActionType } from '~/types/round-response'

const { user, session, loggedIn, clear, fetch} = useUserSession()


const playerHand = ref<Hand | null>(null)
const dealerUpcard = ref<Card | null>(null)
const validActions = ref<ActionType[]>([])
const suggestion = ref<string | null>(null)

provide('playerHand', playerHand)
provide('dealerUpcard', dealerUpcard)
provide('validActions', validActions)
provide('suggestion', suggestion)

onMounted(async() =>{
  // await nextTick()
  await fetch() 
  // console.log(user.value.dealerUpcard)
  // console.log("user.value.dealerUpcard")
  // if(user.value?.dealerUpcard) {
  //   dealerUpcard.value = user.value.dealerUpcard
  // }
  if(loggedIn.value){
      if(user.value && !user.value.started_round){
        try {
          const response = await $fetch<{
          player_hand: Hand
          dealer_upcard: Card
          valid_actions: ActionType[]
          suggestion: string | null
        }>(`${FrontPaths.API}${FrontPaths.ROUND_START}`, {
          method: "POST",
          body: {
            session_id: user.value.id
          }
        })
        // nextTick()
        await fetch() 
        console.log(user.value.dealerUpcard)
        console.log("user.value.dealerUpcard")
        console.log(user.value.started_round)
        console.log("Did we start the round")

        if (response) {
          playerHand.value = response.player_hand
          dealerUpcard.value = response.dealer_upcard
          validActions.value = response.valid_actions
          suggestion.value = response.suggestion
        }  
        console.log("Checking ")
        console.log(dealerUpcard.value)
      } catch (error) {
        console.error('Some kind of error:', error)
      }
    }
  }
})
</script>


<template>
  <div class="game-page">
    <AppGameCard />
  </div>
</template>




<style scoped>
.game-page {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
