import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://reqres.in/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  https: true, 
});


const apiService = {
  login: async (endpoint:any, credentials:any) => {
    try {
      const response = await axiosInstance.post(endpoint, credentials);
      return response.data;
    } catch (error) {
      if (error.response) {
        
       
        throw new Error(`Server error: ${error.response.status}`);
      } else if (error.request) {
       
        
        throw new Error('No response from the server');
      } else {
        
        
        throw new Error('Request setup error');
      }
    }
  },

  fetchData: async (endpoint) => {
    try {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      if (error.response) {
        
        throw new Error(`Server error: ${error.response.status}`);
      } else if (error.request) {
        
        throw new Error('No response from the server');
      } else {
        
        throw new Error('Request setup error');
      }
    }
  },
};

export default apiService;