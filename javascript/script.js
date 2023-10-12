// Signin page
  function signin(){
  let email = document.getElementById("Email").value;
  let pass = document.getElementById("Pass").value;

  let localemail = localStorage.getItem("Email")
  let localpass = localStorage.getItem("Password")

  if(email == localemail && pass == localpass){
    window.open("welcompage.html")
   
  }else{
    document.getElementById("err4").innerHTML = "wrong password or email!"
  }
} 


// Signup page
function signup(){
 let name = document.getElementById("name").value;
 let email = document.getElementById("email").value;
 let num = document.getElementById("number").value;
 let pass = document.getElementById("pass").value;
   
 // required
 if(name == ""){
   document.getElementById("err1").innerHTML = "please fill this input";
 }else if(email == ""){
   document.getElementById("err2").innerHTML = "please fill this input";
   document.getElementById("err1").innerHTML = "";
 }else if(num == ""){
   document.getElementById("err3").innerHTML = "please fill this input";
   document.getElementById("err2").innerHTML = "";

 }else if(pass == ""){
   document.getElementById("err4").innerHTML = "please fill this input";
   document.getElementById("err3").innerHTML = "";
 }else{
   // local storage
   document.getElementById("err4").innerHTML = ""
   localStorage.setItem("Name",name)
   localStorage.setItem("Email",email)
   localStorage.setItem("Number",num)
   localStorage.setItem("Password",pass)
   window.open("welcompage.html")
 }
 }
 
 //  caps lock
 window.addEventListener("keyup", event =>{
  let iscap = event.getModifierState("CapsLock")

   if(iscap){
     document.getElementById("err4").innerHTML = "CapsLock is on!"
     document.getElementById("err4").style.color = "red";
   }else{
     document.getElementById("err4").innerHTML = ""

   }
 })
 

 // welcome page
 let name = localStorage.getItem("Name")
 document.getElementById("h1").innerHTML = "Hey! "+name+","+ " Welcome to our website" ;