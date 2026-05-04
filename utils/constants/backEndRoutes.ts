const API_BASE = "http://app:8080/" as const;

export const RoutePaths = {
  API: API_BASE,
  AUTH: `${API_BASE}/register`,
} as const;

export type RoutePath = typeof RoutePaths[keyof typeof RoutePaths];



// export const ADDRES = "81.26.181.219"
export const ADDRES = "localhost:8000"
// export const ADDRES = "127.0.0.1:8000"
