export interface Card {
  rank: number
  suit: string
}

export interface Hand extends Array<Card> {}

export type ActionType = 'hit' | 'stand' | 'double' | 'split'

export type RoundResult = 'win' | 'loss' | 'push' | 'bust' | 'blackjack'

export interface RoundState {
  player_hands: Hand[]
  player_totals: number[]
  current_hand_idx: number | null
  dealer_upcard: Card
  dealer_hand: Hand | null
  dealer_total: number | null
  split_in_progress: boolean
  valid_actions: ActionType[]
  suggestion: string | null
  round_over: boolean
  results: RoundResult[] | null
}

export interface StartRoundResponse {
  rounds_played: number
  round: RoundState
}

export interface RoundSummary {
  results: RoundResult[]
  hands: Hand[]
  dealer: Hand
}

export interface HistoryResponse {
  rounds_played: number
  history: RoundSummary[]
}

export interface SessionResponse {
  session_id: string
}

export interface ActionResponse {
  rounds_played: number
  round: RoundState | null
}
