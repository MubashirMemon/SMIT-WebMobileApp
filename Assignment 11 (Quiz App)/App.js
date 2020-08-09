
var questionsArray = [
    {   
        question : "Who  is the Prime Minister of Pakistan ?",
        correctAnswer : "Imran Khan",
        options : ["Mian Nawaz Shareef","Zulfiqar Ali Bhutto ","Imran Khan ","Shahid Khaqan Abbasi"]
    },
    {
        question : "Who is the Founder of Saylani International Welfare Trust  ?",
        correctAnswer : "Moulana Bashir Faroqui",
        options : ["Moulana Bashir Faroqui","Abdul Sattar Edhi","Molana Siraj ul Haq ","Shahid Afridi"]
    },
    {
        question : "Which one is the correct answer of 3 + 5 ?",
        correctAnswer : "8",
        options : ["8","10","9","11"]
    
    },
    {
        question : "Which JavaScript Framework is use For Mobile App Development?",
        correctAnswer : "React Native",
        options : ["React.js","Kotlin","Flutter","React Native"]
    },
    {
        question : "Which one is the correct answer of 4 * 5 ?",
        correctAnswer : "20",
        options : ["8","20","7","10"]
    
        }
];


var count = 1;
var questionCount = 2;
var answerCount = 0;
var score = 0;


var question = document.getElementById("question");

var optionLabel = document.getElementsByClassName("optionLabel");

var nextBtn = document.getElementById("nextBtn");

var sectionDiv = document.getElementById("sectionDiv");

var questionHeading = document.getElementById("questionHeading");

var optionName = document.getElementsByName("option");

        




onload = function(){

    questionHeading.innerHTML = "Question # : 1";

    question.innerHTML = questionsArray[0].question;

    for(let i=0; i<optionLabel.length; i++){
        optionLabel[i].innerHTML = " "+questionsArray[0].options[i];
    }
}

function next(){
    
    for(let i=0; i<optionName.length; i++){
        if(optionName[i].checked){

            var answer = optionName[i].nextSibling.innerHTML;

            var ansLength = answer.length;

            answer = answer.slice(1,ansLength);

            var correctAnswer = questionsArray[answerCount].correctAnswer;

            if(answer === correctAnswer){

                score += 3;
            }
            
            questionHeading.innerHTML = "Question # : "+questionCount;

            question.innerHTML = questionsArray[count].question;
            
            for(let i=0; i<optionLabel.length; i++){
                optionLabel[i].innerHTML = " "+questionsArray[count].options[i];
            
            }      
            count++;
            answerCount++;
            questionCount++;
        }
        
    }
    
     if(count === questionsArray.length){
        var resultBtn = document.createElement("button");
        var resultBtnText = document.createTextNode("Result");
        resultBtn.appendChild(resultBtnText);
        resultBtn.setAttribute("class","resultBtn");
        resultBtn.setAttribute("onclick","result()");
        sectionDiv.appendChild(resultBtn);
        nextBtn.disabled = true;
        nextBtn.style.opacity = "0.5";
        nextBtn.style.cursor = "default";        
    }
}

function result(){
    for(let i=0; i<optionName.length; i++){
        if(optionName[i].checked){
            var answer = optionName[i].nextSibling.innerHTML;
            var ansLength = answer.length;
            answer = answer.slice(1,ansLength);
            var correctAnswer = questionsArray[answerCount].correctAnswer;
            if(answer === correctAnswer){
                score += 3;
            }
            
            
        }
        
    }
    answerCount++;
    alert("Your Score is "+ score + " out of 15");
}

