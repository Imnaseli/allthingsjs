const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const answer = document.querySelector(".answer")
const questionbtn = document.querySelector("questbtn")





plus.addEventListener("click" , showans)
minus.addEventListener("click" , hideans)

function showans(){
    answer.classList.add("show")
    plus.classList.add("show")
    minus.classList.add("show")
    console.log("plus")
}

function hideans(){
    answer.classList.remove("show")
    plus.classList.remove("show")
    minus.classList.remove("show")
}