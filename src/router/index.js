import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Posts from '../views/Posts.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component:() => import('../views/Home.vue')  // 路由懒加载
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router