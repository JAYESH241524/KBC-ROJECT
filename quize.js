const welcomeScreen=document.getElementById("welcomeScreen");
const quizeArea=document.getElementById("quizeArea");

const levels=["₹10,00,000"
    ,"₹5,00,000"
    ,"₹2,50,000"
    ,"₹1,25,000"
    ,"₹64,000"
    ,"₹32,000"
    ,"₹16,000"
    ,"₹8,000"
    ,"₹4,000"
    ,"₹2,000"
    ,"₹1,000"
    ,"₹500"
    ,"₹300"
    ,"₹200"
    ,"₹100"
];
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
 function setLevels(){
    const levelList=document.getElementById("levelList");
    levels.forEach((level,index)=>{
       let listItem=document.createElement("li");
       listItem.classList.add("levelListItems");
       if(levels.length===index+1){
        listItem.classList.add("activeLevel");
       }
       listItem.innerHTML=
       `<span class="levelNumber">${levels.length-index}.</span>
       <span class="levelAmount">${level}</span>`;
       levelList.appendChild(listItem);

    });
 }
 setLevels();
