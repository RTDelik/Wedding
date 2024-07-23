function detectBrowser() {
  let result = 'Other';
  if (navigator.userAgent.indexOf('YaBrowser') !== -1) {
    result = 'Yandex Browser';
  } else if (navigator.userAgent.indexOf('Firefox') !== -1) {
    result = 'Mozilla Firefox';
  } else if (navigator.userAgent.indexOf('MSIE') !== -1) {
    result = 'Internet Exploder';
  } else if (navigator.userAgent.indexOf('Edge') !== -1) {
    result = 'Microsoft Edge';
  } else if (navigator.userAgent.indexOf('Safari') !== -1) {
    result = 'Safari';
  } else if (navigator.userAgent.indexOf('Opera') !== -1) {
    result = 'Opera';
  } else if (navigator.userAgent.indexOf('Chrome') !== -1) {
    result = 'Google Chrome';
  }
  return result;
}

console.log(detectBrowser())

function equipmentCallBack(type) {
  let params = (new URL(document.location)).searchParams;
  let a = params.get(type);
  return a;
};//Возвращает выбранный тип оборудования

// let FI = document.querySelector('#FI')
// FI.value = equipmentCallBack('FI')

emailjs.init("Qppb5Oxl1RGtJrmoo"); // Этот ID будет вашим виртуальным почтальоном

// let s = document.querySelector('#contactForm');
// console.log(s)


