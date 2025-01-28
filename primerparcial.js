document.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById("btn");
    let mensaje = document.getElementById("mensaje");
    let input = document.querySelector(".form-control");
    let dropdown = document.querySelector(".btn-group");
    let selectedColor = "";

    // Escuchar clics en las opciones del menú desplegable
    dropdown.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            selectedColor = event.target.textContent;
        }
    });
});
