import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.example.com', // Your API base URL
    timeout: 10000, // Timeout duration
    headers: {
        'Content-Type': 'application/json',
        // You can add other common headers here if needed
    },
});

// Request interceptor to inject token
apiClient.interceptors.request.use(
    config => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default apiClient;
