<template>
  <div
    class="profile-menu px-5 py-2 flex items-center justify-between border-b-2 border-gray-300"
  >
    <div class="sidebar-toggler-wrapper h-full">
      <div
        class="sidebar-toggler w-9 h-full shadow-md rounded-md p-1 cursor-pointer flex"
        @click="toggleSidebar"
      >
        <div
          :class="workerStore.IS_COLLAPSED ? 'ml-auto' : 'mr-auto'"
          class="sidebar-toggler-item w-1/2 h-full bg-gray-400 rounded-md transition-all"
        ></div>
      </div>
    </div>

    <!-- user -->
    <div class="user-info flex items-center">
      <div class="text-content">
        <h4 class="user-name text-xl font-semibold text-gray-800 leading-3">
          Shahribonu
        </h4>
        <p class="text-xs font-semibold text-gray-500 text-right">admin</p>
      </div>
      <div class="profile-pic ml-2">
        <v-avatar color="info">
          <i class="fas fa-user"> </i>
        </v-avatar>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWorkerStore } from "../modules/workers/workers.store";
const workerStore = useWorkerStore();

const toggleSidebar = async () => {
  await workerStore.CHANGE_TOGGLE();
};
</script>

<style></style>
