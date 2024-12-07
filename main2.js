let lastScrollY = 0; // Última posición del scroll
    const header = document.querySelector(".cont-header");

    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Si haces scroll hacia abajo, oculta el header
        header.classList.add("hidden");
      } else {
        // Si haces scroll hacia arriba, muestra el header
        header.classList.remove("hidden");
      }

      lastScrollY = currentScrollY; // Actualiza la última posición
    });



//funtion changen content
const mensajes = [
    "Comida Rápida Perro Americano y Perro de cordero Bucaramanga",
    "Rapido rico y al mejor precio",
    "Elije entre 7 toppins",
    "calle 89 17-81 San Luis",
    'Contactanos al "3052852468"'
];
    
    
const texto = document.querySelector(".text-change")
    
let indice = 0;
    
function cambiarContenido(){
    texto.classList.add('oculto')
    
    setTimeout(() => {
        texto.textContent = mensajes[indice];
        texto.classList.remove('oculto')
    
        indice++;
        if(indice >= mensajes.length){
            indice = 0;
        }
    },
       500,
    )
}
    
cambiarContenido()
    
setInterval(cambiarContenido, 3000)