/* 
In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any dice roll.
Examples
possibleBonus(3, 7) true
possibleBonus(1, 9) false
possibleBonus(5, 3) false
Note: -
You cannot move backward (which is why example #3 doesn't work).
If you are already on the same tile, return false, as you would be advancing away.
Expect only positive integer inputs. 
*/

function rollDice(){
    return Math.floor(Math.random()*6)+1
}

let a = rollDice()
let b = rollDice()

function possibleBonus(a,b){
    
    
    if(a<b){
        if((b-a)>=6){
            return false
        }
        else{
            return true
        }
    }
    else{
        return false
    }
}

b=b+rollDice() // b rolled dice again

//To check if bonus can be earned for next dice roll by 'a'

console.log("a:"+a+"\nb:"+b+"\nresult:"+possibleBonus(a,b))

console.log("a:"+3+"\nb:"+7+"\nresult:"+possibleBonus(3,7))
console.log("a:"+1+"\nb:"+9+"\nresult:"+possibleBonus(1,9))
console.log("a:"+5+"\nb:"+3+"\nresult:"+possibleBonus(5,3))