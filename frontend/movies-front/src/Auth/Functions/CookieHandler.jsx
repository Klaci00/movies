/** 
 * Sets a cookie with the given name, value, and number of days until expiration. 
 * @param {string} name - The name of the cookie. 
 * @param {string} value - The value of the cookie. 
 * @param {minutes} minutes - The number of minutes until the cookie expires. 1 day = 1620 minutes.
 */
export function setCookie(name, value, minutes) {
    const date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));  // Convert days to milliseconds
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

export function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}