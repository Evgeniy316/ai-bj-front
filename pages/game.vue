<script lang="ts" setup>
import { FrontPaths } from '~/utils/constants/frontEndRoutes'


const { user, session, loggedIn, clear, fetch} = useUserSession()


onMounted(async() =>{
  await fetch() 
  if(loggedIn.value){
    console.log(`user.id - ${user.value.id}` )
      try {
      await $fetch(`${FrontPaths.API}${FrontPaths.ROUND_START}`, {
        method: "POST",
        body: {
          session_id: user.value.id
        }
      })
      
    } catch (error) {
      console.error('Failed to fetch balance:', error)
    }
  }
                

})
</script>


<template>
  <div class="game-page">
    <AppGameCard />
  </div>
</template>




<style scoped>
.game-page {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
