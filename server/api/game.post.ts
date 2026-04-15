export default defineEventHandler(async (event) => {
  try {
    const response = await $fetch<{ session_id: string }>(`http://localhost:8000/session`, {
      method: 'POST'
    })
    
    await setUserSession(event, {
      user: { id: response.session_id }
    })
    
    return response.session_id
  } catch (error: any) {
    throw createError(error)
    
  }
})