var vectorCandidatos = new Array(4);

vectorCandidatos[0] = 0;
vectorCandidatos[1] = 0;
vectorCandidatos[2] = 0;
vectorCandidatos[3] = 0;

function votar(Candidato) {

    vectorCandidatos[Candidato] = vectorCandidatos[Candidato] + 1;
    alert("Gracias por su Voto");
}

function estadistica() {
    let totalVotos = vectorCandidatos[0] + vectorCandidatos[1] + vectorCandidatos[2] + vectorCandidatos[3];
    let porCan1 = (vectorCandidatos[0] / totalVotos) * 100;
    let porCan2 = (vectorCandidatos[1] / totalVotos) * 100;
    let porCan3 = (vectorCandidatos[2] / totalVotos) * 100;
    let porCan4 = (vectorCandidatos[3] / totalVotos) * 100;

    let nodoParrafo = document.createElement('p');
    let nodoParrafo1 = document.createElement('p');
    let nodoParrafo2 = document.createElement('p');
    let nodoParrafo3 = document.createElement('p');
    let nodoParrafo4 = document.createElement('p');
    let nodoTexto = document.createTextNode("Total Votos: " + totalVotos);
    let nodoTexto1 = document.createTextNode("Total Votos GUSTAVO PETRO: " + vectorCandidatos[0] + " - " + porCan1 + "%");
    let nodoTexto2 = document.createTextNode("Total Votos RODOLFO HÉRNANDEZ: " + vectorCandidatos[1] + " - " + porCan2 + "%");
    let nodoTexto3 = document.createTextNode("Total Votos SERGIO FAJARDO: " + vectorCandidatos[2] + " - " + porCan3 + "%");
    let nodoTexto4 = document.createTextNode("Total Votos FEDERICO GUTIERREZ " + vectorCandidatos[3] + " - " + porCan4 + "%");

    nodoParrafo.appendChild(nodoTexto);
    nodoParrafo1.appendChild(nodoTexto1);
    nodoParrafo2.appendChild(nodoTexto2);
    nodoParrafo3.appendChild(nodoTexto3);
    nodoParrafo4.appendChild(nodoTexto4);

    let elementoDiv = document.getElementById('stats');
    elementoDiv.appendChild(nodoParrafo);
    elementoDiv.appendChild(nodoParrafo1);
    elementoDiv.appendChild(nodoParrafo2);
    elementoDiv.appendChild(nodoParrafo3);
    elementoDiv.appendChild(nodoParrafo4);
    // Obtener una referencia al elemento canvas del DOM
    const $grafica = document.querySelector("#grafica");
    // Las etiquetas son las que van en el eje X. 
    const etiquetas = ["Candidato 1", "Candidato 2", "Candidato 3", "Candidato 4"]
    // Podemos tener varios conjuntos de datos. Comencemos con uno
    const datosVotos = {
        label: "Votos por Candidato",
        data: [vectorCandidatos[0], vectorCandidatos[1], vectorCandidatos[2], vectorCandidatos[3]], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
        borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
        borderWidth: 1,// Ancho del borde
    };
    new Chart($grafica, {
        type: 'line',// Tipo de gráfica
        data: {
            labels: etiquetas,
            datasets: [
                datosVotos,
                // Aquí más datos...
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
    });

}