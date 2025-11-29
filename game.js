const question=document.getElementById("question");
const qcounter=document.getElementById("qcounter");
const scorehtml=document.getElementById("score");
const choices=Array.from(document.getElementsByClassName("choice-text"));
console.log("choices");
let currrentQuestions={};
let acceptingans=true;
let score=0;
let questionCounter=0;
let availablequestion=[];

let questions = [
    { question: "Which river is known as the 'Ganga of the South'?", choice1: "Krishna", choice2: "Godavari", choice3: "Kaveri", choice4: "Tungabhadra", answer: 3 },
    { question: "Where is the famous Brihadeeswara Temple located?", choice1: "Madurai", choice2: "Thanjavur", choice3: "Kanchipuram", choice4: "Hyderabad", answer: 2 },
    { question: "Which is the longest river in India?", choice1: "Ganga", choice2: "Godavari", choice3: "Brahmaputra", choice4: "Yamuna", answer: 1 },
    { question: "Konark Sun Temple is in which state?", choice1: "Odisha", choice2: "West Bengal", choice3: "Gujarat", choice4: "Rajasthan", answer: 1 },
    { question: "Which Indian state is known as 'Land of Five Rivers'?", choice1: "Haryana", choice2: "Punjab", choice3: "Uttar Pradesh", choice4: "Bihar", answer: 2 },
    { question: "Who was the first Prime Minister of India?", choice1: "Jawaharlal Nehru", choice2: "Rajendra Prasad", choice3: "Sardar Patel", choice4: "Lal Bahadur Shastri", answer: 1 },
    { question: "Where is the Kedarnath Temple located?", choice1: "Uttarakhand", choice2: "Himachal Pradesh", choice3: "Jammu & Kashmir", choice4: "Sikkim", answer: 1 },
    { question: "Which river flows through Varanasi?", choice1: "Ganga", choice2: "Yamuna", choice3: "Saraswati", choice4: "Godavari", answer: 1 },
    { question: "Who is known as the 'Father of the Indian Constitution'?", choice1: "Sardar Patel", choice2: "Dr. B.R. Ambedkar", choice3: "Nehru", choice4: "Rajendra Prasad", answer: 2 },
    { question: "Which is the largest state of India (area)?", choice1: "Maharashtra", choice2: "Rajasthan", choice3: "Uttar Pradesh", choice4: "Madhya Pradesh", answer: 2 },
    { question: "Where is Vaishno Devi Temple?", choice1: "Punjab", choice2: "Jammu & Kashmir", choice3: "Haryana", choice4: "Uttarakhand", answer: 2 },
    { question: "Which river is also known as 'Dakshin Ganga'?", choice1: "Krishna", choice2: "Godavari", choice3: "Kaveri", choice4: "Narmada", answer: 2 },
    { question: "Where is the Golden Temple located?", choice1: "Amritsar", choice2: "Ludhiana", choice3: "Chandigarh", choice4: "Jalandhar", answer: 1 },
    { question: "Who was the first President of India?", choice1: "Dr. Rajendra Prasad", choice2: "Sarvepalli Radhakrishnan", choice3: "Nehru", choice4: "Zakir Hussain", answer: 1 },
    { question: "Which Indian river forms the Sundarbans delta?", choice1: "Ganga-Brahmaputra", choice2: "Godavari", choice3: "Krishna", choice4: "Indus", answer: 1 },
    { question: "Meenakshi Temple is located in?", choice1: "Madurai", choice2: "Chennai", choice3: "Coimbatore", choice4: "Thanjavur", answer: 1 },
    { question: "Which is the smallest state in India?", choice1: "Sikkim", choice2: "Goa", choice3: "Tripura", choice4: "Delhi", answer: 2 },
    { question: "Which city is known as the 'Pink City'?", choice1: "Udaipur", choice2: "Jaipur", choice3: "Jodhpur", choice4: "Ajmer", answer: 2 },
    { question: "Hampi is located in which state?", choice1: "Karnataka", choice2: "Tamil Nadu", choice3: "Kerala", choice4: "Maharashtra", answer: 1 },
    { question: "Which is the national animal of India?", choice1: "Lion", choice2: "Tiger", choice3: "Elephant", choice4: "Leopard", answer: 2 },
    { question: "Which river originates from Amarkantak?", choice1: "Narmada", choice2: "Tapti", choice3: "Godavari", choice4: "Krishna", answer: 1 },
    { question: "Where is the Qutub Minar located?", choice1: "Delhi", choice2: "Agra", choice3: "Jaipur", choice4: "Hyderabad", answer: 1 },
    { question: "Badrinath Temple is dedicated to which god?", choice1: "Shiva", choice2: "Vishnu", choice3: "Brahma", choice4: "Indra", answer: 2 },
    { question: "Which is the highest peak in India?", choice1: "K2", choice2: "Kangchenjunga", choice3: "Nanda Devi", choice4: "Kamet", answer: 2 },
    { question: "Sanchi Stupa is in?", choice1: "Uttar Pradesh", choice2: "Madhya Pradesh", choice3: "Bihar", choice4: "Rajasthan", answer: 2 },
    { question: "Who is known as the 'Iron Man of India'?", choice1: "Tagore", choice2: "Nehru", choice3: "Sardar Patel", choice4: "Ambedkar", answer: 3 },
    { question: "Which river flows through Gujarat?", choice1: "Ganga", choice2: "Godavari", choice3: "Narmada", choice4: "Kaveri", answer: 3 },
    { question: "Where is Jagannath Temple?", choice1: "Puri", choice2: "Kolkata", choice3: "Varanasi", choice4: "Chennai", answer: 1 },
    { question: "What is the national flower of India?", choice1: "Lotus", choice2: "Rose", choice3: "Jasmine", choice4: "Sunflower", answer: 1 },
    { question: "Where is Sardar Sarovar Dam?", choice1: "Gujarat", choice2: "Rajasthan", choice3: "Maharashtra", choice4: "Bihar", answer: 1 },

    // (Continuing more GK questions)
    { question: "The Charminar is located in?", choice1: "Hyderabad", choice2: "Delhi", choice3: "Bhopal", choice4: "Lucknow", answer: 1 },
    { question: "Which is the national bird of India?", choice1: "Peacock", choice2: "Parrot", choice3: "Crow", choice4: "Eagle", answer: 1 },
    { question: "Which river flows through Ahmedabad?", choice1: "Sabarmati", choice2: "Ganga", choice3: "Yamuna", choice4: "Krishna", answer: 1 },
    { question: "Who wrote the National Anthem?", choice1: "Bankim Chandra", choice2: "Rabindranath Tagore", choice3: "Sarojini Naidu", choice4: "Gandhi", answer: 2 },
    { question: "The Somnath Temple is located in?", choice1: "Odisha", choice2: "Tamil Nadu", choice3: "Gujarat", choice4: "Kerala", answer: 3 },
    { question: "Which Indian state is known as 'Spice Garden of India'?", choice1: "Kerala", choice2: "Karnataka", choice3: "Goa", choice4: "Assam", answer: 1 },
    { question: "Where is the famous Ajanta Caves?", choice1: "Karnataka", choice2: "Maharashtra", choice3: "Goa", choice4: "MP", answer: 2 },
    { question: "Which is the national river of India?", choice1: "Ganga", choice2: "Yamuna", choice3: "Godavari", choice4: "Narmada", answer: 1 },
    { question: "Who was the first woman Prime Minister of India?", choice1: "Sonia Gandhi", choice2: "Pratibha Patel", choice3: "Indira Gandhi", choice4: "Sarojini Naidu", answer: 3 },
    { question: "Which city is called 'City of Lakes'?", choice1: "Bhopal", choice2: "Udaipur", choice3: "Kochi", choice4: "Mysore", answer: 2 },
    { question: "Kaziranga National Park is famous for?", choice1: "Lion", choice2: "Tiger", choice3: "One-horned Rhino", choice4: "Elephant", answer: 3 },
    { question: "Where does the Yamuna river originate?", choice1: "Yamunotri", choice2: "Gangotri", choice3: "Amarnath", choice4: "Siachen", answer: 1 },
    { question: "Gateway of India is located in?", choice1: "Chennai", choice2: "Delhi", choice3: "Mumbai", choice4: "Goa", answer: 3 },
    { question: "Which temple is known as the Black Pagoda?", choice1: "Badrinath", choice2: "Konark Sun Temple", choice3: "Rameswaram", choice4: "Somnath", answer: 2 },
    { question: "Which is the highest dam in India?", choice1: "Hirakud", choice2: "Tehri Dam", choice3: "Bhakra Nangal", choice4: "Sardar Sarovar", answer: 2 },
    { question: "India Gate is located in?", choice1: "Chennai", choice2: "Delhi", choice3: "Pune", choice4: "Jaipur", answer: 2 },
    { question: "Which river flows through Lucknow?", choice1: "Gomti", choice2: "Yamuna", choice3: "Ganga", choice4: "Betwa", answer: 1 },
    { question: "Where is the Rameswaram Temple located?", choice1: "Kerala", choice2: "Tamil Nadu", choice3: "Odisha", choice4: "Gujarat", answer: 2 },
    { question: "Which monument is called the 'Symbol of Love'?", choice1: "Taj Mahal", choice2: "Red Fort", choice3: "Qutub Minar", choice4: "India Gate", answer: 1 },
    { question: "Gir National Park is in?", choice1: "Rajasthan", choice2: "Gujarat", choice3: "Madhya Pradesh", choice4: "Assam", answer: 2 },
    { question: "The river Brahmaputra flows mainly through?", choice1: "Assam", choice2: "UP", choice3: "Rajasthan", choice4: "Punjab", answer: 1 },
    { question: "The Lotus Temple is located in?", choice1: "Delhi", choice2: "Mumbai", choice3: "Indore", choice4: "Chennai", answer: 1 },
    { question: "Which state is famous for the Lingaraja Temple?", choice1: "Odisha", choice2: "Bihar", choice3: "Telangana", choice4: "Rajasthan", answer: 1 },
    { question: "The Vivekananda Rock Memorial is in?", choice1: "Pondicherry", choice2: "Kanyakumari", choice3: "Hyderabad", choice4: "Mumbai", answer: 2 },
    { question: "Which river flows through Kolkata?", choice1: "Ganga (Hooghly)", choice2: "Krishna", choice3: "Kaveri", choice4: "Narmada", answer: 1 },
    { question: "Which mountain range separates Kashmir from Tibet?", choice1: "Aravalli", choice2: "Zanskar", choice3: "Vindhya", choice4: "Patkai", answer: 2 },
    { question: "In which state is the Dilwara Temple located?", choice1: "Rajasthan", choice2: "Himachal", choice3: "Punjab", choice4: "UP", answer: 1 },
    { question: "Which Indian city is called 'Silicon Valley of India'?", choice1: "Hyderabad", choice2: "Bengaluru", choice3: "Mumbai", choice4: "Delhi", answer: 2 },
    { question: "Char Dham includes which of these?", choice1: "Badrinath", choice2: "Meenakshi", choice3: "Somnath", choice4: "Ajanta", answer: 1 },
    { question: "Which Indian river is oldest geologically?", choice1: "Indus", choice2: "Narmada", choice3: "Krishna", choice4: "Ganga", answer: 2 },
    { question: "Shree Jagannath Temple's Ratha Yatra is held in?", choice1: "Puri", choice2: "Konark", choice3: "Bhubaneswar", choice4: "Cuttack", answer: 1 }
];

