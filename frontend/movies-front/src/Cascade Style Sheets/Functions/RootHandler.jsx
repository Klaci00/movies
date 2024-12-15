/** 
 * Gets the ':root' part of the CSS file.
 * @returns {Element} root. 
 */
const RootHandler=()=>{
    const Root=document.querySelector(':root');
    return Root;

}
/**
 * Sets the value of a variable in :root in the CSS file to the desired value.
 * @param {string} variableName Name of the variable.
 * @param {any} value The value of the variable. 
 * @returns {void}
 */
export const SetRootVariable=(variableName,value)=>{
    const r=RootHandler();
    r.style.setProperty(variableName,value);  
}