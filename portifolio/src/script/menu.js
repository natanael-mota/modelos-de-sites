const btnMenu = document.querySelector('#botao-menu');
const menu = document.querySelector('#popup-menu');
const btnFecharMenu = document.querySelector('#fechar-menu');
const menuProjetos = document.querySelector('#menu-projetos');
const menuSobre = document.querySelector('#menu-sobre');
const menuContatos = document.querySelector('#menu-contatos');
const conteudoMenu = document.querySelector('#container-conteudo-menu');

btnMenu.addEventListener('click', function (){
    menu.classList.add('menu-aberto');
});

btnFecharMenu.addEventListener('click', function (){
    menu.classList.remove('menu-aberto');
});

menuProjetos.addEventListener('mouseover', function(){
    conteudoMenu.style.transform = `translatey(0)`;
});

menuSobre.addEventListener('mouseover', function(){
    conteudoMenu.style.transform = `translatey(-100vh)`;
});

menuContatos.addEventListener('mouseover', function(){
    conteudoMenu.style.transform = `translatey(-200vh)`;
});