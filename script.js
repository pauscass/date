document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const osito = document.getElementById("osito");
    const pregunta = document.querySelector("h1"); // Selecciona la pregunta
    const buttonsContainer = document.querySelector(".buttons");

    // Estado inicial: Osito bailando
    osito.src = "osito1.gif";

    // Cuando intentan presionar "No"
    noButton.addEventListener("mouseover", function () {
        const x = Math.random() * window.innerWidth - 100;
        const y = Math.random() * window.innerHeight - 50;
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;

        osito.src = "triste.gif"; // Cambia al osito triste
        pregunta.textContent = "¿Por qué no? 😢"; // Cambia la pregunta
    });

    // Cuando presionan "Sí"
    yesButton.addEventListener("click", function () {
        osito.src = "ositos-abrazandose.gif"; // Cambia a los ositos abrazándose
        pregunta.textContent = "¡Sabía que dirías que sí! ❤️"; // Cambia la pregunta
        buttonsContainer.style.display = "none"; // Oculta los botones
    });
});
