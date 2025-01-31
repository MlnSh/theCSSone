// анимация бегущей строки
const typewriterText = document.getElementById('typewriter-text');
const textLines = typewriterText.innerHTML.split('<br>');
typewriterText.innerHTML = '';

let lineIndex = 0;
let charIndex = 0;

function type() {
    if (lineIndex < textLines.length) {
        if (charIndex < textLines[lineIndex].length) {
            typewriterText.innerHTML += textLines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
        
            typewriterText.innerHTML += '<br>';
            lineIndex++;
            charIndex = 0;
            setTimeout(type, 100);
        }
    }
}
type();

document.addEventListener('DOMContentLoaded', function() {
    changeColorButton();
});

function changeColorButton() {
    const buttons = document.querySelectorAll('.buttons-box__btn2'); 
    const changeColorButton = document.querySelector('.buttons-box__btn2');

    const colors = ['#826DEE', '#FFDB15', '#F94500', '#FF99DC', '#FFFFFF'];
    let colorIndex = 0;
    changeColorButton.addEventListener('click', function() {
        const ButtonIndex = colorIndex % buttons.length;
        const Button = buttons[ButtonIndex];
        Button.style.backgroundColor = colors[colorIndex % colors.length];
        colorIndex++;
    });
}
// анимация кнопки меню 1
// Получаем элементы
const menu = document.getElementById('menu-1');
const menuButton = document.getElementById('menuButton1');

// Обработчик события на кнопку
menuButton.addEventListener('click', function() {
    // Переключаем класс, чтобы открыть/закрыть меню
    menu.classList.toggle('menu-1-hidden');
});

// При загрузке страницы убедитесь, что меню скрыто
menuButton.style.display = 'block'; // Убедитесь, что кнопка всегда видима
