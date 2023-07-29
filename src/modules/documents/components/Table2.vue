<template>
  <EasyDataTable
    :headers="headers"
    :items="items"
    @click-row="showRow"
    border-cell
    show-index
    :rows-per-page="5"
  />
</template>

<script setup>
import { useRouter } from "vue-router";
import { defineProps } from "vue";
const { headers, items } = defineProps(["headers", "items"]);
const router = useRouter();
const showRow = (item) => {
  console.log(item, "click");
  router.push(`/documents/${item.name}`);
};
</script>
