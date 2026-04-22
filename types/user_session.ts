import type { ActionType, Hand, Card } from './round-response'

export interface User {
    id: string
    started_round: boolean
    valid_actions?: ActionType[]
    player_hands?: Hand[]
    player_totals?: number[]
    current_hand_idx?: number | null
    dealerUpcard?: Card
    dealer_upcard?: Card,
    dealer_hand?: Hand[]
  }