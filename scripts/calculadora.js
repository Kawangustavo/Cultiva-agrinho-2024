let scrollEl = document.querySelector("nav");
let icons = document.querySelectorAll(".icone");
let menu = document.querySelector("ul");

document.addEventListener("scroll", (event) => { // Muda cor no scroll
    const posicao = window.scrollY;
    if (posicao > 0) {
        scrollEl.classList.add("ativo");
        menu.classList.add("remover");
        icons.forEach(icon => icon.classList.add("mudacor"));
    } else {
        scrollEl.classList.remove("ativo");
        menu.classList.remove("remover");
        icons.forEach(icon => icon.classList.remove("mudacor"));
    }
});

document.getElementById('calcular').addEventListener('click', function() {
    const nitrogenio = parseFloat(document.getElementById('nitrogenio').value);
    const fosforo = parseFloat(document.getElementById('fosforo').value);
    const potassio = parseFloat(document.getElementById('potassio').value);
    const eletrocondutividade = parseFloat(document.getElementById('eletrocondutividade').value);
    const ph = parseFloat(document.getElementById('ph').value);
    const temperatura = parseFloat(document.getElementById('temperatura').value);
    const umidade = parseFloat(document.getElementById('umidade').value);
    const resultado = parseFloat(document.getElementById('resultado'));

    if (isNaN(nitrogenio) || isNaN(fosforo) || isNaN(potassio) || isNaN(eletrocondutividade) || isNaN(ph) || isNaN(temperatura) || isNaN(umidade)) {
       alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

 function verificarNitrogenio(valor) {
    return valor >= 500 && valor <= 2000; 
}

function verificarFosforo(valor) {
    return valor >= 10 && valor <= 50; 
}

function verificarPotassio(valor) {
    return valor >= 100 && valor <= 300;
}

function verificarEletrocondutividade(valor) {
    return valor >= 150 && valor <= 1000;
}

function verificarPh(valor) {
    return valor >= 6.0 && valor <= 7.0; 
}

function verificarTemperatura(valor) {
    return valor >= 15 && valor <= 30; 
}

function verificarUmidade(valor) {
    return valor >= 20 && valor <= 80; 
}

// Parâmetros de entrada
const parametros = [
    verificarNitrogenio(nitrogenio),
    verificarFosforo(fosforo),
    verificarPotassio(potassio),
    verificarEletrocondutividade(eletrocondutividade),
    verificarPh(ph),
    verificarTemperatura(temperatura),
    verificarUmidade(umidade)
];

// Nomes dos parâmetros
const nomesParametros = [
    'Nitrogênio',
    'Fósforo',
    'Potássio',
    'Eletrocondutividade',
    'pH',
    'Temperatura',
    'Umidade'
];

const parametrosAtingidos = parametros.filter(Boolean).length;
const naoAtingidos = nomesParametros.filter((_, index) => !parametros[index]);

function classificarFertilidade(numeroDeParametrosAtingidos) {
    if (numeroDeParametrosAtingidos === 7) {
        return 'Muito-fertil';
    } else if (numeroDeParametrosAtingidos >= 5) {
        return 'Fertil';
    } else if (numeroDeParametrosAtingidos >= 2) {
        return 'Mediana';
    } else {
        return 'Infertil';
    }
}

const fertilidade = classificarFertilidade(parametrosAtingidos);

const resultadoUl = document.getElementById('resultado');
resultadoUl.innerHTML = ''; 

const liFertilidade = document.createElement('li');
liFertilidade.innerHTML = `Fertilidade: <span class="fertilidade-${fertilidade}">${fertilidade}</span>`;
liFertilidade.classList.add('oculto');
resultadoUl.appendChild(liFertilidade);

nomesParametros.forEach((nome, index) => {
    const liParametro = document.createElement('li');
    liParametro.textContent = `${nome}: ${parametros[index] ? 'Atingido' : 'Não atingido'}`;
    liParametro.className = parametros[index] ? 'atingido' : 'nao-atingido';
    liParametro.classList.add('oculto');
    resultadoUl.appendChild(liParametro);
});

if (naoAtingidos.length > 0) {
    const liNaoAtingidos = document.createElement('li');
    liNaoAtingidos.textContent = `Parâmetros não atingidos: ${naoAtingidos.join(', ')}`;
    liNaoAtingidos.classList.add('oculto');
    resultadoUl.appendChild(liNaoAtingidos);
} else {
    const liTodosAtingidos = document.createElement('li');
    liTodosAtingidos.textContent = 'Todos os parâmetros foram atingidos.';
    liTodosAtingidos.classList.add('oculto');
    resultadoUl.appendChild(liTodosAtingidos);
}

let delay = 0;
const items = resultadoUl.querySelectorAll('li');

items.forEach((item, index) => {
    setTimeout(() => {
        item.classList.remove('oculto');
        item.classList.add('visivel');
    }, delay);

    delay += 500; 
});

// Limpar os campos de entrada
document.getElementById('nitrogenio').value = '';
document.getElementById('fosforo').value = '';
document.getElementById('potassio').value = '';
document.getElementById('eletrocondutividade').value = '';
document.getElementById('ph').value = '';
document.getElementById('temperatura').value = '';
document.getElementById('umidade').value = '';
});
