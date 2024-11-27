export const CreateUserName=(firstname,lastname)=>{
    return `${firstname}+${lastname}+${generateRandomDigits()}`
}

function generateRandomDigits() { let digits = ''; for (let i = 0; i < 4; i++) { digits += Math.floor(Math.random() * 10).toString();
     return digits;}}