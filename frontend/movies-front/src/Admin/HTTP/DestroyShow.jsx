import apiClient from "../../Auth/Functions/APIClient"
import { BASE_URL } from "../../Settings"

export const DestroyShow = async (selectedShow) => {
    try {
        await apiClient.delete(`${BASE_URL}showdestroy/${selectedShow}/`);
        console.log('Show deleted successfully');
    }
    catch (error) {
        console.error('There was an error posting the Show to destroyview!', error);
    }
}