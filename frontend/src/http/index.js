import axios from 'axios';
import { message } from "antd";
import { getAuthorization } from "../utils/Authorization";
// Create an Axios instance
const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 10000, // Set request timeout
});

// Intercept requests and set request headers and other information
instance.interceptors.request.use(
    (config) => {
    message.destroy();
    message.loading("Loading...", 0);
    config.headers["authorization"] = getAuthorization();
    return config;
  },
  (error) => {
    // Request error handling
    return Promise.reject(error);
  }
);

const customHandler = (data) => {
    console.log(data)
    message.destroy();
    if(data.code === 0 ){
      message.success(data.message);
    }else{
      message.error(data.message);
    }
  };

// Intercept responses and handle return results
instance.interceptors.response.use(
  (response) => {
        // Handle response results
    customHandler({ code: response.data.code, data: response.data, message: response.data.msg });
    return response.data;
  },
  (error) => {
    customHandler({ code: -1, message: "Network request failed" });
    console.error("Network request failed:", error);
    return {};
  }
);

// Export encapsulated request methods
const api =  {
  get(url, params = {}) {
    return instance.get(url, {params});
  },
  post(url, data = {}) {
    return instance.post(url, data);
  },
  PUT(url, data = {}) {
    return instance.put(url, data);
    },
  
  DELETE(url, params = {}) {
    return instance.delete(url, { params });
    },
};
export default api;
