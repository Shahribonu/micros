<template>
  <div class="about">
    <h1 class="flex justify-center my-5 text-4xl">All Documents</h1>
    <v-card>
      <v-card-title>
        <v-text-field
          class="w-[300px]"
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
    </v-card>

    <Table2 :headers="headers" :items="filteredItems" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useDocumentStore } from "../documents.store";

import Table2 from "../components/Table2.vue";
const documentStore = useDocumentStore();
const items = ref([]);
const search = ref("");

const headers = [
  { text: "name", value: "name", sortable: true },
  { text: "date_document", value: "date_document" },
  { text: "type_invoice", value: "type_invoice" },
];

onMounted(async () => {
  await documentStore.FETCH_DOCUMENTS();
  items.value = documentStore.GET_DOCUMENTS.data;
});

const filteredItems = computed(() => {
  if (search.value === "") {
    return items.value;
  }

  return items.value.filter((item) =>
    item.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>
