

const dateElement = document.getElementByI
const LableElement = document.getElementsByTagName('lable')
const TodayDay = document.getElementById('id_date')
console.log(TodayDay.innerHTML)
let date = new Date().toLocaleDateString();
console.log(date)
TodayDay.value = date


