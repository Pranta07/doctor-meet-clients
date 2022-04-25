import axios from "axios";

const API = axios.create({
  baseURL: "https://immense-beyond-64415.herokuapp.com",
});

type Donor = {
  img: string;
  name: string;
  email: string;
  phone: string;
  district: string;
  group: string;
};

type GetUsersResponse = {
  data: Donor[];
};

// blood donor api handle
export const fetch_donor = () => API.get<GetUsersResponse>("/donor/all");
// export const insert_donor = (data) => API.post("/donor/add", data);
// export const update_donor = (id, updatedInfo) =>
//   API.put(`/donor/:${id}`, updatedInfo);
// export const delete_donor = (id) => API.delete(`/donor/:${id}`);

// // appointment api handle
// export const fetch_appointment = () => API.get("/appointment/all");
// export const insert_appointment = (data) => API.get("/appointment/add", data);
// export const update_appointment = (id, updatedInfo) =>
//   API.get(`/appointment/:${id}`, updatedInfo);
// export const delete_appointment = (id) => API.get(`appointment/:${id}`);

// // doctors api handle
// export const fetch_doctors = () => API.get("/doctors");
// export const fetch_specific_doctors = (id) => API.get(`/doctors/:${id}`);
// export const update_doctors = (id, updatedInfo) =>
//   API.put(`/doctors/:${id}`, updatedInfo);
// export const insert_doctors = (data) => API.post(`/doctors`, data);
// export const delete_doctors = (id) => API.delete(`/doctors/:${id}`);
