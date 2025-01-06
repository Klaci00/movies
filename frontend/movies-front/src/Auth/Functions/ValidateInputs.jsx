export const ValidateInputs = (firstname, lastname, email, username, password, confPW, setProblem, setButtonDisabled) => {
    let valid = true;
    let problemText = '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])[A-Za-z\d\s\W]+$/;

    if (firstname.length < 1 || lastname.length < 1) {
        problemText += 'A keresztnév és a vezetéknév megadása kötelező!\n';
        valid = false;
    }
    if (username.length < 5) {
        problemText += 'A felhasználónévnek legalább 5 karakter hosszúnak kell lennie!\n';
        valid = false;
    }
    if (/\s/.test(username)) {
        problemText += 'A felhasználónév nem tartalmazhat szóközt!\n';
        valid = false;
    }
    if (!emailRegex.test(email)) {
        problemText += 'Az email cím formátuma nem megfelelő!\n';
        valid = false;
    }
    if (password.length < 8) {
        problemText += 'A jelszónak legalább 8 karakter hosszúnak kell lennie!\n';
        valid = false;
    }
    if (!passRegex.test(password)) {
        problemText += 'A jelszónak tartalmaznia kell legalább egy nagybetűt, egy kisbetűt, egy számjegyet és egy speciális karaktert!\n';
        valid = false;
    }
    if (password !== confPW) {
        problemText += 'A jelszavak nem egyeznek!\n';
        valid = false;
    }

    setProblem(problemText);
    setButtonDisabled(!valid);
    return valid;
}
