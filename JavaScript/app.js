const anohtml = document.querySelector('.ano')
let data = new Date()

// Calcular ano
let anoAtual = data.getFullYear();
anohtml.textContent = anoAtual

// Calcular minha idade

const idadehtml = document.querySelector('.idade')
const birthDate = 2005;
idadehtml.textContent = anoAtual-birthDate

// AVISOS DO HEADER

let headerProjectsButton = document.getElementById('headerProjectsButton'); // Botão projetos
headerProjectsButton.addEventListener('click', emDesenvolvimento)

let headerAboutMeButton = document.getElementById('headerAboutMeButton');
headerAboutMeButton.addEventListener('click', emDesenvolvimento)

function emDesenvolvimento() {
    alert('Olá, essa função ainda está em desenvolvimento! Logo estará disponível, aguarde.')
}

//Slide

let slideCurrent = 1

//botões
const leftButton = document.getElementById('leftButton')
const rightButton = document.getElementById('rightButton')
const backButton = document.getElementById('backButton')
const prevButton = document.getElementById('prevButton')
const slide1 = document.getElementById('slide1')
const slide2 = document.getElementById('slide2')
const slide3 = document.getElementById('slide3')
const slidePic = document.getElementById('slidePic')


backButton.addEventListener('click', backSlide)
prevButton.addEventListener('click', nextSlide)
leftButton.addEventListener('click', backSlide )
rightButton.addEventListener('click', nextSlide )

function backSlide() {
    console.log('Backslide ativado')
    slideCurrent = slideCurrent -1
    changeSlide()
}

function nextSlide() {
    slideCurrent = slideCurrent +1
    changeSlide()
}

function changeSlide(){

 
    if ( slideCurrent>3) {
        slideCurrent = 1
    } else if( slideCurrent < 1){
        slideCurrent = 3
    }

    switch (slideCurrent) {
        case 1:
            console.log('Clicado caso 1')
            slide1.classList.remove('slideOff')
            slide2.classList.add('slideOff')
            slide3.classList.add('slideOff')
            break;
        case 2:
            console.log('Clicado caso 2')
            slide2.classList.remove('slideOff')
            slide1.classList.add('slideOff')
            slide3.classList.add('slideOff')
            break

        case 3:
            console.log('Clicado caso 3')
            slide3.classList.remove('slideOff')
            slide1.classList.add('slideOff')
            slide2.classList.add('slideOff')
            break
        default:
            break;
    }
}













// ========================================================

//Interação no icone de informação da sesão skills

let infoSkillsButton = document.getElementById('infoIcon'); //Botão 
infoSkillsButton.addEventListener('click', showPopUp) // Interação com o botão

function showPopUp() {
    let popUpDisplay = document.getElementById('popup');
    popUpDisplay.style.display = 'block';
}

let closePopUpButton = document.getElementById('closePopUp');
closePopUpButton.addEventListener('click', closePopDisplay)

function closePopDisplay() {
    let popUpDisplay = document.getElementById('popup');
    popUpDisplay.style.display = 'none';
}
