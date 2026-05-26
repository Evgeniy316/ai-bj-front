<template>
    <div class="layout-wrapper">
    <AppNavBar />
    <main>
        <slot />
    </main>
    </div>
</template>
<style>
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}

.layout-wrapper {
    background-color: rgb(142, 186, 199);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

</style>