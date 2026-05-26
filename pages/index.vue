import {FrontPaths} from "~/utils/consants/fronEndRoutes"
import {RoutePaths} from "~/utils/consants/backEndRoutes"

<script lang="ts" setup>
import { FrontPaths } from '~/utils/constants/frontEndRoutes';


const { user, session, loggedIn, clear} = useUserSession()
const router = useRouter();
const createSession = ref<boolean>(false);
provide('createSessionKey', createSession);

watch(createSession, async (newVal) => {
  if (newVal) {
    
    try {
      await $fetch(`${FrontPaths.API}${FrontPaths.GAME}`, {
        method: "POST",
      })
      // await session.fetch()
      // console.log(user.loggedIn)
      // console.log("after post")
      router.push(FrontPaths.GAME)
    } catch (error) {
      console.error('Failed to fetch balance:', error)
    }
    
  }
})

</script>

<template>
  <AppIndexCard />
</template>