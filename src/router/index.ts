import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../view/Home.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../view/About.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});