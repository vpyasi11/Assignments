/*
Given a letter, created a function which returns the nearest vowel to the letter. If two vowels are equidistant to the given letter, return the earlier vowel.
Examples: -
nearestVowel("b") "a"
nearestVowel("s") "u"
nearestVowel("i") "i"
Notes: -
All letters will be given in lowercase.
There will be no alphabet wrapping involved, meaning the closest vowel to "z" should return "u", not "a".
*/

const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var letter = alphabets[Math.floor(Math.random()*alphabets.length)]

function nearestVowel(letter){
    var position = 0
    for(i=0;i<alphabets.length;i++){
        if(letter==alphabets[i]){
            position = i+1
        }
    }
    
    if(position<=3){
        return 'a'
    }
    else if(position>3 && position<=7){
        return 'e'
    }
    else if(position>7 && position<=12){
        return 'i'
    }
    else if(position>12 && position<=18){
        return 'o'
    }
    else{
        return 'u'
    }
}

console.log("Nearest vowel to letter '" + letter + "' = " + nearestVowel(letter))


