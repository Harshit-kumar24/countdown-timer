const  daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const  minutesEl = document.getElementById('minutes');
const  secondsEl = document.getElementById('seconds');

const yourBirtday = "24 Aug 2022";



function countdown(){
    const birthday = new Date(yourBirtday);
    const currentDate = new Date();

    const seconds = (birthday-currentDate)/1000;
    const day = Math.floor(seconds/3600/24);
    const hour = Math.floor(seconds/3600)%24;
    const minute = Math.floor(seconds/60)%60;
    const second = Math.floor(seconds)% 60;
    console.log(day,hour,minute,second);

daysEl.innerHTML = day;
hoursEl.innerHTML = hour;
minutesEl.innerHTML = minute;
secondsEl.innerHTML = second;

}


countdown();
setInterval(countdown,1000);