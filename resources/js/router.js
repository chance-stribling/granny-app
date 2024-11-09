import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./pages/LandingPage.vue"),
    },
    {
        path: "/dashboard",
        component: () => import("./pages/DashboardPage.vue"),
    },
    {
        path: "/profile",
        component: () => import("./pages/ProfilePage.vue"),
    },
    {
        path: "/starch-pears",
        component: () => import("./pages/analyses/StarchPearsPage.vue"),
    },
    {
        path: "/blush-pears",
        component: () => import("./pages/analyses/BlushPearsPage.vue"),
    },
    {
        path: "/starch-apples",
        component: () => import("./pages/analyses/StarchApplesPage.vue"),
    },
    {
        path: "/superficial-scald-apples",
        component: () => import("./pages/analyses/SupScaldApplesPage.vue"),
    },
    {
        path: "/segmentation/:analysis_id",
        component: () => import("./pages/SegmentationPage.vue"),
    },
    {
        path: "/fruit-rating",
        component: () => import("./pages/FruitRatingPage.vue"),
    },
    {
        path: "/summary",
        component: () => import("./pages/SummaryPage.vue"),
    },
    {
        path: "/new-analysis",
        component: () => import("./pages/NewAnalysisPage.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
