<template>
  <main class="main-layout">
    <Sidebar />
    <div class="main-wrapper flex flex-column">
      <ProfileMenu />
      <div class="main-router-content grow overflow-y-scroll">
        <slot />
      </div>
    </div>
  </main>
</template>

<script setup>
import Sidebar from "./Sidebar.vue";
import ProfileMenu from "./Profile.vue";
</script>

<style>
.main-layout {
  display: flex;
  height: 100vh;
}
.main-layout .main-wrapper {
  flex-grow: 1;
}
.main-router-content::-webkit-scrollbar {
  display: none;
}
</style>