const CORRECT_BONUS= 10;
availablequestion=[...questions];
const MAX_QUESTIONS=availablequestion.length;
startGame=()=>{
    questionCounter=0;
    score=0;
    localStorage.setItem("totalquestion", availablequestion.length);
    console.log(availablequestion);
    getNewQuestion();

}

getNewQuestion=()=>{
    if(availablequestion.length==0 || questionCounter>=MAX_QUESTIONS){
        localStorage.setItem("finalScore", score);
        localStorage.setItem("scorewindow","current");
        return window.location.assign("end.html");
    }

    questionCounter++;
    qcounter.innerHTML=questionCounter+"/"+MAX_QUESTIONS;
    const qindex=0;
    console.log(qindex);
    currrentQuestions=availablequestion[qindex];
    question.innerHTML=currrentQuestions.question;
    choices.forEach(choice=>{
        const number=choice.dataset["number"];
        console.log('choice' + number);
        choice.innerText=currrentQuestions['choice' + number];

    });

    availablequestion.splice(qindex,1);
    acceptingans=true;
};
let classtoapply="incorrect";
choices.forEach(choice=>{
choice.addEventListener('click',e=>{
       if(!acceptingans) return;
       acceptingans=false;
       const selectedChoice=e.target;
       const selectedAnswer=selectedChoice.dataset["number"];
    
       if(selectedAnswer==currrentQuestions.answer){
        score++;
        classtoapply="correct";
       }
       else{
        classtoapply="incorrect";
       }

       selectedChoice.parentElement.classList.add(classtoapply);
    
       scorehtml.innerHTML=score;
       setTimeout(()=>{
        getNewQuestion();
        selectedChoice.parentElement.classList.remove(classtoapply);
       },500)
       

       
});
});

startGame();

