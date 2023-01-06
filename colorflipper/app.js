const colors = ['green' , 'red' , 'purple' , 'rgba(133,122,200)' , '#f15025']
const color = document.querySelector('.colorcode')
const button = document.getElementById('btn')

button.addEventListener('click' , function (){ 
    const random =  getrandomnumber()
    document.body.style.backgroundColor = colors[random]
    color.textContent = colors[random] 
})

const getrandomnumber = () => {
    c = Math.floor( Math.random() * colors.length )
    return c
}
