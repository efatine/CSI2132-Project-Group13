import axios from 'axios';
// Create an Axios instance
const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 10000, // Set request timeout
});

// Intercept requests and set request headers and other information
instance.interceptors.request.use(
    (config) => {
    return config;
  },
  (error) => {
    // Request error handling
    return Promise.reject(error);
  }
);

// Intercept responses and handle return results
instance.interceptors.response.use(
  (response) => {
    // Handle response results
    return response.data;
  },
  (error) => {
    // Handle response errors
    // Set loading state to false
    return Promise.reject(error);
  }
);

// Export encapsulated request methods
export default {
  get(url, params = {}) {
    return instance.get(url, {params});
  },
  post(url, data = {}) {
    return instance.post(url, data);
  },
};
