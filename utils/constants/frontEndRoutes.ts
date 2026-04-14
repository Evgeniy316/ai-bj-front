export const FrontPaths = {
    GAME: `/game`
} as const;


export type RoutePath = typeof FrontPaths[keyof typeof FrontPaths];