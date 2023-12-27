// Получаем первоначально активный элемент
const initiallyActive = document.querySelector('.block.active');

// Получаем все блоки и само меню
const blocks = document.querySelectorAll('.menu .block');
const menu = document.querySelector('.menu');

// Функция для удаления всех активных классов
function removeActive() {
  blocks.forEach(block => block.classList.remove('active'));
}

// Функция для восстановления активного класса для первоначального элемента
function restoreActive() {
  initiallyActive.classList.add('active');
}

// Удаляем класс .active при наведении на любой .block
blocks.forEach(block => {
  block.addEventListener('mouseover', removeActive);
});

// Восстанавливаем класс .active к первоначальному элементу, когда курсор покидает .menu
menu.addEventListener('mouseout', restoreActive);