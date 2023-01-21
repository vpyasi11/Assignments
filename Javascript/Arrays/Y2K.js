/*
Y2K problem: Databases written in 1970's used 2-digit fields to represent the year 
e.g., 77, 80 instead of 1977, 1980.
However with the year 2000 nearby all these fields had to be changed to be 4-digit date. 
Write a program to change a given 2-digit year to a 4-digit year. 
Remember that if the 2-digit number is less than 35 it means it’s a year in the 2000-year range. 
E.g., 15 would mean 2015 not 1915.
*/
function Y2K(num){
    if(num<35){
        num = num + 2000
    }
    else{
        num = num + 1900
    }
    return num
}

var num = Math.floor(Math.random()*100)

console.log(Y2K(num))