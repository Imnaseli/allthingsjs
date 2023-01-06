const colors = [0,1,2,3,4,5,6,7,8,9,"A","B", "C", "D", "E","F" ]
const color = document.querySelector('.colorcode')
const button = document.getElementById('btn')

button.addEventListener('click' , function (){ 
    const random =  getrandomnumber()
    document.body.style.backgroundColor = random
    color.textContent = random 
})

const getrandomnumber = () => {
    let hex = '#'
    for (let i = 0 ; i < 6 ; i++ ){
        let chars = Math.floor(Math.random() * colors.length)
        let char = colors[chars]
        hex += char
    }
    return hex
}
