import http from "../../../axios.config";

export async function fetchAllDocuments() {
  return await http.get("documents");
}

