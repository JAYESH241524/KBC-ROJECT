const welcomeScreen=document.getElementById("welcomeScreen");
const quizeArea=document.getElementById("quizeArea");
const resultPage=document.getElementById("resultPage");

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
const questionsList = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        answer: "Blue Whale"
    },
    {
        question: "How many continents are there in the world?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "Who was the first Prime Minister of India?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Dr. B.R. Ambedkar"],
        answer: "Jawaharlal Nehru"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yen", "Dollar", "Rupee", "Euro"],
        answer: "Yen"
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Yangtze", "Nile", "Mississippi"],
        answer: "Nile"
    },
    {
        question: "Which is the smallest country in the world?",
        options: ["Vatican City", "Monaco", "Maldives", "Liechtenstein"],
        answer: "Vatican City"
    },{
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        answer: "Blue Whale"
    },
    {
        question: "How many continents are there in the world?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "how did u write your exam",
        options: ["poor", "very good", "good", "average"],
        answer: "very good"
    }
];


let currentQuestion=1;
let currentOptions=questionsList[currentQuestion].options;
let currentAnswer=questionsList[currentQuestion].answer;


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

 function setQuestions(){
    const questionArea=document.getElementById("questionArea");
    let q=document.createElement("div");
    q.classList.add("question");
    q.innerHTML=`${questionsList[currentQuestion].question}s`;
    questionArea.appendChild(q);
    
    const optionContainer=document.createElement("div");
    optionContainer.classList.add("optionContainer");
    
    
    currentOptions.forEach((option,index)=>{
        let op=document.createElement("div");
        op.classList.add("option");
        op.innerHTML=`${option}`;
        optionContainer.appendChild(op);
    });
    questionArea.appendChild(optionContainer)


 }
 setQuestions();
let levelListItems=document.getElementsByClassName("levelListItems");
function checkAnswer(){
    
    let optionList=document.getElementsByClassName("option");
    for(let i=0;i<4;i++){
        
        optionList[i].addEventListener('click',
            ()=>{
                if(currentAnswer===optionList[i].innerHTML && currentQuestion<=14 ){
                    let q=document.querySelector(".question");
                    let op=document.getElementsByClassName("option");
                    currentQuestion++;
                    q.innerHTML=(questionsList[currentQuestion].question);
                    
                    for(let k=0;k<4;k++){
                        op[k].innerHTML=(questionsList[currentQuestion].options[k]);
                    }
                    currentAnswer=questionsList[currentQuestion].answer;

                    (levelListItems[levels.length-(currentQuestion-1)]).classList.remove("activeLevel");

                   (levelListItems[levels.length-(currentQuestion)]).classList.add("activeLevel");

                    


                   
                }else if(currentQuestion===15){
                    const winAmount=document.getElementById("winAmount");
                    const feedBack=document.createElement("div");
                    winAmount.innerHTML=`win amount: ${levels[levels.length-(currentQuestion)]}`;
                    feedBack.innerHTML="you won kbc";

                }
                else{
                    const winAmount=document.getElementById("winAmount");
                    const feedBack=document.createElement("div");
                    feedBack.classList.add("feedBack");
                    if(currentQuestion==1){
                        winAmount.innerHTML="win amount: ₹ 0";
                        feedBack.innerHTML="Better luck time";
                    }
                    else if(currentQuestion>1 && currentQuestion<=10){
                        winAmount.innerHTML=`win amount: ${levels[levels.length-(currentQuestion)]}`
                        feedBack.innerHTML="nice played";
                    }
                    else if(currentQuestion>10 && currentQuestion<=13){
                        winAmount.innerHTML=`win amount: ${levels[levels.length-(currentQuestion)]}`
                        feedBack.innerHTML="amazing play";
                    }
                    else{
                        winAmount.innerHTML=`win amount: ${levels[levels.length-(currentQuestion)]}`
                        feedBack.innerHTML="you won kbc";
                    }
                    
                    quizeArea.classList.add("hide");
                    resultPage.classList.remove("hide")

                }
            })
    }
    
}
checkAnswer()