import { createRouter, createWebHistory } from 'vue-router';
import imgView from '../views/imgView.vue';
import writingView from '../views/writingView.vue';
import visitorsView from '../views/visitorsView.vue';
import infoView from '../views/infoView.vue';
// import homeView from '../views/homeView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: visitorsView,
    },
    {
        path: '/img',
        name: 'imgView',
        component: imgView,
    },
    {
        path: '/info',
        name: 'Info',
        component: infoView,
    },
    {
        path: '/writing',
        name: 'Writing',
        component: writingView,
    },
    {
        path: '/visitors',
        name: 'Visitors',
        component: visitorsView,
    },
    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import(/* webpackChunkName: "about" */ '../views/default/AboutView.vue'),
    // },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
