//Generate Password Type Function
const generatePassword = function(){
    generate.innerText = 'Password  Generated';
    var choose = Number(prompt(("Which type or password do you need?\n1.Lower Case Password\n2.Upper Case Password\n3.Number Password \n4.Mixed")));
    lowerCase= "abcdefghijklmnopqrstuvwxyz";
    upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    number= "0123456789";
    mixed= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-{}[]:;<>?/";
    var password = "";
    if(choose == 1){
        var passLength =Number(prompt('How many digit of password do do you need?'));
        for(var i = 0; i<passLength; i++){
            password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
        }
    }
    else if(choose == 2){
        var passLength =Number(prompt('How many digit of password do do you need?'));
        for(var i = 0; i<passLength; i++){
            password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
        }
    }
    else if(choose == 3){
        var passLength =Number(prompt('How many digit of password do do you need?'));
        for(var i = 0; i<passLength; i++){
            password += number.charAt(Math.floor(Math.random() * number.length));
        }
    }
    else if(choose == 4){
        var passLength =Number(prompt('How many digit of password do do you need?'));
        for(var i = 0; i<passLength; i++){
            password += mixed.charAt(Math.floor(Math.random() * mixed.length));
        }
    }
    else{
        alert('Sorry, You chose wrong number :(')
    }
    passArea.innerText = password;
    return password;
}

//Generate Mixed Password Function
const GenerateMixedPassword = function(){
    generatePassBtn.innerText = 'Generate New password';
    generate.innerText = 'Password Generated';
    mixedThings= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-{}[]:;<>?/";
    var mixedThingsLength = mixedThings.length;
    var passwordLength =Number(prompt('How many digit of password do do you need?'));
    var mixedPassword = "";
    for(var i =0; i<passwordLength; i++){
        mixedPassword += mixedThings.charAt(Math.floor(Math.random() * mixedThingsLength));
    }
    passArea.innerText = mixedPassword;
    return mixedPassword;
}
let passArea = document.querySelector('.passArea');
let generate = document.querySelector('.generator');
let btn = document.querySelector('#new-password');
let generatePassBtn = document.querySelector('#mixed-pass');
btn.addEventListener('click', generatePassword);
generatePassBtn.addEventListener('click',GenerateMixedPassword);

