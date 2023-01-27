const startBtn = document.getElementById("submit")
const wel = document.getElementById("start")
const ques = document.getElementById("question")
const qs = document.getElementById("ques")
const next = document.getElementById("next")
const options = document.querySelectorAll(".btn")
const ans = document.getElementById("answer")


startBtn.onclick = begin

let score = 0

function begin(){
    startBtn.style.display = "none"
    wel.classList.add("hide")
    ques.classList.remove("hide")
    next.style.display = "block"
    fwd()
}
options.forEach(function(item){
    item.onclick = function(){
        
        
        if(item.className == "btn correct"){
            item.style.backgroundColor = "green"
            score++
            console.log(score)
        }
        else{
            item.style.backgroundColor = "red"
        }
    }
    
})


// options.forEach(function(item){
//     item.onclick = ""
// })
let currentIndex = 0
let currInd = 0
const questions = ["How do we get the DOM object in JavaScript",
"How are the objects organized in HTML DOM",
"Which of the following can be implemented using animation",
"What year was JavaScript launched"]
const answers = [["getElementById()","getObject()","getElement()","getNode()"],
["Class wise","Hierarchy","Stack","Queue"],
["Fireworks","Fade effect","Roll-in or Roll-out","All of the above"],
["1996","1995","1994","None of the above"]]

next.addEventListener("click",fwd)

function fwd(){
    if(currentIndex<questions.length){
    qs.innerText = questions[currentIndex]
    currentIndex++
  
    var i = 0
    options.forEach(function(item){       
            if(answers[currInd][i])
            item.innerHTML = answers[currInd][i]  
            i++ 
    })
    currInd++
}
else{
    
    next.innerHTML = "Reload"
    wel.classList.remove("hide")
    ques.classList.add("hide")
    wel.innerHTML = "Play again ?"
    next.onclick = abc
    
}
}

function abc(){
    currInd = 0
    currentIndex = 0
    console.log("yesssssssss")
    ques.classList.remove("hide")
    wel.classList.add("hide")
    next.innerHTML = "Next"
    next.onclick = fwd()
    
}


