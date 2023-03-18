/*
EXERCISE 1: (10 MARKS)

Task 1 :-Create an empty webpage to show restaurant data read through using an XML file.
Skill Mapping :HTML and CSS

Task 2 : Create an XML file in your project folder with the following format:-
< restaurant name="yellow chilli" address="new delhi" lat="47.608940" lng="-122.340141" type="sitdown"/>
Use AJAX to load the file into your page.

Task 3 :Create a <ul>. For each <restaurant>, create a <li> with the name and address of the restaurant. Change the color of the text depending on the type of the restaurant (“sit down” or “bar”).
Skill Mapping : AJAX , XML file. 
*/


var dining = document.getElementById("place")

// Using AJAX
function load(){
    
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            data = this.responseText
            dining.innerHTML = data
            
            
            //loop
            let temp = dining.getElementsByTagName("restaurant")
            console.log(temp[0]) 

            for(let i=0; i<temp.length; i++){
                let list = document.createElement("ul")
                document.body.appendChild(list)
                list.innerHTML = "# Restaurant " + (i+1)
                
                // list.innerHTML = temp[0]
                
                const rest = document.createElement("li")
                list.appendChild(rest)
                const add = document.createElement("li")
                list.appendChild(add)

                rest.innerHTML = "Name : " + temp[i].getElementsByTagName("name")[0].innerHTML
                add.innerHTML =  "Address : " + temp[i].getElementsByTagName("address")[0].innerHTML

                if(temp[i].getElementsByTagName("type")[0].innerHTML == "sitdown"){
                    list.style.color = "purple"
                }
                if(temp[i].getElementsByTagName("type")[0].innerHTML == "bar"){
                    list.style.color = "red"
                }
               
            }
            // dining.style.display = "none"
            document.body.removeChild(dining)
        }
    }
        xhttp.open("GET","data.xml",true)
        xhttp.send()
    
}   

// Using Fetch