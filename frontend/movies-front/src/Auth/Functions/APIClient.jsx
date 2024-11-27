import axios from 'axios';
import { refreshToken } from './AuthService';
import { BASE_URL } from '../../Settings';
import { getCookie } from './CookieHandler';

const apiClient = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});
let isRefreshing = false;
let failedQueue = [];
const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    })
    failedQueue = [];
}
apiClient.interceptors.request.use(
    async (config) => {
        const access = getCookie('access');
        console.log("Access token from cookie:", access);
        let token = access;
        if (!access) {
            token = await refreshToken();
            if (!isRefreshing) {
                isRefreshing = true;
                try {
                    console.log("New token obtained:", token);
                    processQueue(null, token);
                    isRefreshing = false;
                } catch (error) {
                    processQueue(error, null);
                    isRefreshing = false;
                    console.log("Error refreshing token:", error);
                }
            }
            return new Promise((resolve, reject) => {
                failedQueue.push({ resolve, reject });
            }).then((token) => {
                config.headers.Authorization = `Bearer ${token}`;
                return config;
            }).catch((error) => {
                return Promise.reject(error);
            });
        }
        else {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401 && !error.config.__isRetryRequest) {
            error.config.__isRetryRequest = true;
            return apiClient.request(error.config);
        }
        return Promise.reject(error);
    }
);
export default apiClient;
