// Primeiro projeto

let botaoUmProjeto = document.getElementById('botaoUm')

botaoUmProjeto.addEventListener('mouseover', () => {

    let divCimaUm = document.getElementById('cimaUm')
    
    divCimaUm.style.opacity = '1'

    botaoUmProjeto.value = 'Visitar site'
    botaoUmProjeto.style.transition = '300ms'

})

botaoUmProjeto.addEventListener('mouseleave', () => {
    
    let divCimaUm = document.getElementById('cimaUm')

    divCimaUm.style.opacity = '0.4'

    botaoUmProjeto.value = 'Relógio'
    botaoUmProjeto.style.transition = '300ms'

})

// Segundo projeto

let botaoDoisProjeto = document.getElementById('botaoDois')

botaoDoisProjeto.addEventListener('mouseover', () => {

    let divCimaDois = document.getElementById('cimaDois')

    divCimaDois.style.opacity = '1'

    botaoDoisProjeto.value = 'Visitar site'
    botaoDoisProjeto.style.transition = '300ms'

})

botaoDoisProjeto.addEventListener('mouseleave', () => {

    let divCimaDois = document.getElementById('cimaDois')

    divCimaDois.style.opacity = '0.4'

    botaoDoisProjeto.value = 'Cartão'
    botaoDoisProjeto.style.transition = '300ms'

})

// Terceiro projeto

let botaoTresProjeto = document.getElementById('botaoTres')

botaoTresProjeto.addEventListener('mouseover', () => {

    let divCimaTres = document.getElementById('cimaTres')

    divCimaTres.style.opacity = '1'

    botaoTresProjeto.value = 'Visitar site'
    botaoTresProjeto.style.transition = '300ms'

})

botaoTresProjeto.addEventListener('mouseleave', () => {

    let divCimaTres = document.getElementById('cimaTres')

    divCimaTres.style.opacity = '0.4'

    botaoTresProjeto.value = 'Calculadora básica'
    botaoTresProjeto.style.transition = '300ms'

})

// Quarto projeto

let botaoQuatroProjeto = document.getElementById('botaoQuatro')

botaoQuatroProjeto.addEventListener('mouseover', () => {

    let divCimaQuatro = document.getElementById('cimaQuatro')

    divCimaQuatro.style.opacity = '1'

    botaoQuatroProjeto.value = 'Visitar site'
    botaoQuatroProjeto.style.transition = '300ms'

})

botaoQuatroProjeto.addEventListener('mouseleave', () => {

    let divCimaQuatro = document.getElementById('cimaQuatro')

    divCimaQuatro.style.opacity = '0.4'

    botaoQuatroProjeto.value = 'Playlists'
    botaoQuatroProjeto.style.transition = '300ms'

})

// animando linhas 

const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.75)
    target.forEach(function(element){

        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }

    })
}

animeScroll()

if(target.length) {

    window.addEventListener('scroll', function() {
        animeScroll()
    })

}

