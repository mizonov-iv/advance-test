import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/AuthView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "login",
            component: Auth,
        },
        {
            path: "/orders",
            name: "orders",
            component: () => import("../views/OrdersView.vue"),
        },
        {
            path: "/add-order",
            name: "add-order",
            component: () => import("../views/AddOrderView.vue"),
        },
    ],
});

export default router;
