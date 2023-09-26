import axios from "axios";
                // const URL = window.location.host.includes("http://")?
                // window.location.host:`http://${window.location.host}`
  const URL = "http://127.0.0.1:7000";
                
  const axiosInstance = axios.create();
                
  const request = axios.create({
    baseURL: URL + "/",
  });
                
  export const getData = (data) => request.get("/data", data);
  export const postData = (data) => request.post("/data", data);
                
  export const getDB = (data) => request.get("/db", data);
  export const postDB = (data) => request.post("/db", data);
                
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong!"
    )
  );
                
export default axiosInstance;