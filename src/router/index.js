import { createRouter, createWebHistory } from 'vue-router'
import algorithm from "../markdown/algorithm.md"
import array from "../markdown/array.md"
import day from "../markdown/day.md"
// 1. 定义路由组件， 注意，这里一定要使用 文件的全名（包含文件后缀名）
import { h } from 'vue';
import Markdown from '../components/MarkDown.vue'
const md = (string) =>
  h(Markdown, {
    content: string,
    key: string,
  })
  console.log(md(algorithm))

const routes = [
  {
    path: '/',
    component: () => import('../views/index.vue'), // 路由懒加载
  },
  {
    path: "/archive",
    component: () => import('../views/archive.vue')
  },
  {
    path: "/project",
    component: () => import('../views/project.vue')
  },
  {
    path: "/timeline",
    component: () => import('../views/timeline.vue')
  },
  {
    path: "/message",
    component: () => import('../views/message.vue')
  },
  {
    path: "/about",
    component: () => import('../views/about.vue')
  },
  {
    path: "/article",
    component: () => import('../views/article.vue'),
    children: [
      { path: "algorithm", component: () => md(algorithm) },
      { path: "array", component: () => md(array) },
      { path: "day", component: () => md(day) },
    ],
  },
];

// Vue-router新版本中，需要使用createRouter来创建路由
const router = createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
