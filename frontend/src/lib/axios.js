import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true,
});
//basically for safe working we say that for 5001 port allow the user to work on things ...development karte wakt dikkat na ho