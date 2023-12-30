const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// const getalldate = new Date(year,month,date,hours,minutes,secs);
// another method

// let tempdate = new Date();
// let tempyear = tempdate.getFullYear();
// let tempmonth = tempdate.getMonth();
// let tempday = tempdate.getDate();
// let futureDate = new Date(tempyear, tempmonth, tempday + 5, 12, 00, 0);

let futureDate    = new Date(2023, 5, 23, 12, 30, 0);
const years = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway Ends on ${weekday} ${date} ${month} ${years}, ${hours}:${minutes} am`;

const futureTime = futureDate.getTime();
function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // calculate miliseconds in one day
  const miliSecOneDay = 24 * 60 * 60 * 1000;
  const onehour = 1000 * 60 * 60;
  const onemin = 1000 * 60;

  // calculate all values
  let days = Math.floor(t / miliSecOneDay);

  let hours = Math.floor((t % miliSecOneDay) / onehour);

  let mins = Math.floor((t % onehour) / onemin);

  let secs = Math.floor((t % onemin) / 1000);

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  // set values in array
  const values = [days, hours, mins, secs];
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
    // console.log(item);
  });

  // if time is negative that current
  if (t < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class = 'expired'>sorry, this giveaway has expired</h4>`;
  }
}
let countDown = setInterval(getRemainingTime, 1000)
getRemainingTime()


// my practice
// function getTime() {
//   let today = new Date().getTime();
//   const t = futureTime - today;

//   const oneday = 24 * 60 * 60 * 1000;
//   const onehr = 60 * 60 * 1000;
//   const onemin = 60 * 1000;
//   const onesec = 1000;

//   let days1 = Math.floor(t / oneday);
//   let hours1 = Math.floor((t % oneday) / onehr);
//   let mins1 = Math.floor((t % onehr) / onemin);
//   let secs1 = Math.floor((t % onemin) / onesec);

//   function format1(item) {
//     if (t < 10) {
//       return item = `0 ${item}`;
//     }
//     return item;
//   }
//   const val = [days1, hours1, mins1, secs1];
//   items.forEach(function (item, index) {
//     item.innerHTML = format1(val[index]);
//   });
//   if(t<0){
//     clearInterval(countDown1)
//     deadline.innerHTML=`<h1 class="expired">sorry , giveaway has ended</h1>`
//   }
// }
// let countDown1 = setInterval(getTime, 1000);
// getTime();

