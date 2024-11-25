import apiClient from "../Auth/Functions/APIClient";

export const FetchUserName = async (BASE_URL,setUsername,isAdmin,setIsAdmin,isAuth,setIsAuth) =>  {
    const access = document.cookie.replace(/(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (isAuth==true){
        await apiClient.get(`${BASE_URL}user/`, {
        }).then(response => {
            console.log('response from user url:',response);
        setUsername(response.data.username);
        if(response.data.is_staff==true){
            setIsAdmin(true);
        }
    }).catch(error => {
        console.error('There was an error fetching the user info!', error);
    });
    }
}
