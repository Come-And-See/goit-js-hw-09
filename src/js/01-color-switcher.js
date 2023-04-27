// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль.
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const refs = {
  buttonStart: document.querySelector('[data-start]'),
  buttonStop: document.querySelector('[data-stop]'),
};

let intervalId;

refs.buttonStart.addEventListener('click', onStartInterval);
refs.buttonStop.addEventListener('click', onStopColorBody);

refs.buttonStop.setAttribute('disabled', 'disabled');

function onStartInterval() {
  intervalId = setInterval(onColorBody, 1000);
  onActiveStop();
}

function onColorBody() {
  document.body.style.background = getRandomHexColor();
}

function onStopColorBody() {
  clearInterval(intervalId);
  onActiveStart();
}

function onActiveStop() {
  refs.buttonStart.setAttribute('disabled', 'disabled');
  refs.buttonStop.removeAttribute('disabled');
}

function onActiveStart() {
  refs.buttonStart.removeAttribute('disabled');
  refs.buttonStop.setAttribute('disabled', 'disabled');
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
