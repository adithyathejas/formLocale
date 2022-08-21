const form = document.getElementById("my-form")
var username = document.getElementById("name")
const email = document.getElementById("email")

form.addEventListener("submit",onSubmit);
myObj = {
    name : username.value,
    email: email.value
}

function onSubmit(e)
{
   
    
    localStorage.setItem("user",myObj)

}

