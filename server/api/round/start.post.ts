import {Hand, RoundState, Card, ActionType, StartRoundResponse} from "~/types/round-response"
import {User} from "~/types/user_session"
import {ADDRES} from "~/utils/constants/backEndRoutes"


export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const response = await $fetch<StartRoundResponse>(`http://${ADDRES}/round/start`, {
      method: 'POST',
      body: body
    })
    const session = await getUserSession(event)
    console.log(response)
    console.log(response.round.player_hands)

    session.user.player_hands = null
    session.user.dealer_upcard = null
    session.user.valid_actions = null
    session.user.dealer_hand = null
    session.user.suggestion = ''
    session.user.dealer_total = null
    session.user.results = null
    session.user.strategy = null

    const user = <User>session.user
    await setUserSession(event, {
      ...session,
      user: {
        ...session.user,
        started_round: true,
        dealerUpcard: response.round.dealer_upcard,
        player_hands: response.round.player_hands,
        valid_actions: response.round.valid_actions,
        round_over: false,
        results: response.round.results,
        suggestion: response.round.suggestion,
        current_hand_idx: response.round.current_hand_idx,
        player_totals: response.round.player_totals,
        dealer_total: response.round.dealer_total,
        strategy: response.round.strategy,
      },
    })
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