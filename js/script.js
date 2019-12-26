let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    title = document.getElementById('title');
    adv = document.getElementsByClassName('adv')[0],
    promptForApple = document.querySelector('#prompt'),
    menuItemLi = document.createElement('li');

menu.insertBefore(menuItem[2], menuItem[1]);

menuItemLi.classList.add('menuItem');
menuItemLi.textContent = 'Пятый элемент';
menu.appendChild(menuItemLi);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

title.TextContent = ('Мы продаем только подлинную технику Apple');

adv.remove();

let yourOpinion = prompt('Ваше отношение о технике Apple?');
promptForApple.TextContent = yourOpinion;
