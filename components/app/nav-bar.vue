<script lang="ts" setup>

    const route = useRoute()
    const pageTitle = computed(() => {
        if (route.path === '/game') {
            return 'Страница игры'
        } else if (route.path === '/') {
            return 'Приветственная страница'
        }
        return ''  // Default fallback
    })

</script>

<template>
    <div class="nav">
        <h3>{{pageTitle}}</h3>
    </div>
</template>

<style scoped>
    .nav{
       background-color:  rgb(142, 186, 199);
       font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
       display: flex;
       flex-direction: row;
       align-items: center;
       justify-content: center;
    }
    .h3{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

</style>