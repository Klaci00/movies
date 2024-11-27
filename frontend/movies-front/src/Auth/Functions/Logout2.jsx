import { BASE_URL } from "../../Settings";
import apiClient from "./APIClient";
import { getCookie,deleteCookie } from "./CookieHandler";
export const logout2 = async () => {
    try {
        // Retrieve the refresh token from cookies
        const refresh = document.cookie.replace(/(?:(?:^|.*;\s*)refresh_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");

        // Send a request to the backend to invalidate the refresh token
        await apiClient.post(`logout2/`, { refresh });

        // Clear the cookies after successful logout
        deleteCookie('access');
        deleteCookie('refresh');
        console.log('Logged out successfully');
    } catch (error) {
        console.error('Error logging out:', error);
    }
};
