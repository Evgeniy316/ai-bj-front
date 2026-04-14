const API_BASE = "http://app:8080/" as const;

export const RoutePaths = {
  API: API_BASE,
  AUTH: `${API_BASE}/register`,
} as const;

export type RoutePath = typeof RoutePaths[keyof typeof RoutePaths];



