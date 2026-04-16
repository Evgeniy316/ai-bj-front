import {Hand, RoundState, Card, ActionType, StartRoundResponse} from "~/types/round-response"
import {User} from "~/types/user_session"

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    // console.log(body)
    const response = await $fetch<StartRoundResponse>(`http://localhost:8000/round/start`, {
      method: 'POST',
      body: body
    })
    const session = await getUserSession(event)
    // console.log(response)
    // console.log(response.round.dealer_upcard)
    // console.log("response.round.dealer_upcard")
    const user = <User>session.user
    await setUserSession(event, {
      ...session,
      user: {
        ...session.user,
        started_round: true,
        dealerUpcard: response.round.dealer_upcard
      },
    })
    const updatedSession = await getUserSession(event)
    console.log("After setting dealerUpcard")
    console.log("Dealer upcard")
    console.log(updatedSession.user?.dealerUpcard)
    console.log("Started round")
    console.log(updatedSession.user.started_round)
    // console.log("After setting dealerUpcard")
    // console.log(session.user.dealerUpcard)
    console.log(response)
    // session.value = await getUserSession(event)
    // console.log(session)
    // console.log("session")
    return {
      player_hand: <Hand>response.round.player_hands[0],
      dealer_upcard: <Card>response.round.dealer_upcard,
      valid_actions: <ActionType[]>response.round.valid_actions,
      suggestion: response.round.suggestion,
    }

  } catch (error: any) {
    console.log("Didn't return. Got error")
    throw createError(error)
    
  }
})