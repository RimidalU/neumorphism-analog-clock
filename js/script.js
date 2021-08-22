
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