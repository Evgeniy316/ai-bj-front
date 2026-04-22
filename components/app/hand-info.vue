<script setup lang="ts">
const { user, fetch } = useUserSession()

// Get player totals from user session
const playerTotals = computed(() => user.value?.player_totals ?? [])

onMounted(async () => {
  await fetch()
})
</script>

<template>
  <div class="hand-info">
    <div 
      v-for="(total, index) in playerTotals" 
      :key="index"
      class="hand-total"
    >
      <span class="hand-label">Hand {{ index + 1 }}:</span>
      <span class="hand-value">{{ total }}</span>
    </div>
  </div>
</template>

<style scoped>
.hand-info {
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 12px 16px;
  background-color: #f8f9fa;
  border: 2px solid #333;
  border-radius: 8px;
  box-sizing: border-box;
}

.hand-total {
  display: flex;
  gap: 8px;
  align-items: center;
}

.hand-label {
  font-weight: bold;
  color: #495057;
}

.hand-value {
  color: #212529;
  font-weight: 600;
  font-size: 1.1em;
}
</style>
