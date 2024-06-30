const btnTri = document.querySelector('.btn-triangulo');
const btnRet = document.querySelector('.btn-retangulo');
const btnCubo = document.querySelector('.btn-cubo');
const btnCirc = document.querySelector('.btn-circulo');
const btnOpen = document.querySelector('.abrir')
const btnClose = document.querySelector('.fechar')

function areaDoTriangulo() {
    let alturaTriangulo = parseFloat(document.querySelector('.altura-triangulo').value);
    let baseTriangulo = parseFloat(document.querySelector('.base-triangulo').value);
    const result = document.querySelector('.btn-triangulo').closest('.boxs').querySelector('.resultado');
    const message = document.createElement('p');
    
    if (isNaN(alturaTriangulo) || isNaN(baseTriangulo)) {
        message.textContent = 'Valores inválidos.';
    } else {
        let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
        message.textContent = `${areaTriangulo.toFixed(2)}`;
    }
    result.innerHTML = '';
    result.appendChild(message);
}

function areaDoRetangulo() {
    let alturaRetangulo = parseFloat(document.querySelector('.altura-retangulo').value);
    let baseRetangulo = parseFloat(document.querySelector('.base-retangulo').value);
    const result = document.querySelector('.btn-retangulo').closest('.boxs').querySelector('.resultado');
    const message = document.createElement('p');
    
    if (isNaN(alturaRetangulo) || isNaN(baseRetangulo)) {
        message.textContent = 'Valores inválidos.';
    } else {
        let areaRetangulo = alturaRetangulo * baseRetangulo;
        message.textContent = `${areaRetangulo.toFixed(2)}`;
    }
    result.innerHTML = '';
    result.appendChild(message);
}

function volumeDoCubo() {
    let aresta = parseFloat(document.querySelector('.volume-cubo').value);
    const result = document.querySelector('.btn-cubo').closest('.boxs').querySelector('.resultado');
    const message = document.createElement('p');
    
    if (isNaN(aresta)) {
        message.textContent = 'Valores inválidos.';
    } else {
        let volume = Math.pow(aresta, 3);
        message.textContent = `${volume.toFixed(2)}`;
    }
    result.innerHTML = '';
    result.appendChild(message);
}

function areaDoCirculo() {
    let raio = parseFloat(document.querySelector('.raio-circulo').value);
    const result = document.querySelector('.btn-circulo').closest('.boxs').querySelector('.resultado');
    const message = document.createElement('p');
    
    if (isNaN(raio)) {
        message.textContent = 'Valores inválidos.';
    } else {
        let areaCirculo = Math.PI * Math.pow(raio, 2);
        message.textContent = `${areaCirculo.toFixed(2)}`;
    }
    result.innerHTML = '';
    result.appendChild(message);
}
btnTri.addEventListener('click', (e) => {
    e.preventDefault();
    areaDoTriangulo();
});

btnRet.addEventListener('click', (e) => {
    e.preventDefault();
    areaDoRetangulo();
});

btnCubo.addEventListener('click', (e) => {
    e.preventDefault();
    volumeDoCubo();
});

btnCirc.addEventListener('click', (e) => {
    e.preventDefault();
    areaDoCirculo();
});

function abrir(){
    const boxs = document.querySelectorAll('.boxs')

    boxs.forEach(box => {
        box.style.display =  box.style.display === 'flex'? 'none' : 'flex';
    });
    btnOpen.style.display = 'none'
    btnClose.style.display = 'flex'
     
}
function fechar(){
    const boxs = document.querySelectorAll('.boxs')

    boxs.forEach(box =>{
        box.style.display = 'none'
    });
    btnOpen.style.display = 'flex'
    btnClose.style.display = 'none'
}