document.addEventListener('DOMContentLoaded', function () {
  // конечная дата, например 1 июля 2021
  const deadlineCelebration = new Date(2024, 9, 12, 15, 0, 0, 0);
  // const deadlineWedding = new Date(2024,7,9,11,50,0,0);
  // id таймера
  let timerId = null;
  // console.log(deadlineWedding)
  // склонение числительных
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadlineCelebration - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
      let clock = document.querySelector('#clock');
      clock.style.display='none'
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector('#day');
  const $hours = document.querySelector('#hours');
  const $minutes = document.querySelector('#minute');
  const $seconds = document.querySelector('#seconds');
  // вызываем функцию countdownTimer
  countdownTimer(deadlineCelebration);
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});
// document.addEventListener('DOMContentLoaded', function () {
//   // конечная дата, например 1 июля 2021
//   // const deadlineCelebration = new Date(2024, 9, 12, 15, 0, 0,0);
//   const deadlineWedding = new Date(2024, 7, 9, 11, 50, 0, 0);
//   const countingText = document.querySelector('#counting-text');
//   // id таймера
//   const timerId2 = null;
//   var timeInterval = 1000;
//   // склонение числительных
//   function declensionNum(num, words) {
//     return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
//   }
//   function countingFun(timeSet, timeVar, realTime='after') {
//     let declension = null;
//     declension = declensionNum(timeSet, timeVar);
//     if (realTime=='before'){
//       countingText.innerHTML = `<h2>
//             Бракосочетание состоится через `+ timeSet + ' ' + declension + `
//           </h2>`
//     }else{
//       countingText.innerHTML = `<h2>
//             Мы обручены уже `+ timeSet + ' ' + declension + `
//           </h2>`
//     }
//   }
//   // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
//   function countdownTimer() {
//     const diff = deadlineWedding - new Date();
//     let year = null;
//     let month = null;
//     let days = null;
//     let hours = null;
//     let minutes = null;
//     let seconds = null;
//     if (diff >= 0) {
//       days = Math.floor(diff / 1000 / 60 / 60 / 24);
//       hours = Math.floor(diff / 1000 / 60 / 60) % 24;
//       minutes = Math.floor(diff / 1000 / 60) % 60;
//       seconds = Math.floor(diff / 1000) % 60;
//       if(days>0){
//         countingFun(days, ['день', 'дня', 'дней'],'before')
//         timeInterval *= 60*60;
//         console.log(timeInterval)
//       }else{
//         if(hours>0){
//           countingFun(hours, ['час', 'часа', 'часов'],'before')
//           timeInterval *= 60;
//           console.log(timeInterval)
//         }else{
//           if(minutes>0){
//             countingFun(minutes, ['минута', 'минуты', 'минут'],'before')
//             // timeInterval *= 60;
//             console.log(timeInterval)
//           }else{
//             if(seconds>0){
//               countingFun(seconds, ['секунду', 'секунды', 'секунд'],'before')
//               // timeInterval /= 60;
//               console.log(timeInterval)
//             }  
//           }
//         }
//       }
//     } else {
//       year = new Date().getFullYear() - deadlineWedding.getFullYear();
//       month = new Date().getMonth() - deadlineWedding.getMonth();
//       days = Math.floor((diff * -1) / 1000 / 60 / 60 / 24);
//       hours = Math.floor((diff * -1) / 1000 / 60 / 60);
//       minutes = Math.floor((diff * -1) / 1000 / 60);
//       seconds = Math.floor((diff * -1) / 1000);
//       if (seconds < 60) {
//         countingFun(seconds, ['секунду', 'секунды', 'секунд'])
//       } else {
//         console.log('Больше минуты')
//         // timeInterval *= 60;
//         if (minutes < 60) {
//           countingFun(minutes, ['минута', 'минуты', 'минут'])
//         } else {
//           console.log('Больше часа')
//           timeInterval *= 60;
//           if (hours < 24) {
//             countingFun(hours, ['час', 'часа', 'часов'])
//           } else {
//             console.log('Больше дня')
//             clearInterval(timerId2);
//             if (month <= 0) {
//               countingFun(days, ['день', 'дня', 'дней'])
//             } else {
//               console.log('Больше месяца')
//               if (year <= 0) {
//                 countingFun(month, ['месяц', 'месяца', 'месяцев'])
//               } else {
//                 console.log('Больше года')
//                 countingFun(year, ['год', 'года', 'лет']);
//               }
//             }
//           }
//         }
//       }
//     }
//     // console.log('Лет: ', year);
//     // console.log('Месяцев: ', month);
//     // console.log('Дней: ', days);
//     // console.log('Часов: ', hours);
//     // console.log('Минут: ', minutes);
//     // console.log('Секунд: ', seconds);
//   }
//   // получаем элементы, содержащие компоненты даты
//   // const $days = document.querySelector('#day');
//   // const $hours = document.querySelector('#hours');
//   // const $minutes = document.querySelector('#minute');
//   // const $seconds = document.querySelector('#seconds');
//   // вызываем функцию countdownTimer
//   countdownTimer();
//   // вызываем функцию countdownTimer каждую секунду
//   timerId2 = setInterval(countdownTimer, timeInterval);
// });
function confirmation(q) {
  let d = document.querySelector('form');
  let a = document.querySelector('.questionnaire>h2')
  if (q == 'one') {
    d.style.display = 'initial'
    // d.classList.toggle('active')
    let btn = document.querySelector('#confirmation')
    btn.style.display = 'none';
    a.innerText = 'И ответьте, пожалуйста, на несколько вопросов, для нас это важно!'
    document.querySelector('#contactForm').addEventListener('submit', function (event) {
      event.preventDefault(); // Не обновляйте страницу, пока сообщение не отправлено
      emailjs.sendForm('service_irv9ab8', 'template_xvi2xxw', this)
        .then(function () {
          alert('Сообщение успешно отправлено!');
        }, function (error) {
          alert('Ошибка отправки');
          // console.dir(error)
        });
    });
  } if (q == 'two') {
    d.style.display = 'none'
    a.innerText = 'Благодарим вас за отзывчивость'
    document.querySelector('#indicator').style.display = 'none'
  }

  //   console.log(a);
};
window.onload = function() {
  document.querySelector('.all').style.display = "flex"
  // document.querySelector('body').style.overflowY = "unset"
  document.querySelector('#textH1').style.display = "none"
  console.log('Сайт загружен')
}

