// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/about', component: About },
]

const router = createRouter({
    history: createWebHistory('/demo/'),  // 加上 GitHub Pages 的项目路径
    routes,
})

export default router
