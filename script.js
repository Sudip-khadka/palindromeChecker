
const check=()=>{
    
    const enteredText = document.getElementById('text-input').value;
    if(enteredText === ''){
        alert("Please input a value");
    }
    function alphaNumeric(){
        const regex = /[^A-Za-z0-9]/g;
        const lowerText = enteredText.replace(regex,'');
        return lowerText.toLowerCase();
    }
    const alphaNumericText = alphaNumeric(enteredText);
    const reversedStr=alphaNumericText.split('').reverse().join('');
    const result= document.getElementById('result');
if(alphaNumericText === reversedStr){
    
    result.innerHTML= `${enteredText} is a palindrome`;
}
else{
    result.innerHTML= `${enteredText} is not a palindrome`;
}

    console.log(alphaNumericText);
    console.log(reversedStr);
}