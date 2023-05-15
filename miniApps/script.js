const display = document.querySelector('.display');
const suma = document.querySelector('.suma');
const resta = document.querySelector('.resta');
const reset = document.querySelector('.reset');
const leyenda = document.querySelector('.leyenda');
const oscuro = document.querySelector('.oscuro');
const contador = document.querySelector('.contador');
const btn = document.getElementsByClassName('btn');
const contenedor = document.querySelector('.contenedor');
const reloj = document.querySelector('.numeros');




suma.addEventListener('click', ()=>{
    display.innerHTML++;
}
)
resta.addEventListener('click', ()=>{
    display.innerHTML--;
}
)
reset.addEventListener('click', ()=>{
    display.innerHTML=0;
}
)

oscuro.addEventListener('click', modoOscuro);

function modoOscuro(){
    contador.classList.toggle('contador-dark');
    display.classList.toggle('display-dark');
    suma.classList.toggle('btn-dark');
    resta.classList.toggle('btn-dark');
    reset.classList.toggle('reset-dark');
    oscuro.classList.toggle('oscuro-dark');
    leyenda.classList.toggle('leyenda-dark');
    reloj.classList.toggle('reloj-dark');
    contenedor.classList.toggle('contenedor-dark');   
}


setInterval(()=>{
    tiempo = new Date();

    hora = tiempo.getHours();
    minutos = tiempo.getMinutes();
    segundos = tiempo.getSeconds();

    reloj.innerHTML = hora +':'+ minutos +':' + segundos;
    
}, 1000);



let colores = ['verde', 'rojo', 'azul', 'amarillo'];


for(i=0; i<colores.length; i++){   
        console.log('este color se llama' + ' ' + colores[i]);
}

