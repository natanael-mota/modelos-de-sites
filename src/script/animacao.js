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
