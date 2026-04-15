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
    console.log(session)
    console.log("session")
    const user = <User>session.user
    await setUserSession(event, {
      ...session,
      user: {
        ...session.user,
        started_round: true,
      },
    })
    console.log(user.started_round)
    console.log("user.started_round")
    return {
      player_hand: <Hand>response.round.player_hands[0],
      dealer_upcard: <Card>response.round.dealer_upcard,
      valid_actions: <ActionType[]>response.round.valid_actions,
      suggestion: response.round.suggestion,
      round_over: response.round.round_over,
    }

  } catch (error: any) {
    console.log("Didn't return. Got error")
    throw createError(error)
    
  }
})