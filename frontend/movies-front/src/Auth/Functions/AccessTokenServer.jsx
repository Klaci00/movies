import { refreshToken } from "./AuthService";
import { getCookie,getCookieExpiryTime } from "./CookieHandler";

export const AccessTokenServer=(time,setTime)=>{
    if(getCookie('refresh')===null){
        refreshToken();
        const newTime=getCookieExpiryTime('access');
        setTime(newTime);
      }
      else{
        const interval=setInterval(() => {
          setTime((t)=>t-1);
          if (time<5){
            refreshToken();
            const newTime=getCookieExpiryTime('access');
            setTime(newTime);
          }
          console.log('Time is: ',time);
        }, 1000);
    
        return()=>clearInterval(interval);
      }
}