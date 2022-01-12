import Vue from "vue";
import VueRouter from "vue-router";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/price",
        name: "Price",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Price.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
