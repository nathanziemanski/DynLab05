var myInp = document.getElementById("num");
var numDisp = document.getElementById("numDisplay");
var answer = Math.round(Math.random()*100);
var score = 100;

document.getElementById("guess").addEventListener("click", function(){
    
    console.log(myInp.value);
    var realNum = parseInt(myInp.value);
                   
if(realNum == answer){
    numDisp.innerText = "Correct! Score: "+score;
} else {

    if (realNum > answer){
    numDisp.innerText = "Too big";
} else if(realNum < answer){
    numDisp.innerText = "Too small";
    
}
    score = score - 1;
}




});

