const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const osito = document.getElementById("osito");

noButton.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth - 100;
    const y = Math.random() * window.innerHeight - 50;
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

yesButton.addEventListener("click", () => {
    osito.src = "ositos-abrazandose.gif"; 
    document.querySelector("h1").textContent = "¡Sabía que dirías que sí! ❤️";
    document.querySelector(".buttons").style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    const botonNo = document.getElementById("no");
    const botonSi = document.getElementById("yes");
    const imagen = document.getElementById("osito");

    // Estado inicial: Osito bailando
    imagen.src = "osito1.gif";

    // Cuando el cursor se acerca al botón "No", el botón huye y el GIF cambia a triste
    botonNo.addEventListener("mouseenter", function () {
        const nuevaX = Math.random() * (window.innerWidth - botonNo.clientWidth);
        const nuevaY = Math.random() * (window.innerHeight - botonNo.clientHeight);

        botonNo.style.position = "absolute";
        botonNo.style.left = nuevaX + "px";
        botonNo.style.top = nuevaY + "px";

        imagen.src = "triste.gif"; // Cambia al osito triste
    });

    // Cuando presionan "Sí", el GIF cambia a un osito feliz
    botonSi.addEventListener("click", function () {
        imagen.src = "ositos-abrazandose.gif"; // Cambia al osito feliz
    });
});
