import http from "./httpService";

export function getOwnerProjectsApi() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function removeOwnerProjectApi(id) {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
}

export function createOwnerProjectApi(data) {
  return http.post(`/project/add`, data).then(({ data }) => data.data);
}

export function editOwnerProjectApi({ id, newProject }) {
  return http
    .patch(`/project/update/${id}`, newProject)
    .then(({ data }) => data.data);
}

export function toggleOwnerProjectApi({ id, data }) {
  return http.patch(`/project/${id}`, data).then(({ data }) => data.data);
}

export function getProjectApi(id) {
  return http.get(`/project/${id}`).then(({ data }) => data.data);
}

export function getAllProjectsApi(qs) {
  return http.get(`/project/list${qs}`).then(({ data }) => data.data);
}
