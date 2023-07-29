<template>
  <div
    class="sidebar p-5 bg-[#306ae6] text-white"
    :class="workerStore.IS_COLLAPSED ? 'w-[250px]' : 'w-auto'"
  >
    <div class="logo flex justify-space-between relative">
      <img
        src="../assets/logo.svg"
        alt="logo"
        class="rounded-full"
        :class="workerStore.IS_COLLAPSED ? 'w-12' : 'w-10'"
      />
      <transition>
        <span
          v-if="workerStore.IS_COLLAPSED"
          class="absolute ml-2 text-2xl uppercase font-semibold ml-15"
          >Micros
        </span>
      </transition>
    </div>

    <ul class="py-5 mt-5 relative">
      <li
        :class="{ 'bg-gray-400': item.childs.includes($route.name) }"
        v-for="item in menuItems"
        :key="item.name"
        @click="$router.push({ name: item.routeName })"
        class="cursor-pointer text-xl mb-2 p-2 rounded-md"
      >
        <i :class="item.icon"></i>
        <transition>
          <span class="ml-3 absolute" v-if="workerStore.IS_COLLAPSED">{{
            item.name
          }}</span>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script setup>
import menuItems from "./menu.config";
import { useWorkerStore } from "../modules/workers/workers.store";
const workerStore = useWorkerStore();
</script>

<style scoped>
.sidebar {
  height: 100vh;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  width: 50px;
  margin-right: 10px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
  width: 0px;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  width: auto;
}
</style>
