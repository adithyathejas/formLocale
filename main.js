const form = document.getElementById("my-form")
var username = document.getElementById("name")
const email = document.getElementById("email")

form.addEventListener("submit",onSubmit);





function onSubmit(e)
{
    e.preventDefault()
   
    myObj = {
        name : username.value,
        email: email.value
    }

    var myObj_serial = JSON.stringify(myObj);

    localStorage.setItem("user"+myObj.name,myObj_serial);
    addNewElement(myObj)

}

var keys = Object.keys(localStorage)
let i = keys.length

keys.forEach(function (key){
    if (key.match(/userDetails/g)) {    
        stringifiedDetailsOfPeople = localStorage.getItem(key);
        console.log("stringifiedDetailsOfPeople", stringifiedDetailsOfPeople);
        detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
        console.log("details", detailsOfPeople);
        addNewElement(detailsOfPeople);
      }
})

function addNewElement(element){
    var ul = document.getElementById("users");
    var li = document.createElement('li')
    li.appendChild(document.createTextNode("name"+element.name+" email:",element.email))
    var delete  = document.createElement('button') 
}






