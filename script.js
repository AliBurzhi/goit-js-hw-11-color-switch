const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const buttonsRefs = document.querySelectorAll('button');
const body = document.body;

const CHANGE_DELAY = 1000;
let nodeBtnStart = null;
let intervalId = null;

// ФУНКЦИЯ ДЛЯ ГЕНЕРАЦИИ СЛУЧАЙНОГО ИНДЕКСА МАССИВА (ЧИСЛА)
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/* СТАВИМ ЗНАЧЕНИЕ СТИЛЯ BODY КАК РЕЗУЛЬТАТ РАБОТЫ ФУНКЦИИ 
(РЕЗУЛЬТАТ ВЫРАЖЕНИЕ СТАВИМ В ПЕРЕМЕННУЮ ДЛЯ ХРАНЕНИЯ)
(ИНДЕКС МЕНЯЕТСЯ КАЖДЫЕ 1000MS)
МИНИМАЛЬНОЕ ЗНАЧЕНИЕ 0 А МАКСИМАЛЬНОЕ РАВНЯЕТСЯ КОЛИЧЕСТВУ ЦВЕТОВ В МАССИВЕ
ОТ 1 ДО 5 В НАШЕМ СЛУЧАЕ ВКЛЮЧИТЕЛЬНО */

const onStartClick = function () {
    intervalId = setInterval(() => {
        const colorIndex = randomIntegerFromInterval(0, colors.length);
        body.style.backgroundColor = colors[colorIndex];
    }, CHANGE_DELAY);
};

const onStopClick = function () {
    nodeBtnStart.disabled = false;
    clearInterval(intervalId);
};


const onBtnClick = function (e) {
    if (e.target.dataset.action === 'start') {
        onStartClick();
        nodeBtnStart = e.target;
        nodeBtnStart.disabled = true;
        return;
    }
    onStopClick();
}

// Вешаем слушателя на кнопки
buttonsRefs.forEach(btn => btn.addEventListener('click', onBtnClick));

