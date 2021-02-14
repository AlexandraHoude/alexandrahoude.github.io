import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home";
import Contact from "@/views/contact";
import Projet from '@/views/projets.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/projets',
        name: 'projets',
        component: Projet
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
