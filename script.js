var message = document.getElementById("message");

message.addEventListener("keydown", (e)=> {
    if (e.key == "Enter")
     passmessage();
}
  

)

function passmessage() {
    
    alert(message.value);
    message.value = "";
   
}
