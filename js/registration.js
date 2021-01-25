const form = document.getElementById('form');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const confirmPasswordInput = document.getElementById('confirmPasswordInput');
const submitButton = document.getElementById('submitButton');
const successDiv = document.getElementById('successDiv');
const errorDiv = document.getElementById('errorDiv');

const validation = (email, password)=>{
    if(email===''){
        errorDiv.innerHTML='Enter Email Addres!'
    }
    if(password===''){
        errorDiv.innerHTML='Enter Password!'
    }
    let valid = true;
    errorDiv.innerHTML='';
    const emailRegex = new RegExp ( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const passwordRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/);
    
    if(!emailRegex.test(email)){
        errorDiv.innerHTML='Email must be valid!\n';
        successDiv.innerHTML='';
        valid = false;
    }
    if(!passwordRegex.test(password)){
        errorDiv.innerHTML=errorDiv.innerHTML+'Password must be at least 8 characters long and contain 1 upper case 1 number!'
        successDiv.innerHTML='';
        valid=false;
    }
    return valid;
}

submitButton.addEventListener('click', e=>{
    e.preventDefault();
    if(passwordInput.value===confirmPasswordInput.value)
    {
        const check = validation(emailInput.value, passwordInput.value);
        if(check){
            errorDiv.innerHTML=''
            successDiv.innerHTML='Validation passed!'
        }

    }
    else{
        errorDiv.innerHTML='Passwords do not match';
    }

});