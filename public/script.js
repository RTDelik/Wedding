function detectBrowser() {
  let result = 'Other';
  if (navigator.userAgent.indexOf('YaBrowser') !== -1){
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

let FI = document.querySelector('#FI')
FI.value = equipmentCallBack('FI')

emailjs.init("Qppb5Oxl1RGtJrmoo"); // Этот ID будет вашим виртуальным почтальоном

// let s = document.querySelector('#contactForm');
// console.log(s)


document.addEventListener('DOMContentLoaded', function () {
  // конечная дата, например 1 июля 2021
  const deadline = new Date(2024, 10, 12);
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
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
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});
function confirmation() {
  let d = document.querySelector('form');
  d.style.display = 'initial'
  // d.classList.toggle('active')
  let btn = document.querySelector('#confirmation')
  btn.style.display = 'none';
  let a = document.querySelector('.questionnaire>h2')
  a.innerText = 'И ответьте, пожалуйста, на несколько вопросов, для нас это важно!'
  document.querySelector('#contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Не обновляйте страницу, пока сообщение не отправлено
    emailjs.sendForm('service_irv9ab8', 'template_xvi2xxw', this)
      .then(function () {
        alert('Сообщение успешно отправлено!');
      }, function (error) {
        alert('Ошибка отправки: ' + error);
      });
  });

  //   console.log(a);
};


