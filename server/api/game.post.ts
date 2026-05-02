import {Hand} from "~/types/round-response"
import {ADDRES} from "~/utils/constants/backEndRoutes"


export default defineEventHandler(async (event) => {
  try {
    const response = await $fetch<{ session_id: string }>(`http://${ADDRES}/session`, {
      method: 'POST'
    })
    // await clearUserSession(event)
    await setUserSession(event, {
      user: { 
        id: response.session_id,
        started_round: false,
        dealerUpcard: null,
        player_hands: null,
      }
    })
    
    return response.session_id
  } catch (error: any) {
    throw createError(error)
    
  }
})