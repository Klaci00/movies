import axios from 'axios';
import { BASE_URL } from '../../Settings';
import { getCookie, setCookie } from './CookieHandler';

export const refreshToken = async () => {
    try {
        const refresh = getCookie('refresh');
        if (!refresh) throw new Error('No refresh token');
        
        const response = await axios.post(
            `${BASE_URL}token/refresh/`,
            { refresh },  // Send refresh token in the request body
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true  // Ensure cookies are sent with the request
            }
        );
        const { access,refresh:newRefresh } = response.data;
        setCookie('refresh',newRefresh,1620);
        setCookie('access',access,5);
        return access;
    } catch (err) {
        console.error('Error refreshing token:', err);
        throw err;
    }
};
