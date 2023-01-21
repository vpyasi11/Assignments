/* 
Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
Example: -arrayOfMultiples(12, 10) [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
Notes: -Notice that num is also included in the returned array.
*/

function arrayOfMultiples(num, length){
    const arr = []
    for(i=1;i<=length;i++){
        arr[i-1]=num*i
    }
    return arr
}  

console.log(arrayOfMultiples(12,10))
