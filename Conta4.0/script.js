const menu = document.querySelectorAll('.enlace');
const hamburguesa = document.querySelector('.hamburguesa');

hamburguesa.addEventListener('click', verMenu);

function verMenu(){
    for(let index=0; index<menu.length;index++){
        menu[index].classList.toggle('visible')
    }
}



