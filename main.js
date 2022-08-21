const form = document.getElementById("my-form")
var username = document.getElementById("name")
const email = document.getElementById("email")

form.addEventListener("submit",onSubmit);

function onSubmit(e)
{
    console.log("aaaa",username.value)
    localStorage.setItem("name",username.value)
    localStorage.setItem("email",email.value)

}

