declare module '#auth-utils' {
  export interface User {
    id: string
  }

  export function useUserSession(): {
    user: Ref<User | null>
    session: any
    loggedIn: Ref<boolean>
    fetch: () => Promise<void>
    clear: () => Promise<void>
  }
   interface UserSession {
    user: User
  }
  export function getUserSession(event: H3Event): Promise<UserSession>
}
