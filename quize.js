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
    }
];
let currentQuestion=1;
let currentOptions=questionsList[currentQuestion].options;
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
    q.innerHTML=`<span>${questionsList[currentQuestion-1].question}</span>`;
    questionArea.appendChild(q);
    


 }
 setQuestions();