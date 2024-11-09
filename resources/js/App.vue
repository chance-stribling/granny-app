<script></script>

<template>
    <v-app class="app">
        <v-main>
            <v-container fluid class="ma-0 pa-0">
                <router-view v-slot="{ Component, route }">
                    <div :key="route.name">
                        <Component :is="Component" />
                    </div>
                </router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<style></style>
