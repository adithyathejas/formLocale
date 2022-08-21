const form = document.getElementById("my-form")
var username = document.getElementById("name")
const email = document.getElementById("email")

form.addEventListener("submit",onSubmit);
window.addEventListener("beforeunload", handleBeforeUnload);





function onSubmit(e)
{
    e.preventDefault()
   
    myObj = {
        name : username.value,
        email: email.value
    }

    var myObj_serial = JSON.stringify(myObj);

    localStorage.setItem("user",myObj_serial);

    var myObj_deserial = JSON.parse(myObj_serial); 
    alert(myObj_deserial.name,myObj_deserial.email)
}


function handleBeforeUnload(e){
    e.preventDefault();
    const message =
    "Are you sure you want to leave? All provided data will be lost.";
  e.returnValue = message;
  return message;
}


