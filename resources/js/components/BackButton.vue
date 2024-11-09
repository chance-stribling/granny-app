<template>
    <v-btn
        class="btn"
        icon="mdi-arrow-left"
        @click="this.$router.go(-1)"
    ></v-btn>
</template>
<style scoped>
.btn {
    height: 50px;
    width: 50px;
    max-height: 50px;
    max-width: 50px;
    position: absolute;
    left: 1rem;
    bottom: 1rem;
}
</style>
