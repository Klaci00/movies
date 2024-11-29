export const CheckEmail=async(BASE_URL, email,axios)=>
    {
      const request=await axios.get(`${BASE_URL}check-email/${email}/`);   
      const response=request.data;
      return response.message;
    
    }