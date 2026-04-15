export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    // console.log(body)
    const response = await $fetch(`http://localhost:8000/round/start`, {

      method: 'POST',
      body: body
    })
    // if(response.round){
    //   console.log(response.round.player_hands)
    // }
    console.log(response)
    return response

  } catch (error: any) {
    throw createError(error)
    
  }
})