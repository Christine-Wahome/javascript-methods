function checkForSequence(password) {
    for (let i = 0; i < password.length - 2; i++) {
        let charCode = password.charCodeAt(i);
        let nextCharCode = password.charCodeAt(i + 1);
        let nextNextCharCode = password.charCodeAt(i + 2);
        if (charCode + 1 === nextCharCode && nextCharCode + 1 === nextNextCharCode || charCode === nextNextCharCode || charCode + 2 === nextCharCode && nextCharCode + 2 === nextNextCharCode || 
            charCode + 3 === nextCharCode && nextCharCode + 3 === nextNextCharCode) {
            return false;
        }
    }
    return true;
}
let password = "369";
let isValid = checkForSequence(password);
console.log(isValid);