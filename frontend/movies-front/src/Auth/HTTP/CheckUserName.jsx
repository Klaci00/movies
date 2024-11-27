export const CheckUserName=async(BASE_URL, username,axios)=>
    {
      const request=await axios.get(`${BASE_URL}check-username/${username}/`);   
      const response=request.data;
      console.log(response.message);
      return response.message;
    
    }