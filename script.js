// Primeiro projeto

let botaoUmProjeto = document.getElementById('botaoUm')

botaoUmProjeto.addEventListener('mouseover', () => {

    let divCimaUm = document.getElementById('cimaUm')
    
    divCimaUm.style.opacity = '0.7'

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

    divCimaDois.style.opacity = '0.7'

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

    divCimaTres.style.opacity = '0.7'

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

    divCimaQuatro.style.opacity = '0.7'

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

// Sobre mim

let sobreMim = document.getElementById("sobremim")
let mercado = document.getElementById("mercado")
let hobby = document.getElementById("hobby")
let carreira = document.getElementById("carreira")
let parag = document.querySelector("#text_sobremim")

sobreMim.addEventListener("click", () => {
    sobreMim.style.backgroundColor = '#010c24'
    sobreMim.style.transition = '300ms'
    
    mercado.style.backgroundColor = '#03588C'
    mercado.style.transition = '300ms'
    hobby.style.backgroundColor = '#03588C'
    hobby.style.transition = '300ms'
    carreira.style.backgroundColor = '#03588C'
    carreira.style.transition = '300ms'

    parag.innerHTML = 'Olá, me chamo Paulo César e estou cursando ciência da computação (2º Semestre).'

})

mercado.addEventListener("click", () => {
    mercado.style.backgroundColor = '#010c24'
    mercado.style.transition = '300ms'
    
    sobreMim.style.backgroundColor = '#03588C'
    sobreMim.style.transition = '300ms'
    hobby.style.backgroundColor = '#03588C'
    hobby.style.transition = '300ms'
    carreira.style.backgroundColor = '#03588C'
    carreira.style.transition = '300ms'

    parag.innerHTML = 'Atualmente, no mercado de tecnologia não possuo nenhuma experiência, porém, com ampla diverdade de conhecimento adquirida estudando me dedico a alguns projetos e exercícios de lógica de programação que podem ser encontrados no meu perfil no github.'

})

hobby.addEventListener("click", () => {
    hobby.style.backgroundColor = '#010c24'
    hobby.style.transition = '300ms'
    
    sobreMim.style.backgroundColor = '#03588C'
    sobreMim.style.transition = '300ms'
    mercado.style.backgroundColor = '#03588C'
    mercado.style.transition = '300ms'
    carreira.style.backgroundColor = '#03588C'
    carreira.style.transition = '300ms'

    parag.innerHTML = 'Meu hobby favorito é escutar música (principalmente pop) e no meu tempo livre curto jogar league of legends ou passar tempo com meus amigos.'

})

carreira.addEventListener("click", () => {
    carreira.style.backgroundColor = '#010c24'
    carreira.style.transition = '300ms'
    
    sobreMim.style.backgroundColor = '#03588C'
    sobreMim.style.transition = '300ms'
    mercado.style.backgroundColor = '#03588C'
    mercado.style.transition = '300ms'
    hobby.style.backgroundColor = '#03588C'
    hobby.style.transition = '300ms'

    parag.innerHTML = 'Sobre carreira na área de tecnologia, venho dedicando meu tempo estudando algumas linguagens, o básico envolvendo HTML5, CSS3 e JavaScript tenho um domínio considerável, no momento estou conhecendo linguagens voltadas a parte de trás do código como Java, Python e banco de dados.'

})


