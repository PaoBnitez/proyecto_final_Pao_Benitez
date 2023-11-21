function email() {
    alert('Enviarás un E-mail')
}

let parrafo = document.querySelector("#crecer").style.color = " fuchsia"

const scrollButton = document.getElementById("scrollButton");
scrollButton.addEventListener("click", () => {
window.scrollTo({
        top: 0, // Desplazarse hasta la parte superior de la página
        behavior: "smooth" // Hacer que el scroll sea suave y animado
    });
});