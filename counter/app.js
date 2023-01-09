const count = document.getElementById('counter')
const dec = document.getElementById('dec')
const res = document.getElementById('reset')
const inc = document.getElementById('inc')

let value = JSON.parse(localStorage.getItem('count')) || 0

inc.addEventListener("click" , increase )
res.addEventListener("click" , reset )
dec.addEventListener("click" , decrease )

function update(){
    count.textContent = `${value}`
}

function increase(){
    value = value + 1 
    localStorage.setItem("count" , JSON.stringify(value))
    update()
}

function reset(){ 
    value = 0 
    localStorage.setItem("count" , JSON.stringify(value))
    update()
}

function decrease (){
    value = value - 1 
    localStorage.setItem("count" , JSON.stringify(value))
    update()
}

update()