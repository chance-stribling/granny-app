import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./pages/LandingPage.vue"),
    },
    {
        path: "/test",
        component: () => import("./pages/TestPage.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
