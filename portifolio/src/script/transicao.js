$(window).on('load', function() {

    console.log('ta funcionando');
    
    const transicao = document.getElementById('transicao');
    const transtopo = document.getElementById('trans-topo');
    const transbaixo = document.getElementById('trans-baixo');

    setTimeout(function() {
        transtopo.style.transform = `translatey(-50vh)`;
        transbaixo.style.transform = `translatey(50vh)`;
        setTimeout(function() {
            transicao.style.transform = `translatex(100vw)`;
        }, 1010);
    }, 300);

    $('.link').on('click', function(event) {
        event.preventDefault();
        transicao.style.transform = `translatex(0)`;
        transtopo.style.transform = `translatey(0)`;
        transbaixo.style.transform = `translatey(0)`;
        var url = $(this).attr('href');
        setTimeout(function() {
            window.location.href = url;
        }, 1010);
    });

});
