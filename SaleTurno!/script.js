const datos = {
    nombre: '',
    dia:'',
    hora:''
}

const nombre = document.querySelector('#nombre');
const dia = document.querySelector('#dia');
const hora = document.querySelector('#hora');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
dia.addEventListener('input', leerTexto);
hora.addEventListener('input', leerTexto);
formulario.addEventListener('submit', function(e){
    e.preventDefault();

const {nombre, dia, hora} = datos;

if(nombre==='' || dia==='' || hora===''){
    mostrarAlerta('Todos los campos son obligatorios', true);
    return;
}   mostrarAlerta('El formulario fue enviado');
});

console.log(mostrarAlerta)
function leerTexto(evento){
    datos[evento.target.id] = evento.target.value;
}

function mostrarAlerta(mensaje, error=null){
    const alerta = document.createElement('P');
    alerta.textContent=mensaje;
    if(error){
        alerta.classList.add('incorrecto')
    } else{
        alerta.classList.add('correcto')
    }
    formulario.appendChild(alerta);
    setTimeout(()=>{
        alerta.remove();
    }, 3000)
}
