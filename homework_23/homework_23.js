window.addEventListener('DOMContentLoaded', () => {
    alert('Сыграем в игру?');
});
window.addEventListener('load', () => {
    alert('Найди синий квадрат.');
    const blueSquares = document.querySelectorAll('.blue');
    blueSquares[0].addEventListener('click', () => {
        blueSquares[0].style.backgroundColor = 'blue';
        setTimeout(() => {alert('Молодец! Продолжаем?')}, 1000);
    });
    blueSquares[1].addEventListener('click', () => {
        blueSquares[1].style.backgroundColor = 'blue';
        setTimeout(() => {alert('Еще раз?')}, 1000);
    });
    blueSquares[2].addEventListener('click', () => {
        blueSquares[2].style.backgroundColor = 'blue';
        setTimeout(() => {alert('Найди оставшийся квадрат.')}, 1000);
    });
    blueSquares[3].addEventListener('click', () => {
        blueSquares[3].style.backgroundColor = 'blue';
        setTimeout(() => {alert('Поздравляю! :)')}, 1000);
    });
    window.addEventListener('contextmenu', () => {
        alert('Подсмотреть хочешь? Читер...');
    });
    window.addEventListener('beforeunload', (event) => {
        event.preventDefault();
        event.returnValue = '';
      });
})
