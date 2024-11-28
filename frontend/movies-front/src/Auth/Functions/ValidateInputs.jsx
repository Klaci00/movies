export const ValidateInputs = (firstname, lastname, email, username, password, confPW, setProblem, setButtonDisabled) => {
    let valid = true;
    let problemText = '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])[A-Za-z\d\s\W]+$/;

    if (firstname.length < 1 || lastname.length < 1) {
        problemText += 'First and last name are mandatory!\n';
        valid = false;
    }
    if (username.length < 5) {
        problemText += 'The username must be at least 5 characters long!\n';
        valid = false;
    }
    if (/\s/.test(username)) {
        problemText += 'The username is not supposed to contain spaces!\n';
        valid = false;
    }
    if (!emailRegex.test(email)) {
        problemText += 'The email must be in a correct format!\n';
        valid = false;
    }
    if (password.length < 8) {
        problemText += 'The password must be at least 8 characters long!\n';
        valid = false;
    }
    if (!passRegex.test(password)) {
        problemText += 'The password must contain at least one uppercase letter, at least one lowercase letter, one digit, and one special character!\n';
        valid = false;
    }
    if (password !== confPW) {
        problemText += 'The passwords do not match!\n';
        valid = false;
    }

    setProblem(problemText);
    setButtonDisabled(!valid);
    return valid;
}
