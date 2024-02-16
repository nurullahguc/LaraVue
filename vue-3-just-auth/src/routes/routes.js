import {createRouter, createWebHistory} from "vue-router";
import AppLogin from "@/components/AppLogin";
import AppHome from "@/components/AppHome";
import AppAbout from "@/components/AppAbout";
import AppLayout from "@/components/AppLayout";
import {authMiddleware} from "@/middleware/authMid";
import {loginMiddleware} from "@/middleware/loginMid";

const routes = [
    {
        path: '/',
        component: AppLayout,
        beforeEnter: authMiddleware,
        children: [
            {name: 'Home', path: '', component: AppHome},
            {name: 'About', path: '/About', component: AppAbout},
        ],

    },
    {name: 'Login', path: '/login', component: AppLogin, beforeEnter: loginMiddleware},
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
