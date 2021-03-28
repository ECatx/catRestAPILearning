import {createRouter,createWebHistory} from 'vue-router'

import Home from './pages/Home.vue'
import Details from './pages/Details.vue'
import Info from './pages/Info.vue'

const routes = [
{
    path: '/',
    component: Home,
},
{
    path: '/Info/:id',
    props: true,
    component: Info,
},
{
    path: '/Details',
    component: Details,
},
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})