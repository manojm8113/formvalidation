const container=document.getElementById("container");
const form=document.getElementById("form");
const formgroup=document.getElementById("form-group");
const username=document.getElementById("username");
const password=document.getElementById("password");
const email=document.getElementById("email");
const password2=document.getElementById("cpassword");



form.addEventListener('submit',e=>{
e.preventDefault();
checkInput();
});
function checkInput(){
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();
    if(usernameValue===""){
        setError(username, "username cannot Be Blank");
    }else{
        setSuccess(username);
    }
    if(emailValue===""){
        setError(email, "Email cannot Be Blank");
    }else if(!isEmail(emailValue)){
        setError(email,"Not a Valid Email")
    }
       else {
        setSuccess(email);
    }
    if(passwordValue===""){
        setError(password, "password cannot Be Blank");
    }else{
        setSuccess(password);
    }
    if(password2Value===""){
        setError(password2, " Confirm Password cannot Be Blank");
    }else if(passwordValue !==password2Value){
        setError(password2,"password Does Not Match");
    }else{
        setSuccess(password2);
    }
}
function setError(input,message){
const formControl=input.parentElement;
const small=formControl.querySelector("p");
formControl.className="form-group error";
small.innerText=message;
}
function setSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-group success'
}
function isEmail(email){
    return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
}