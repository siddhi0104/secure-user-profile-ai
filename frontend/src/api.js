import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const loginUser = (data) => API.post("/auth/login", data);

export const getProfile = (token) =>
  API.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
