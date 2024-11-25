import { BASE_URL } from "../../Settings";
import apiClient from "./APIClient";

export const logout2 = async () => {
    try {
        // Retrieve the refresh token from cookies
        const refresh = document.cookie.replace(/(?:(?:^|.*;\s*)refresh_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");

        // Send a request to the backend to invalidate the refresh token
        await apiClient.post(`logout2/`, { refresh });

        // Clear the cookies after successful logout
        document.cookie = "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "refresh_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

        console.log('Logged out successfully');
    } catch (error) {
        console.error('Error logging out:', error);
    }
};
