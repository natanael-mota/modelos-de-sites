const observador = new IntersectionObserver((infos) => {
    infos.forEach((info) => {
        if (info.isIntersecting) {
            info.target.classList.add("visivel")
        } else {
            info.target.classList.remove("visivel")
        }
    })
})

const elementos = document.querySelectorAll(".animado")

elementos.forEach((e) => {
    observador.observe(e)
})

const scroller = document.getElementById('background');
const box = document.getElementById('box');
const min1 = document.getElementById('min1');
const min2 = document.getElementById('min2');
const min3 = document.getElementById('min3');
const titulo = document.getElementById('slide-titulo')


  scroller.addEventListener('scroll', () => {
    const scrollTop = scroller.scrollTop;
    const scrollHeight = scroller.scrollHeight - scroller.clientHeight;
    const progress = scrollTop / scrollHeight;

    if (progress <= 1 && progress > 0.75){
        removerClass('.miniatura-home', 'mini-atual');
        min3.classList.add('mini-atual');
        titulo.style.transform = `translatey(-184px)`;
    } else if (progress <= 0.75 && progress > 0.25) {
        removerClass('.miniatura-home', 'mini-atual');
        min2.classList.add('mini-atual');
        titulo.style.transform = `translatey(-92px)`;
    } else {
        removerClass('.miniatura-home', 'mini-atual');
        min1.classList.add('mini-atual');
        titulo.style.transform = `translatey(0)`;
    }
  });

  function removerClass(alvo, classe){
    document.querySelectorAll(alvo).forEach((mini) =>{
        mini.classList.remove(classe);
    });
  }