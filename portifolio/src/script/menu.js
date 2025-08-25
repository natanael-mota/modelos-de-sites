const btnMenu = document.querySelector('#botao-menu');
const menu = document.querySelector('#popup-menu');
const btnFecharMenu = document.querySelector('#fechar-menu');

btnMenu.addEventListener('click', function (){
    menu.classList.add('menu-aberto');
});

btnFecharMenu.addEventListener('click', function (){
    menu.classList.remove('menu-aberto');
});