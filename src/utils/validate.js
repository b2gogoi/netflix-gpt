export const checkValidateData = (email, password) => {
    const ergx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const isEmailValid = ergx.test(email);
    const isPwdValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (isEmailValid && isPwdValid) {
        return null;
    } else {
        if (!isEmailValid) {
            return `Email ID is not valid: ${email}`;
        }

        if (!isPwdValid) {
            return `Password is not valid`;
        }
    }

    return false;

}