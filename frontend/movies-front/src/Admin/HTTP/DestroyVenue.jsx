import apiClient from "../../Auth/Functions/APIClient"
import { BASE_URL } from "../../Settings"

export const DestroyVenue=async(selectedVenue)=>{
    try {
        await apiClient.delete(`${BASE_URL}venues/${selectedVenue}/`);
    }
    catch (error) {
        console.error('Therewas an error posting the Venue for deletion!',error);
    }
}