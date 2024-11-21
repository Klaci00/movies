// apiClient.js
import axios from 'axios';
import { refreshToken } from './AuthService';
import { BASE_URL } from '../../Settings';
import { jwtDecode as decode } from 'jwt-decode';

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

apiClient.interceptors.request.use(
    async (config) => {
        const access = document.cookie.replace(/(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");

        if (access) {
            let token = access;
            const decodedToken = decode(access);
            const currentTime = Date.now() / 1000;

            // Check if the token has expired
            if (decodedToken.exp < currentTime) {
                token = await refreshToken();
            }
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log('Request Config:', config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
apiClient.interceptors.response.use(
    (response) => {
        console.log('Response:', response);
        return response;
    },
    (error) => {
        console.error('Response Error:', error);
        return Promise.reject(error);
    }
);
export default apiClient;
