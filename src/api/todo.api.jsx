import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-type": "application/json",
  },
});
export const postApiUsers = async (user) => {
  try {
    await axiosClient.post("/users", user);
  } catch (err) {
    console.error("Axios post: ", err);
  }
};
export const putApiUserCart = async (user) => {
  console.log(user);
  try {
    await axiosClient.put(`/users/${user.id}`, user);
  } catch (err) {
    console.error("Axios put: ", err);
  }
};
export const getApiUsers = async () => {
  try {
    const response = await axiosClient.get("/users");
    return response.data;
  } catch (err) {
    console.error("Axios get: ", err);
  }
};
