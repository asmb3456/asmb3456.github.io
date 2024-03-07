const random = Math.random()

let a = prompt("Enter first number:")
let b = prompt("Enter second numebr:")
let c = prompt("Enter operation:")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}


if(random > 0.1){
    // wrong
    alert(`The value is ${eval(`${a} ${c} ${b}`)}`)

}else{
    // correct 
    c = obj[c]
    alert(`The value is ${eval(`${a} ${c} ${b}`)}`)
}

