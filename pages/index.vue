import {FrontPaths} from "~/utils/consants/fronEndRoutes"
import {RoutePaths} from "~/utils/consants/backEndRoutes"

<script lang="ts" setup>
import { FrontPaths } from '~/utils/constants/frontEndRoutes';


// const { user, session, loggedIn, clear} = useUserSession()
const router = useRouter();
const createSession = ref<boolean>(false);
provide('createSessionKey', createSession);

watch(createSession, async (newVal) => {
  if (newVal) {
    try {
      let id = await $fetch<string>(FrontPaths.GAME, {
        method: "POST"
      })
      console.log(id)
      const { fetch } = useUserSession()
      await fetch()
    } catch (error) {
      console.error('Failed to fetch balance:', error)
    }

    router.push(FrontPaths.GAME)
  }
})

</script>

<template>
  <AppIndexCard />
</template>