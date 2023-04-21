import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/Home.vue";
import ListUser from "@/pages/user/ListUser.vue";
import InsertUser from "@/pages/user/InsertUser.vue";
import EditUser from "@/pages/user/EditUser.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/list-user",
    name: "list-user",
    component: ListUser,
  },
  {
    path: "/insert-user",
    name: "insert-user",
    component: InsertUser,
  },
  {
    path: "/edit-user/:id",
    name: "edit-user",
    component: EditUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
