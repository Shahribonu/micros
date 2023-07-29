<template>
  <div class="addWorker bg-white p-5 shadow-md">
    <v-form @submit.prevent="addWorker">
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="worker.name" label="Name"></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field v-model="worker.surname" label="Surname"></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="worker.date"
            label="Date of Birth"
            type="date"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="worker.passport"
            label="Passport"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-select
            v-model="worker.gender"
            :items="genders"
            label="Gender"
          ></v-select>
        </v-col>

        <v-col cols="12">
          <div class="custom-checkbox">
            <input
              type="checkbox"
              id="activeCheckbox"
              v-model="worker.active"
              @click="toggleActive"
              class="text-2xl"
            />
            <label for="activeCheckbox"></label>
            <span class="custom-checkbox-label text-xl ml-3">Active</span>
          </div>
        </v-col>

        <v-col cols="12">
          <v-btn type="submit" color="primary">Add Worker</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, defineEmits } from "vue";
import { useWorkerStore } from "../workers.store";
import { useToast } from "vue-toastification";
const workerStore = useWorkerStore();
const items = ref([]);
const toast = useToast();

onMounted(async () => {
  await workerStore.FETCH_WORKERS();
  items.value = workerStore.GET_WORKERS.data;
});
function toggleActive() {
  worker.active = !worker.active;
}

const worker = ref({
  id: items.value.length,
  name: "",
  surname: "",
  date: null,
  passport: "",
  gender: null,
  active: false,
});

const genders = ["Male", "Female", "Other"];
const emit = defineEmits();
async function addWorker() {
  if (
    !worker.value.name ||
    !worker.value.surname ||
    !worker.value.date ||
    !worker.value.passport
  ) {
    toast.error("Fill the fields");
    return;
  }

  emit("worker-added", worker.value);

  worker.value = {
    name: "",
    surname: "",
    date: null,
    passport: "",
    gender: null,
    active: false,
  };
  workerStore.CHANGE_ADD_WORKER();
  console.log(workerStore.OPEN_ADD_WORKER);
  await workerStore.FETCH_WORKERS();
}
</script>

<style scoped>
.addWorker {
  position: absolute;
  right: 0;
  top: 58px;
  width: 500px !important;
  z-index: 1000;
}
v-text-field {
  margin: 0;
}
</style>
