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



function desplazarAbajo(){
    document.getElementById('contactanos').addEventListener('click', () =>{
        document.getElementById('footer').scrollIntoView({
            behavior : "smooth"
        })
    })
}
desplazarAbajo()

function desplazarAriba(){
    document.getElementById('inicio').addEventListener('click', () =>{
        document.getElementById('all').scrollIntoView({
            behavior : "smooth"
        })
    })
}
desplazarAriba()