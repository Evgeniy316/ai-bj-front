import type { ActionType, Hand, Card } from './round-response'

export interface User {
    id: string
    started_round: boolean
    valid_actions?: ActionType[]
    player_hands?: Hand[]
    dealerUpcard?: Card
    dealer_upcard?: Card,
    dealer_hand?: Hand[]
  }