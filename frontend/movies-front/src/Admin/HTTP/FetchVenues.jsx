import apiClient from "../../Auth/Functions/APIClient"
import { BASE_URL } from "../../Settings"

export const FetchVenues=async(showId,setVenues)=>{
    try{
        await apiClient.get(`${BASE_URL}${showId}/`).then(
            response=>{setVenues(response.data.venues)});
            console.log('Fetched venues succesfully!');
        
    }
    catch(error){
        console.error('There was an error fetching the venues!',error);
    };
}