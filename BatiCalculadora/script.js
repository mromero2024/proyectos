const pantalla = document.querySelector('.display');
const botones = document.getElementsByClassName('boton');

const botonesArray = Array.from(botones);

botonesArray.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        calculadora(pantalla, btn)
    })
})

function calculadora(pantalla, btn){
    switch (btn.innerHTML) {
        case 'c':
                borrar(pantalla);
            break;

        case '=':
                resolver(pantalla);
            break;
    
        default:
                ingreso(pantalla, btn)
            break;
    }
}

function ingreso(pantalla, btn){
    if(pantalla.innerHTML==0){
        pantalla.innerHTML='';
    }
    pantalla.innerHTML += btn.innerHTML;
}

function resolver(pantalla){
    pantalla.innerHTML = eval(pantalla.innerHTML);
}

function borrar(pantalla){
    pantalla.innerHTML = 0;
}