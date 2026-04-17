import type { Card } from "./types/round-response"

declare module '#auth-utils' {
  export interface User {
    id: string
    started_round: boolean,
    dealerUpcard: Card?,
    player_hands: Hand[],
    valid_actions: ActionType[],
    dealer_hand: Hand[],
  }

  // export function useUserSession(): {
  //   user: Ref<User | null>
  //   session: any
  //   loggedIn: Ref<boolean>
  //   fetch: () => Promise<void>
  //   clear: () => Promise<void>
  // }
   interface UserSession {
    user: User | null
  }
  export function getUserSession(event: H3Event): Promise<UserSession>
}
