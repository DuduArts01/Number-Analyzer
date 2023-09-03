let num = document.querySelector("input#numbertxt")
let list = document.querySelector("select#list")
let res = document.querySelector("div#res") 
numbers = []

function add(){
    if(num.value.length == 0){
        window.alert("[ERROR] Check your values again!")
    } else{
        n = Number(num.value)
        numbers.push(n)
        let item = document.createElement("option")
        item.text = `Value ${n}`
        list.appendChild(item)
    }
}
function highest(){
    for(let c = 0; c < numbers.length; c++){
        if(c == 0){
            var max = numbers[c]
        } else if(numbers[c] > max){
            max = numbers[c]    
        }
    }
    return max
}

function lowest(){
    for(let c = 0; c < numbers.length; c++){
        if(c == 0){
            var min = numbers[c]
        } else if(numbers[c] < min){
            min = numbers[c]    
        }
    }
    return min
}

function sum(){
    var sum = 0
    for(let c = 0; c < numbers.length; c++){
        sum += numbers[c]
    }
    return sum
}


function finish(){
    if(list.length == 0){
        window.alert("[ERROR] Add values above!")
    } else{
        res.innerHTML = ''
        res.innerHTML += `<p>In all, we have ${numbers.length} numbers registered.</p>`
        res.innerHTML += `<p>The highest reported value was: ${highest()}</p>`
        res.innerHTML += `<p>The lowest reported value was: ${lowest()}</p>`
        res.innerHTML += `<p>Sum all values, we have: ${sum()}</p>`
        res.innerHTML += `<p>The average of the entered values ​​was: ${sum() / numbers.length}</p>`
    }
}

function reset(){
    list.innerHTML = ''
    numbers = []

}