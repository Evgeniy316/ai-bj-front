<template>
  <div class="player-field">
    <AppHandCard />
    <AppHandCard />
  </div>
</template>

<style scoped>
.player-field {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 16px;
  border: 2px solid #444;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-sizing: border-box;
}
</style>
