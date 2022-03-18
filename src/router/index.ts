import { createRouter, createWebHistory } from "vue-router";
import RouterNames from "./name";

const routes = [

    {
        path: "/",
        name: RouterNames.home,
        component: () => import("../view/Home.vue"),
    },
    {
        path: "/about",
        name: RouterNames.about,
        component: () => import("../view/About.vue"),
    },


];

export default createRouter({
    history: createWebHistory(),
    routes,
});
