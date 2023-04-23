/* 
Write a Node.js program that performs the following tasks:

1. Reads the contents of a text file using the fs module.
2. Converts the contents to an array of strings, where each element in the array corresponds to a line in the file.
3. Filters out any empty lines or lines that start with "#" (comments).
4. Sorts the remaining lines alphabetically.
5. Writes the sorted lines to a new text file.
6. The input file path and output file path should be passed as command-line arguments to the program.
*/

// Importing modules 
const fs = require("fs")
const process = require('process')
let path = require("path")

// Taking inputs from command line arguments
let args = process.argv
let inputFile = args[2]
let outputFile = args[3]

// Check : Command line arguments(file paths) are provided  ?
if(args.length == 4){ 

    // Check : Input file exists in directory ?
    fs.readdir(__dirname, "utf-8", (err,data) => {
        let temp =0
        for(let i=0; i<data.length; i++){
            if(data[i] === inputFile){
                temp = 1
                readWrite() // function call
                break
            }
        }
        if(temp!=1){
            console.log("\nFile not found: " + inputFile + "\n" )
        }       
    })
}
else{
    console.log("\nError : Please provide input and output file paths in command line\n(eg. node file.js inputFile outputFile)\n")
}

const readWrite = () => {

    // Reading the contents of text file
    fs.readFile(inputFile, "utf-8", (err,data) => {
        // converting content to array elements of strings 
        const arr = data.split("\n").join("").split("\r").filter(ele => {
            if(ele && ele[0] !== "#"){ // filtering empty lines and comments(#)
                return ele}
            }).sort()  // sorting the array in alphabetical manner
        // console.log(arr)
        
        // Writing sorted lines into new text file
        fs.writeFileSync(outputFile, arr.join("\n")) // nesting writefile because not a serial execution
    }) 
}
