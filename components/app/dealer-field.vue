<script lang="ts" setup>
import type { Card } from '~/types/round-response'
import { mapApiCardToDisplayCard } from '~/types/card'

const { user, session, loggedIn, clear, fetch} = useUserSession()
const dealerUpcard = computed(() => user.value?.dealerUpcard ?? null)

onMounted(async() =>{
  await fetch()

})
const dealerCards = computed(() => {

  if (!dealerUpcard) return []
  return [mapApiCardToDisplayCard(dealerUpcard.value, true)]
})
</script>

<template>
  <div class="dealer-field">
    <div class="cards-container">
      <div class="card-wrapper first-card">
        <AppHandCard v-if="dealerUpcard" :cards="dealerCards" />
        <AppHandCard v-else />
      </div>
      <div class="card-wrapper second-card">
        <AppHandCard />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dealer-field {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
  border: 2px solid #444;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-sizing: border-box;
}

.cards-container {
  position: relative;
  display: flex;
  align-items: center;
}

.card-wrapper {
  position: relative;
}

.first-card {
  z-index: 2;
}

.second-card {
  position: relative;
  left: -40px;
  z-index: 1;
}
</style>
