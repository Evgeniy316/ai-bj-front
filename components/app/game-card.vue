<template>
  <div class="game-card">
    <div class="upper-section">
      <AppGameField />
    </div>
    <div class="lower-section">
      <AppGamePanel />
    </div>
  </div>
</template>

<style scoped>
.game-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.upper-section {
  flex: 2;
  border: 2px solid #333;
  box-sizing: border-box;
}

.lower-section {
  flex: 1;
  box-sizing: border-box;
}
</style>
