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
  background-color: rgb(208, 112, 23);
  border: 3px solid black;
  border-radius: 12px;
  padding: 16px;
  width: 85px;
  height: 120px;
  box-sizing: border-box;
}

.card-card img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
