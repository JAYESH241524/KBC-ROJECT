const welcomeScreen=document.getElementById("welcomeScreen");
const quizeArea=document.getElementById("quizeArea");
 function startGame(){
    const userName=document.getElementById("userName").value;
    const error=document.getElementById("nameerror");
    if(userName.trim()===""){
        error.innerHTML="enter valid user name";
        return;
    }
    error.innerHTML="";
    welcomeScreen.classList.add("hide");
    quizeArea.classList.remove("hide");
    
 }