// authService.js
import axios from 'axios';
import { jwtDecode as decode } from 'jwt-decode';
import { BASE_URL } from '../../Settings';

export const refreshToken = async () => {
    try {
        const refresh = document.cookie.replace(/(?:(?:^|.*;\s*)refresh_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        if (!refresh) throw new Error('No refresh token');

        const response = await axios.post(`${BASE_URL}token/refresh/`, { refresh });
        const { access } = response.data;

        document.cookie = `access_token=${access}; path=/; secure; HttpOnly;`;
        return access;
    } catch (err) {
        console.error('Error refreshing token:', err);
        throw err;
    }
};
