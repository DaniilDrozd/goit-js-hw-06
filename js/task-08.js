const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event){

event.preventDefault();


const{
    elements: { email,password },   
} = event.currentTarget;

if (email.value === "" || password.value === ""){
    alert("Please fiil in all the fields!");

} else{
const formData = {
    email: login.value,
    password: password.value,
};
}
console.log(formData);
event.currentTarget.reset();
}