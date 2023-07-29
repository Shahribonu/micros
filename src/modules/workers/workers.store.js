import { defineStore } from 'pinia'
import { fetchAllWorkers } from './workers.api';
import { addNewWorker } from './workers.api';

export const useWorkerStore = defineStore('worker', {
  state: () => ({
    workers:[],
    isCollapsed:true,
    openAddWorker:false
  }),
  getters: {
    GET_WORKERS: (s)=>s.workers,
    IS_COLLAPSED: s=>s.isCollapsed,
    OPEN_ADD_WORKER: (s)=>s.openAddWorker
  },
  actions: {
   async FETCH_WORKERS(){
      this.workers = await fetchAllWorkers()
    },
   
   async ADD_WORKER(newWorker) {
      await addNewWorker(newWorker);
      this.documents = await fetchAllWorkers();
    },
    CHANGE_TOGGLE(){
      return this.isCollapsed = !this.isCollapsed
    },
    CHANGE_ADD_WORKER(){
      return this.openAddWorker = !this.openAddWorker
    }
    
  },
})

