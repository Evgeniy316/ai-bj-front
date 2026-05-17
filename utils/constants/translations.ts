export enum GameResultTranslation {
  BLACKJACK = "Победа",
  WIN = "Победа",
  PUSH = "Ничья",
  LOSS = "Проигрыш",
  BUST = "Перебор"
}

export const UI_TRANSLATIONS = {
  ROUND_OVER: "Конец раунда",
  RESULT: "Результат",
  RESULTS: "Результаты",
  CONTINUE: "Продолжить",
  SUGGESTION: "Рекомендация ии:",
  STRATEGY: "Стратегия:", 
  TOTAL_SCORE: "Сумма",
  SUGGESTIONS: "Подсказки",
} as const

export const ACTION_TRANSLATIONS = {
  HIT: "Взять",
  STAND: "Остаться",
  DOUBLE: "Удвоить",
  SPLIT: "Разделить"
} as const
