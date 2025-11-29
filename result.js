const score=document.getElementById("highlightresult");
const result=document.getElementById("result-content");
const finalScore = Number(localStorage.getItem("finalScore"));
const totalScore = Number(localStorage.getItem("totalquestion"));
const scorewindow = localStorage.getItem("scorewindow");
if(scorewindow=="current"){
if(finalScore>=totalScore/2 && totalScore>=1){
    result.innerHTML="Congratulations!"
}
else{
    result.innerHTML="Oops!"
}
score.innerHTML="Your score is "+finalScore+"/"+totalScore;
}
else{
    score.innerHTML="Your highest score is "+finalScore+"/"+totalScore;
    result.classList.add("hidden");
}