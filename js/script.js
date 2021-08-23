function digitalClock (){
  let dig_year_value = document.getElementById('dig_year_value');
  let dig_month_value = document.getElementById('dig_month_value');
  let dig_when_value = document.getElementById('dig_when_value');
  let dig_weekday_value = document.getElementById('dig_weekdayh_value');
  let dig_hr_value = document.getElementById('dig_hr_value');
  let dig_min_value = document.getElementById('dig_min_value');
  let dig_sec_value = document.getElementById('dig_sec_value');

  let dig_day = new Date();
  let dig_year = dig_day.getFullYear();
  let dig_month = dig_day.getMonth();
  let dig_when = dig_day.getDate();
  let dig_weekday = dig_day.getDay();
  let dig_hr = dig_day.getHours();
  let dig_min = dig_day.getMinutes();
  let dig_sec = dig_day.getSeconds();

  let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
  let weekdayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];

  dig_year_value.innerHTML = dig_year;
  dig_month_value.innerHTML = monthArr[dig_month];
  dig_when_value.innerHTML = dig_when;
  dig_weekday_value.innerHTML = weekdayArr[dig_weekday];
  dig_hr_value.innerHTML = dig_hr;
  dig_min_value.innerHTML = dig_min;
  dig_sec_value.innerHTML = dig_sec;

}

let dig_interval = setInterval(digitalClock, 1000);


function cutout() {
  let body = document.querySelector('body');        
  body.classList.toggle('light');
}

const deg = 6;
const hour_hand = document.querySelector('#hh');
const min_hand = document.querySelector('#mh');
const sec_hand = document.querySelector('#sh');



setInterval (() => {

let day = new Date();
let hStep = day.getHours() * 30;;
let mStep = day.getMinutes() * deg;;
let sStep = day.getSeconds() * deg;;

hour_hand.style.transform = `rotateZ(${hStep + (mStep/12)}deg)`;
min_hand.style.transform = `rotateZ(${mStep}deg)`;
sec_hand.style.transform = `rotateZ(${sStep}deg)`;
});