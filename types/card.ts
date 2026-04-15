export enum CardValue {
  ACE = 'A',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
  TEN = '10',
  JACK = 'J',
  QUEEN = 'Q',
  KING = 'K'
}

export enum CardSuit {
  HEARTS = '♥',
  DIAMONDS = '♦',
  CLUBS = '♣',
  SPADES = '♠'
}

export interface DisplayCard {
  value: CardValue
  suit: CardSuit
  faceUp: boolean
}

export const mapRankToValue = (rank: number): CardValue => {
  const mapping: Record<number, CardValue> = {
    1: CardValue.ACE,
    2: CardValue.TWO,
    3: CardValue.THREE,
    4: CardValue.FOUR,
    5: CardValue.FIVE,
    6: CardValue.SIX,
    7: CardValue.SEVEN,
    8: CardValue.EIGHT,
    9: CardValue.NINE,
    10: CardValue.TEN,
    11: CardValue.JACK,
    12: CardValue.QUEEN,
    13: CardValue.KING
  }
  return mapping[rank] || CardValue.ACE
}

export const mapSuitToCardSuit = (suit: string): CardSuit => {
  const mapping: Record<string, CardSuit> = {
    'hearts': CardSuit.HEARTS,
    'diamonds': CardSuit.DIAMONDS,
    'clubs': CardSuit.CLUBS,
    'spades': CardSuit.SPADES
  }
  return mapping[suit.toLowerCase()] || CardSuit.SPADES
}

export const mapApiCardToDisplayCard = (card: { rank: number; suit: string }, faceUp: boolean = true): DisplayCard => {
  return {
    value: mapRankToValue(card.rank),
    suit: mapSuitToCardSuit(card.suit),
    faceUp
  }
}

export const mapApiCardsToDisplayCards = (cards: Array<{ rank: number; suit: string }>, faceUp: boolean = true): DisplayCard[] => {
  return cards.map(card => mapApiCardToDisplayCard(card, faceUp))
}
