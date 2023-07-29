import { defineStore } from 'pinia'
import { fetchAllDocuments } from './documents.api'

export const useDocumentStore = defineStore('document', {
  state: () => ({
    documents:[]
  }),
  getters: {
    GET_DOCUMENTS: (s)=>s.documents
  },
  actions: {
    async FETCH_DOCUMENTS(){
      this.documents = await fetchAllDocuments()
    },
  },
})

