function mostrarFlores() {
    const floresContainer = document.getElementById('floresContainer');
    floresContainer.innerHTML = ""; // Limpiar contenido previo

    for (let i = 0; i < 5; i++) {
        const flor = document.createElement('div');
        flor.classList.add('flor');

        for (let j = 0; j < 4; j++) {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            flor.appendChild(petal);
        }

        const center = document.createElement('div');
        center.classList.add('center');
        flor.appendChild(center);

        floresContainer.appendChild(flor);
    }

    floresContainer.classList.remove('hidden');
}