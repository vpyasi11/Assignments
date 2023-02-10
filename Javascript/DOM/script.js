const startBtn = document.getElementById("submit")
const wel = document.getElementById("start")
const ques = document.getElementById("question")
const qs = document.getElementById("ques")
const next = document.getElementById("next")
const options = document.querySelectorAll(".btn")
const ans = document.getElementById("answer")
const val = document.getElementById("value")
const points = document.getElementById("marks")
const Qno = document.getElementsByClassName("Q")
const explain = document.getElementById("explain")

startBtn.onclick = begin
next.addEventListener("click",fwd)

let score = 0 
let currentIndex = 0
let count = 0
let flag = 0

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

const explaination = 
["getElementByID() method in JavaScript is a document method. When we give a specific string which should match the ID of the HTML element, it returns the element object.",
"The way a document content is accessed and modified is called the Document Object Model, or DOM. The Objects are organized in a hierarchy. This hierarchical structure applies to the organization of objects in a Web document.",
"You can use JavaScript to create a complex animation which includes but not limited to above effects",
"JavaScript was created at Netscape Communications by Brendan Eich in 1995. Netscape and Eich designed JavaScript as a scripting language for use with the company's flagship web browser, Netscape Navigator"]

function begin(){
    startBtn.style.display = "none"
    wel.classList.add("hide")
    ques.classList.remove("hide")
    next.style.display = "block"
    fwd()
}

options.forEach(function(item){
    item.addEventListener("click",function(){     

        if(flag == 0){  
            if(item.innerText == correct){
                item.style.backgroundColor = "green"
                Qno[currentIndex-1].style.backgroundColor = "green"
                score++
                points.innerHTML = "Score : "+ score 
                flag = 1
            }
            else{
                item.style.backgroundColor = "red"
                Qno[currentIndex-1].style.backgroundColor = "red"
                flag = 1
                options.forEach(function(item){
                    if(item.innerHTML == correct){
                        item.style.backgroundColor = "green"
                    }
                })
            }
            explain.innerHTML = "<h3>Explaination : </h3>" + explaination[currentIndex-1]
        }
    })
})


function fwd(){
    options.forEach(function(item){
        item.style.backgroundColor = ""
    })
    explain.innerHTML = ""

    flag = 0

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
        wel.innerHTML = "Take Quiz again ?<br> (You answered " + score + "/4 correctly)"
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
    count = 0
    flag = 0
    score = 0
    
    ques.classList.remove("hide")
    for(i of Qno){
        i.style.backgroundColor = ""
    }
    wel.classList.add("hide")
    next.innerHTML = "Next"
    next.onclick = fwd()
    points.innerHTML = ""
}


