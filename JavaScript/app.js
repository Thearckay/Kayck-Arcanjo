// alert('Olá, seja bem-vindo(a), ao meu site/Portifólio Online. Ainda está em Desenvolvimento!');

const anohtml = document.querySelector('.ano')
let data = new Date()

// Calcular ano
let anoAtual = data.getFullYear();
anohtml.textContent = anoAtual

// Calcular minha idade

const idadehtml = document.querySelector('.idade')
const birthDate = 2005;
idadehtml.textContent = anoAtual-birthDate

