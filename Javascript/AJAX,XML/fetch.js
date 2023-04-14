/*
Find an API that provides you with the population figure of a given country.
Task 1 :When the user has entered the name of a country and pressed add, your application should retrieve the population data from the API, and add the name of the country and its population figure to the list.
Skill Mapping : AJAX fetch , HTML request and response cycle.

Task 2 :If the user enters something that is not recognized as a country by the API, it should not be added to the list, and an appropriate message is shown to the user. You can display this message by using a simple alert box.
Skill Mapping : AJAX fetch , HTML request and response cycle.

*/

// css
// input box clear after every search
// table format
// pop as 2018 fig

function load(){

    var country = document.getElementById("country").value
    // console.log(country)

    fetch("https://countriesnow.space/api/v0.1/countries/population")
    .then(response => response.json())
        .then(data => {
            
            const toDoList = document.querySelector("ul");
            var flag = 0
            
            // loop
            
            for(let i=0; i<data.data.length; i++){
                // console.log(i)
                console.log(`${data.data[i].country} : ${data.data[i].populationCounts[data.data[i].populationCounts.length-1].value}`)

                if(country.toLowerCase() == data.data[i].country.toLowerCase()){
                    const toDoElements = document.createElement("li");
                    toDoElements.innerHTML = `${data.data[i].country} : ${data.data[i].populationCounts[data.data[i].populationCounts.length-1].value/10000000} Cr`;
                    toDoList.appendChild(toDoElements)
                    flag = 1
                    break;
                }
            }

            if(flag !== 1){
                alert("Enter a valid country name")
            }
        })
        .catch(error => console.log(error))

        document.getElementById("country").value = ""
}

