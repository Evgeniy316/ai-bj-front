<template>
  <div class="game-field">
    <AppDealerField />
    <AppPlayerField />
  </div>
</template>

<style scoped>
.game-field {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 16px;
  gap: 16px;
  box-sizing: border-box;
}
</style>
