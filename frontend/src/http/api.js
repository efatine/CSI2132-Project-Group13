import http from './index';


// Define an object to store all APIs
const api = {
  // Login
  login: (data) => http.post('/user/login', data),
  // Register
  register: (data) => http.post('/user/register', data),
};

// Export the api object
export default api;
