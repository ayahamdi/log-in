//////////////event of submitt//////////////////////////////
const form = document.querySelector('form');
const show = document.querySelector('form #show');
var password = document.getElementById("form_password");
let emails;
const email = document.getElementById('form_name');
form.addEventListener('submit' , addTask);
function addTask(e){
    let checkRemember = document.getElementById('form_remebercheck');
    console.log(checkRemember);
    const rememberMe = document.getElementById('customCheck');
    if ( document.getElementById('form_password').value == " " || document.getElementById('form_password').value == "" || document.getElementById('form_name').value == " " || document.getElementById('form_name').value == "" ) {
        alert("input is empty");
    }
    else{
        if (rememberMe.checked ) {
            if(localStorage.getItem('passwords') === null && localStorage.getItem('emails') === null) {
                passwords;
                emails;
            }else {
                passwords = JSON.parse(localStorage.getItem('passwords'));
                emails = JSON.parse(localStorage.getItem('emails'));
            }
            passwords = password.value;
            emails = email.value;
            localStorage.setItem('passwords', JSON.stringify(passwords));
            localStorage.setItem('emails', JSON.stringify(emails));
            alert('password is saved');
        } else {
            localStorage.removeItem('passwords');
            localStorage.removeItem('emails');
            email.value = '';
            password.value = '';

        }
    }
    e.preventDefault();
}
/////////////////////////// event of show password////////////////////////////
console.log(show);
show.addEventListener('click' , showPassword);
function showPassword(e){ 
    document.getElementById('show').style.color= '#C3C3C3';
    if (password.type === "password") {
        password.setAttribute("type", "text");
        document.getElementById('show').style.color= '#4D8AE6';
        //document.getElementById('disapear').style.cssText = 'display: inline-block;';
    } else {
        password.setAttribute("type", "password");
        //document.getElementById('disapear').style.cssText = 'display: none;';
    }
}
///////////////////////////////save data in local storage (event of check box)////////////////////////////////
/*const rememberMe = document.getElementById('customCheck');
rememberMe.addEventListener('click' , savePassword);
let emails;
const email = document.getElementById('form_name');
function savePassword(e){
    if (rememberMe.checked ) {
        if(localStorage.getItem('passwords') === null && localStorage.getItem('emails') === null) {
            passwords;
            emails;
        }else {
            passwords = JSON.parse(localStorage.getItem('passwords'));
            emails = JSON.parse(localStorage.getItem('emails'));
        }
        passwords = password.value;
        emails = email.value;
        localStorage.setItem('passwords', JSON.stringify(passwords));
        localStorage.setItem('emails', JSON.stringify(emails));
        alert('password is saved');
    } else {
        localStorage.removeItem('passwords');
        localStorage.removeItem('emails');
        email.value = '';
        password.value = '';

    }
}*/
////////////////////////////////////////retrieve data////////////////////////////
passwords = JSON.parse(localStorage.getItem('passwords'));
emails = JSON.parse(localStorage.getItem('emails'));
email.value = emails;
password.value = passwords;
