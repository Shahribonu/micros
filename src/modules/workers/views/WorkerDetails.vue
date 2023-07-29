<template>
  <main>
    <div class="p-6">
      <h1 class="flex justify-center my-5 text-4xl">Workers Details</h1>
      <p><span> Name: </span> {{ selectedItem.name }}</p>
      <p><span> Surename:</span> {{ selectedItem.surname }}</p>
      <p><span> Date of Birth:</span> {{ selectedItem.date }}</p>
      <p><span> Passport: </span>{{ selectedItem.passport }}</p>
      <p><span> Gender : </span>{{ selectedItem.gender }}</p>

      <p>
        Specific Docs :
        <router-link :to="`/documents/${relevent_document.name}`">
          <v-chip class="ma-2" color="primary">
            {{ relevent_document.name }}
          </v-chip>
        </router-link>
      </p>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useWorkerStore } from "../workers.store";
import { useDocumentStore } from "../../documents/documents.store";
const workerStore = useWorkerStore();
const documentStore = useDocumentStore();
const routes = useRoute();
const person = routes.params.name;

const workers = ref([]);
const documents = ref([]);
const relevent_document = ref([]);
const selectedItem = ref([]);
onMounted(async () => {
  await workerStore.FETCH_WORKERS();
  await documentStore.FETCH_DOCUMENTS();
  workers.value = workerStore.GET_WORKERS.data;
  documents.value = documentStore.GET_DOCUMENTS.data;
  selectedItem.value = workers.value.find((item) => item.name === person);
  relevent_document.value = documents.value.find(
    (item) => item.name === person
  );
});
</script>

<style>
p {
  font-size: 20px;
}
span {
  margin-right: 5px;
}
</style>
