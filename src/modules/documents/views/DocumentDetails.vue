<template>
  <main>
    <div class="p-5">
      <p class="flex justify-center my-5 text-4xl">
        Documents details for
        <span class="text-4xl ml-3 bold">{{ selectedItem.name }}</span>
      </p>
      <p><span> Type: </span>{{ selectedItem.type }}</p>
      <p>
        <span> Number of document: </span>{{ selectedItem.number_document }}
      </p>
      <p><span> Date of document: </span>{{ selectedItem.date_document }}</p>
      <p><span>Type of Invoice:</span> {{ selectedItem.type_invoice }}</p>
      <p><span>Name of trusted :</span> {{ selectedItem.name_trusted }}</p>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useDocumentStore } from "../documents.store";
const documentStore = useDocumentStore();
const routes = useRoute();
const person = routes.params.name;

const workers = ref([]);
const selectedItem = ref([]);
onMounted(async () => {
  await documentStore.FETCH_DOCUMENTS();
  workers.value = documentStore.GET_DOCUMENTS.data;
  console.log(workers.value);
  selectedItem.value = workers.value.find((item) => item.name === person);
});
</script>

<style>
p {
  font-size: 20px;
}
span {
  margin-right: 5px;
  font-weight: bold;
}
</style>
