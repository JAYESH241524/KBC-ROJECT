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
        question: "Which organelle is responsible for protein synthesis in a cell?",
        options: ["Mitochondria", "Ribosome", "Golgi apparatus", "Lysosome"],
        answer: "Ribosome"
    },
    {
        question: "What is the functional unit of the kidney?",
        options: ["Nephron", "Neuron", "Alveoli", "Glomerulus"],
        answer: "Nephron"
    },
    {
        question: "Which hormone regulates blood sugar levels?",
        options: ["Insulin", "Adrenaline", "Thyroxine", "Glucagon"],
        answer: "Insulin"
    },
    {
        question: "Which gas is released during photosynthesis?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        answer: "Oxygen"
    },
    {
        question: "What is the main function of xylem in plants?",
        options: ["Transport of water", "Transport of food", "Gas exchange", "Photosynthesis"],
        answer: "Transport of water"
    },
    {
        question: "Which part of the brain controls balance and coordination?",
        options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
        answer: "Cerebellum"
    },
    {
        question: "What is the main structural component of the cell membrane?",
        options: ["Proteins", "Lipids", "Carbohydrates", "Nucleic acids"],
        answer: "Lipids"
    },
    {
        question: "Which enzyme breaks down starch into sugar?",
        options: ["Pepsin", "Lipase", "Amylase", "Trypsin"],
        answer: "Amylase"
    },
    {
        question: "Which blood vessels carry oxygenated blood from the heart to the body?",
        options: ["Veins", "Arteries", "Capillaries", "Venules"],
        answer: "Arteries"
    },
    {
        question: "Which process converts glucose into energy in the presence of oxygen?",
        options: ["Photosynthesis", "Anaerobic respiration", "Glycolysis", "Aerobic respiration"],
        answer: "Aerobic respiration"
    },
    {
        question: "Which biomolecule carries genetic information?",
        options: ["Proteins", "Lipids", "DNA", "Carbohydrates"],
        answer: "DNA"
    },
    {
        question: "Which part of the human digestive system absorbs the most nutrients?",
        options: ["Stomach", "Large intestine", "Small intestine", "Esophagus"],
        answer: "Small intestine"
    },
    {
        question: "What is the primary function of white blood cells?",
        options: ["Oxygen transport", "Blood clotting", "Immunity", "Energy production"],
        answer: "Immunity"
    },
    {
        question: "Which type of reproduction involves the fusion of gametes?",
        options: ["Asexual reproduction", "Binary fission", "Budding", "Sexual reproduction"],
        answer: "Sexual reproduction"
    },
    {
        question: "What is the process by which plants lose water in the form of vapor?",
        options: ["Respiration", "Photosynthesis", "Transpiration", "Osmosis"],
        answer: "Transpiration"
    },
    {
        question: "Which part of the neuron receives signals from other neurons?",
        options: ["Axon", "Dendrites", "Synapse", "Myelin sheath"],
        answer: "Dendrites"
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

                    


                   
                }else if(currentQuestion>15){
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
                    winAmount.appendChild(feedBack);

                }
            })
    }
    
}
checkAnswer()