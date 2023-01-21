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