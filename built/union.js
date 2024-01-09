"use strict";
// Функция, возвращающая длину
// Funktion, der returnerer længden
function returnLength(value) {
    return value.length;
}
// Примеры использования
// Eksempler på brug
returnLength('jfdhvjfdhvjdv');
returnLength('vdvfvfvvf');
returnLength([1, 2, 3, 4]);
// Функция установки позиции
// Funktion til at sætte positionen
function setPosition(pos) {
    let el = document.createElement('div');
    el.style.position = pos; // Устанавливаем свойство position
    document.body.appendChild(el); // Добавляем элемент в body или другой контейнер
}
// Пример использования setPosition
// Eksempel på brug af setPosition
setPosition('start');
