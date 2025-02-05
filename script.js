document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const osito = document.getElementById("osito");
    const pregunta = document.querySelector("h1"); // Selecciona la pregunta
    const buttonsContainer = document.querySelector(".buttons");

    let yesButtonSize = 1; // Tamaño inicial del botón "Sí"

    // Estado inicial: Osito bailando
    osito.src = "osito1.gif";

    // Cuando intentan presionar "No"
    noButton.addEventListener("click", function () {
        // Mover el botón "No" aleatoriamente
        const x = Math.random() * window.innerWidth - 100;
        const y = Math.random() * window.innerHeight - 50;
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;

        // Cambiar la imagen del osito y la pregunta
        osito.src = "triste.gif"; 
        pregunta.textContent = "¿Por qué no? 😢"; 

        // Hacer que el botón "Sí" crezca progresivamente cada vez
        yesButtonSize += 0.1; // Aumenta el tamaño cada vez
        yesButton.style.transform = `scale(${yesButtonSize})`; // Aplica el nuevo tamaño
    });

    // Cuando presionan "Sí"
    yesButton.addEventListener("click", function () {
        osito.src = "ositos-abrazandose.gif"; // Cambiar a los ositos abrazándose
        pregunta.textContent = "¡Sabía que dirías que sí! ❤️"; // Cambiar la pregunta
        buttonsContainer.style.display = "none"; // Ocultar los botones
    });
});
