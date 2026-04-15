const API_BASE = "/api" as const;

export const FrontPaths = {
    API: API_BASE,
    GAME: `/game`,
    ROUND_START: `/round/start`
    
} as const;


export type RoutePath = typeof FrontPaths[keyof typeof FrontPaths];