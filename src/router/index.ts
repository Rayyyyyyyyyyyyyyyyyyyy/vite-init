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
    {
        path: "/privacy",
        name: RouterNames.privacy,
        component: () => import("../view/Privacy.vue"),
    },
    {
        path: "/terms",
        name: RouterNames.terms,
        component: () => import("../view/Terms.vue"),
    },
    {
        path: "/legalities",
        name: RouterNames.legalities,
        component: () => import("../view/Legalities.vue"),
    },
    {
        path: "/refund",
        name: RouterNames.refund,
        component: () => import("../view/Refund.vue"),
    },

];

export default createRouter({
    history: createWebHistory(),
    routes,
});
