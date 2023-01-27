const startBtn = document.getElementById("submit")
const wel = document.getElementById("start")
const ques = document.getElementById("question")
const qs = document.getElementById("ques")
const next = document.getElementById("next")
const options = document.querySelectorAll(".btn")
const ans = document.getElementById("answer")
const val = document.getElementById("value")
const points = document.getElementById("marks")

startBtn.onclick = begin
next.addEventListener("click",fwd)

let score = 0 
let currentIndex = 0
let count = 0

function begin(){
    startBtn.style.display = "none"
    wel.classList.add("hide")
    ques.classList.remove("hide")
    next.style.display = "block"
    fwd()
}

options.forEach(function(item){
    item.addEventListener("click",function(){       
        if(item.innerText == correct){
            item.style.backgroundColor = "green"
            score++
            points.innerHTML = "Score : "+ score 
        }
        else{
            item.style.backgroundColor = "red"
        }
    })
})

const questions = 
["How do we get the DOM object in JavaScript ?",
"How are the objects organized in HTML DOM ?",
"Which of the following can be implemented using animation ?",
"What year was JavaScript launched ?"]

const answers = [
["getElementById()","getObject()","getElement()","getNode()"],
["Class wise","Hierarchy","Stack","Queue"],
["Fireworks","Fade effect","Roll-in or Roll-out","All of the above"],
["1996","1995","1994","None of the above"]
]

function fwd(){
    options.forEach(function(item){
        item.style.backgroundColor = ""
    })

    if(currentIndex<questions.length){
        qs.innerText = questions[currentIndex]
        count++
        val.innerHTML = count
    
        var i = 0
        options.forEach(function(item){       
            item.innerHTML = answers[currentIndex][i]  
            i++   
        })
    correct = answers[currentIndex][check(currentIndex)]
    currentIndex++
    }
    else{
        next.innerHTML = "Reload"
        wel.classList.remove("hide")
        ques.classList.add("hide")
        wel.innerHTML = "Play again ?<br> (You answered " + score + "/4 correctly)"
        next.onclick = reset
    }
}

function check(x){
    switch (x){
        case 0:
            return 0;
            break;
        case 1:
            return 1;
            break;
        case 2:
            return 3;
            break;
        case 3:
            return 1;
            break;
    }
}

function reset(){
    currentIndex = 0
    count =0
    score = 0
    
    ques.classList.remove("hide")
    wel.classList.add("hide")
    next.innerHTML = "Next"
    next.onclick = fwd()
    points.innerHTML = ""
}


