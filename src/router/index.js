import { createRouter, createWebHistory } from 'vue-router'
import algorithm from "../markdown/algorithm.md"
// 1. 定义路由组件， 注意，这里一定要使用 文件的全名（包含文件后缀名）
import { h } from 'vue';
import Markdown from '../components/MarkDown.vue'
const md = (string) =>
  h(Markdown, {
    content: string,
    key: string,
  });

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'), // 路由懒加载
  },
  {
    path: '/algorithm',
    component: md(algorithm)
  },
  {
    path: '/article',
    component: () => import('../views/ArticleList.vue')
  }
];

// Vue-router新版本中，需要使用createRouter来创建路由
const router = createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
