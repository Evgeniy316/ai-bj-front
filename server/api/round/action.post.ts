import { StartRoundResponse } from "~/types/round-response"
import { User } from "~/types/user_session"
import {ADDRES} from "~/utils/constants/backEndRoutes"

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const response = await $fetch<StartRoundResponse>(`http://${ADDRES}/round/action`, {
      method: 'POST',
      body: body
    })
    const session = await getUserSession(event)
    console.log(response)
    console.log(response.round.player_hands)
    console.log(`Dealer hand - ${response.round.dealer_hand}`)
    session.user.player_hands = null
    session.user.dealer_upcard = null
    session.user.valid_actions = null
    session.user.dealer_hand = null
    session.user.suggestion = ''
    session.user.dealer_total = null
    session.user.results = null


    
    await setUserSession(event, {
        ...session,
        user: {
        ...session.user,
        started_round: true,
        dealerUpcard: response.round.dealer_upcard,
        player_hands: response.round.player_hands,
        valid_actions: response.round.valid_actions,
        dealer_hand: response.round.dealer_hand,
        round_over: response.round.round_over,
        results: response.round.results,
        suggestion: response.round.suggestion,
        current_hand_idx: response.round.current_hand_idx,
        player_totals: response.round.player_totals,
        dealer_total: response.round.dealer_total
      },
    })
    const updatedSession = await getUserSession(event)
    const user = <User>updatedSession.user
    if(response.round.results){
      return {
        results: response.round.results
      }
    }
    else return{
       results: null
    }
    // console.log(`session.user : \n ${user.valid_actions}`)


  } catch (error: any) {
    console.log("Didn't return. Got error")
    throw createError(error)
    
  }
})