import type {ApiResponse} from '~/types/res'
export default defineEventHandler(async (event) => {
    try {
    // const id = getRouterParam(event, 'id')
    const id = await $fetch<string>(`http://localhost:8000/session`)
    await setUserSession(event, {
      user: { id: id},
      // secure: { apiToken: '1234567890' }
    })

    return id
  } catch (error: any) {
    throw createError(error)
  }
})