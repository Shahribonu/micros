<template>
  <div
    class="about"
    :class="!openAddWorker ? 'z-100 bg-grey-100 ' : 'bg-white'"
  >
    <h1 class="flex justify-center my-5 text-4xl">Workers</h1>

    <v-btn class="openAddWorker" v-if="openAddWorker" @click="changeOpen">
      Add Worker</v-btn
    >

    <AddWorker
      v-else
      @worker-added="handleWorkerAdded"
      :openAddWorker="openAddWorker"
    />

    <Table :headers="headers" :items="items" class="my-[50px]" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useWorkerStore } from "../workers.store";
import Table from "../components/Table.vue";
import AddWorker from "../components/AddWorker.vue";
const workerStore = useWorkerStore();
const items = ref([]);
let openAddWorker = ref(Boolean);

const headers = [
  { text: "Name", value: "name", sortable: true },
  { text: "Surename", value: "surname" },
  { text: "Date", value: "date" },
  { text: "Passport", value: "passport" },
  { text: "Gender", value: "gender" },
  { text: "Active", value: "active" },
];

onMounted(async () => {
  await workerStore.FETCH_WORKERS();
  items.value = workerStore.GET_WORKERS.data;
});

function changeOpen() {
  workerStore.CHANGE_ADD_WORKER();
  openAddWorker.value = useWorkerStore.OPEN_ADD_WORKER;
}
function handleWorkerAdded(newWorker) {
  workerStore.ADD_WORKER(newWorker);
}
</script>

<style scoped>
.openAddWorker {
  position: fixed;
  right: 0;
  top: 120px;
}
</style>
