import http from "../../../axios.config";


export async function fetchAllWorkers() {
  return await http.get("worker");
}
export async function addNewWorker(newWorker) {
  return await http.post("worker", newWorker);
}