import type {ApiResponse} from '~/types/res'
export default defineEventHandler(async (event) => {
    try {
    const id = getRouterParam(event, 'id')
    const data = await $fetch<ApiResponse>(`http://localhost:8000/health`)

    return data
  } catch (error: any) {
    throw createError(error)
  }
})