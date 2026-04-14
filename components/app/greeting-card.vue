<script lang="ts" setup>
const createSession = inject('createSessionKey', ref(false)) 
function startGame() {
  createSession.value = true 
}
</script>

<template>
  <div class="greeting-card">
    <p class="greeting-text">Welcome! You can start a game</p>
    <button @click="startGame" class="start-button">Start</button>
  </div>
</template>

<style scoped>
.greeting-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 40px 60px;
  border: 2px solid #333;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.greeting-text {
  font-size: 20px;
  margin: 0;
  text-align: center;
  color: #333;
}

.start-button {
  padding: 12px 32px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #2c3e50;
  border: 2px solid #34495e;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.start-button:hover {
  background-color: #34495e;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.start-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
