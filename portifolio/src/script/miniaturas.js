const scrollButtons = document.querySelectorAll('.miniatura-home');
const alturaTela = window.innerHeight;

scrollButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Pega o valor do atributo 'data-scrollto'
        const scrollOrdem = parseInt(this.getAttribute('data-scroll-ordem'), 10);

        // Faz o scroll suave até a posição definida
        scroller.scrollTo({
            top: alturaTela * (scrollOrdem - 1),
            behavior: 'smooth'
        });
        
    });
});