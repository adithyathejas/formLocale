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
    if (key.match(/user/g)) {    
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
    console.log(element.email)
    li.appendChild(document.createTextNode("name: "+element.name+" email:"+element.email))
    var a1 = document.createElement("input");
    a1.id = "del";
    a1.type = "button";
    a1.value = "Edit";
    a1.addEventListener("click", function() {
        console.log(object);
        document.getElementById("name").value = object.name;
        document.getElementById("email").value = object.emailId;
        li.remove();
    });
        a1.className = "edit";
        a1.style.border = "2px solid green";
        console.log(a1);
        li.appendChild(a1);
        var a = document.createElement("input");
        a.type = "button";
        a.value = "delete";
        a.addEventListener("click", function() {
            localStorage.removeItem("userDetails" + object.emailId);
            li.remove();
        });
        a.className = "delete";
        a.style.border = "2px solid red";
        console.log(a);
        li.appendChild(a);
    ul.appendChild(li)
}






