onload = () => {
    document.getElementById('calcular').addEventListener('click', (e) => {
        e.preventDefault();
        const homens = parseFloat(document.getElementById('homens').value);
        const mulheres = parseFloat(document.getElementById('mulheres').value);
        const criancas = parseFloat(document.getElementById('criancas').value);

        const consumoCarne = parseFloat(homens * 500 + mulheres * 300 + criancas * 200) / 1000;
        const consumoFrango = parseFloat(homens * 200 + mulheres * 200 + criancas * 100) / 1000;
        const consumoLinguica = parseFloat(homens * 200 + mulheres * 200 + criancas * 200) / 1000;

        

        const carneConsumo = document.createElement('h4');
        const frangoConsumo = document.createElement('h4');
        const linguicaConsumo = document.createElement('h4');

        carneConsumo.textContent = `Consumo de carne: ${consumoCarne}kg`;
        frangoConsumo.textContent = `Consumo de Frango: ${consumoFrango}kg`;
        linguicaConsumo.textContent = `Consumo de linguiça: ${consumoLinguica}kg`;

        const conteudo = document.getElementById('content-right');
        conteudo.innerHTML = '';
        conteudo.appendChild(carneConsumo);
        conteudo.appendChild(frangoConsumo);
        conteudo.appendChild(linguicaConsumo);
        document.getElementById('homens').value = '';
        document.getElementById('mulheres').value = '';
        document.getElementById('criancas').value = '';
    });  
    
}