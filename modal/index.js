const ad = document.querySelector('.ad')
const fille = document.querySelector('.showbtn')
const close = document.querySelector('.closebtn')


fille.addEventListener('click' , showad)
close.addEventListener('click' , closead)

function showad(){
    //if ( ! ad.classList.contains('show')){
    ad.classList.add("show")
    console.log('show add')
    //}
}

function closead(){
    ad.classList.remove("show")
}