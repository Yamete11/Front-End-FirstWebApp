import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Database from "@/views/Database";
import Movie from "@/views/directories/Movie";
import Actor from "@/views/directories/Actor";
import ActorMovie from "@/views/directories/ActorMovie";
import NotFound from "@/views/directories/Not Found";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/database/movie',
    name: 'database',
    component: Database,
    children: [
      {
        path: '/database/movie',
        name: 'movie',
        component: Movie
      },
      {
        path: '/database/actor',
        name: 'actor',
        component: Actor
      },
      {
        path: '/database/actor-movie',
        name: 'actor-movie',
        component: ActorMovie
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
