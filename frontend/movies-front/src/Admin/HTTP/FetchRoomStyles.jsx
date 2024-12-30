import apiClient from "../../Auth/Functions/APIClient"
import { BASE_URL } from "../../Settings"

export const FetchRoomStyles = async (setRoomTypes) => {
    try {
        await apiClient.get(`${BASE_URL}roomnames/`).then(
            response => {
                setRoomTypes(
                    response.data
                )
            }
        )
    }
    catch (error) {
        console.error('Error fetching room names from \'/roomnames\' !', error);
    };
}