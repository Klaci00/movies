/** 
 * Sets a cookie with the given name, value, and number of days until expiration. 
 * @param {string} name - The name of the cookie. 
 * @param {string} value - The value of the cookie. 
 * @param {minutes} minutes - The number of minutes until the cookie expires. 1 day = 1620 minutes.
 */
export function setCookie(name, value, minutes) {
    const date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));  // Convert days to milliseconds
    const expires = date.toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
    document.cookie= `${name}_expires=${expires}; path=/`; //expiration day cookie
}

export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    else if (parts.length===0 ){return null;};
}

export function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = `${name}_expires=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export const getCookieExpiryTime = (name) => {
    const cookie = document.cookie.split('; ').find(row => row.startsWith(`${name}_expires=`));
    console.log(`ExpiresCookie: ${cookie.split('=')[1]}`);
    if (!cookie) {
        console.warn(`Cookie with name "${name}" not found.`);
        return 0;
    }
 
    const expiresDate = new Date(cookie.split('=')[1]);
    const now = new Date();
    console.log(`expiresDate: ${expiresDate}, nowdate: ${now}`)

    const timeRemaining = (expiresDate - now) / 1000; // Time in seconds
    return timeRemaining;
};