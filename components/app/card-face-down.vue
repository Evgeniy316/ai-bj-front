<template>
  <div class="card-card">
    <img src="~/assets/yargu.svg" alt="Card" />
  </div>
</template>

<style scoped>
.card-card {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: 3px solid purple;
  border-radius: 12px;
  padding: 16px;
  width: 80px;
  height: 120px;
}

.card-card img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
