const seqPresent = "SEQUENCE PRESENT"
const noSeqPresent = "PASWWORD VALID!"

function checkForSequence(password) {
    for (let i = 0; i < password.length ; i++) {
        let charCode = password.charCodeAt(i);
        let nextCharCode = password.charCodeAt(i + 1);
        let nextNextCharCode = password.charCodeAt(i + 2);
        // let nextNextNextCharCode = password.charCodeAt(i + 3);
        if (charCode + 1 === nextCharCode && nextCharCode + 1 === nextNextCharCode || charCode === nextNextCharCode || charCode + 2 === nextCharCode && nextCharCode + 2 === nextNextCharCode || 
            charCode + 3 === nextCharCode && nextCharCode + 3 === nextNextCharCode || charCode === nextNextCharCode || charCode + 2 === nextCharCode && nextCharCode + 2 === nextNextCharCode || 
            charCode -1 === nextCharCode && nextCharCode -1 === nextNextCharCode){
            return seqPresent;
        }
    }
    return noSeqPresent;
}
let password = "2w444";
let isValid = checkForSequence(password);
console.log(isValid);