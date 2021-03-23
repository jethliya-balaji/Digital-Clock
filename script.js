const timeEle = document.querySelector(".time")
const ampmEle = document.querySelector(".ampm")

function presentDate(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;

    setTimeout(presentDate, 1000)

    timeEle.innerHTML= `${hour}:${minute}:${second}`
    ampmEle.innerHTML= `${ampm}`
}
presentDate()