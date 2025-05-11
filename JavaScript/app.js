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

let headerCurriculumButton = document.getElementById('headerCurriculumButton'); //Botão curriculo do menu
headerCurriculumButton.addEventListener('click', emDesenvolvimento)

let headerProjectsButton = document.getElementById('headerProjectsButton'); // Botão projetos
headerProjectsButton.addEventListener('click', emDesenvolvimento)

let headerAboutMeButton = document.getElementById('headerAboutMeButton');
headerAboutMeButton.addEventListener('click', emDesenvolvimento)

function emDesenvolvimento() {
    alert('Olá, essa função ainda está em desenvolvimento! Logo estará disponível, aguarde.')
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
