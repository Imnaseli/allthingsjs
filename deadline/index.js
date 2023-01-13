const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

const weekdays = [
    "Monday",
    "Teusday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]

const giveway = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline h4")
let futuredate = new Date(2023 , 7, 26, 20, 30, 0)

const year = futuredate.getFullYear()
const hours = futuredate.getHours()
const minutes = futuredate.getMinutes()
let month = futuredate.getMonth()
month = months[month]
const date= futuredate.getDate()
let weekday = futuredate.getDay()
weekday= weekdays[weekday]

giveway.textContent = `Giveaway content ends on ${weekday} ${date} ${month} ${year}, ${hours}:${minutes}pm`

const future = futuredate.getTime()

function getlefttime(){
    const today = new Date().getTime()
    let t = future - today
    
    const oneday = 24*60*60*1000
    const onehour = 60*60*1000
    const oneminute = 60*1000
    const onesecond = 1000

    let days = Math.floor(t/oneday)
    let hour = (t % oneday ) 
    let hours = Math.floor(hour / onehour)
    let minutes = Math.floor((t % onehour) / oneminute)
    let seconds = Math.floor((t%oneminute) / 1000)

    const values = [days , hours , minutes , seconds]

    function format(values){
        if (values < 10){
            return (values = `0${values}`)
        }else{
            return values
        }
    }

    items.forEach(function(item , index){
        item.innerHTML = format(values[index])
    })

}
let countdown = setInterval(getlefttime,1000)
getlefttime()