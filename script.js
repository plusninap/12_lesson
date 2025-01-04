const dino = document.getElementById("dino");
const timerElement = document.getElementById("timer"); // Получаем элемент таймера
let timer; 
startTimer(0);
// Функция для обновления времени
function startTimer(sec) {
    timer = setInterval(() => {
        sec++;
        timerElement.innerText = sec; // Обновляем текст элемента таймера
    }, 1000);
}

// функция прыжка
function jump() {
    // проверяем, не находится ли динозаврик в прыжке
    if (!dino.classList.contains("jump")) {
        // добавляем класс jump для начала анимации прыжка
        dino.classList.add("jump");

        // удаляем класс jump через 700 миллисекунд, чтобы завершить прыжок
        setTimeout(function () {
            dino.classList.remove("jump");
        }, 700);
    }
}

// добавляем обработчик событий
document.addEventListener("keydown", function (event) {
    // проверяем, была ли нажата клавиша пробела
    if (event.key === " ") {
        // вызываем функцию jump()
        jump();
    }
});

// Получаем элемент кактуса по его ID
const cactus = document.getElementById("cactus");

// Устанавливаем интервал для проверки состояния игры каждые 10 мс
let isAlive = setInterval(function () {
    // Получаем текущую y-позицию динозаврика
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    // Получаем текущую x-позицию кактуса
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    // Проверяем условия столкновения:
    // кактус находится в пределах 50 пикселей от динозаврика по оси x,
    // кактус ещё не прошёл динозаврика, и динозаврик не прыгнул высоко
    if (cactusLeft < 50 && cactusLeft > -50 && dinoTop >= 140) {
        // Если произошло столкновение, останавливаем таймер и выводим сообщение
        clearInterval(timer); // Останавливаем таймер
        alert("Потрачено!");
        location.reload();
    }
}, 10);
