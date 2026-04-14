<template>
  <div class="action-buttons">
    <AppActionButton label="Hit" />
    <AppActionButton label="Stand" />
    <AppActionButton label="Double" />
    <AppActionButton label="Split" />
  </div>
</template>

<style scoped>
.action-buttons {
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding: 12px;
  border: 2px solid #555;
  border-radius: 8px;
  background-color: #f5f5f5;
}
</style>
