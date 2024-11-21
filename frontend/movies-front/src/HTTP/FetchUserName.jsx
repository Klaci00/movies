import apiClient from "../Auth/Functions/APIClient";

export const FetchUserName = async (token, BASE_URL,setUsername,setIsAdmin,setIsAuth) =>  {
    if (token){
        setIsAuth(true);
    await apiClient.get(`${BASE_URL}user/`, {
        }).then(response => {
        setUsername(response.data.username);
        if(response.data.is_staff==true){
            setIsAdmin(true);
        }
    }).catch(error => {
        console.error('There was an error fetching the user info!', error);
    });
    }
}
