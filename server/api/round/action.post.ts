import { StartRoundResponse } from "~/types/round-response"
import { User } from "~/types/user_session"

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const response = await $fetch<StartRoundResponse>(`http://localhost:8000/round/action`, {
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

    
    await setUserSession(event, {
        ...session,
        user: {
        ...session.user,
        started_round: true,
        dealerUpcard: response.round.dealer_upcard,
        player_hands: response.round.player_hands,
        valid_actions: response.round.valid_actions,
        dealer_hand: response.round.dealer_hand,

        },
    })
    const updatedSession = await getUserSession(event)
    const user = <User>updatedSession.user
    
    // console.log(`session.user : \n ${user.valid_actions}`)


  } catch (error: any) {
    console.log("Didn't return. Got error")
    throw createError(error)
    
  }
})