let abrir = document.querySelector('.abrir')
let cerrar = document.querySelector('.cerrar');

let imagenesMobile = ['images/mobile-image-hero-1.jpg', 'images/mobile-image-hero-2.jpg' , 'images/mobile-image-hero-3.jpg']
let imagenesDesktop = ['images/desktop-image-hero-1.jpg', 'images/desktop-image-hero-2.jpg' , 'images/desktop-image-hero-3.jpg']
let cont = 0
console.log(cont)
function carrousel(contenedor){
    contenedor.addEventListener('click', (e) => {
        let atras = contenedor.querySelector('.atras');
        let adelante = contenedor.querySelector('.adelante');
        let imgMobile = contenedor.querySelector('.mobile');
        let imgDesktop = contenedor.querySelector('.desktop');
        let uno = document.querySelector('.one')
        let dos = document.querySelector('.two')
        let tres = document.querySelector('.three')
       
        
        
        if(e.target == atras){
            if(cont > 0){
                imgMobile.src = imagenesMobile[cont - 1];
                imgDesktop.src = imagenesDesktop[cont - 1];
                cont--;
                console.log(cont)
                if(cont == 1){
                    tres.style.display = 'none'
                    dos.style.display = 'block'
                }else if(cont == 0){
                    dos.style.display = 'none'
                    uno.style.display = 'block'
                }
            }else{
                imgMobile.src = imagenesMobile[imagenesMobile.length - 1];
                imgDesktop.src = imagenesDesktop[imagenesDesktop.length - 1];
                cont = imagenesMobile.length - 1;
                console.log(cont)
                if(cont == 2){
                    uno.style.display = 'none'
                    tres.style.display = 'block'
                }
            }
            
        }else if(e.target == adelante){
            if(cont < imagenesMobile.length - 1){
                imgMobile.src = imagenesMobile[cont + 1];
                imgDesktop.src = imagenesDesktop[cont + 1];
                cont++;
                console.log(cont)
                if(cont == 1){
                    uno.style.display = 'none'
                    dos.style.display = 'block'
                }else if(cont == 2){
                    dos.style.display = 'none'
                    tres.style.display = 'block'
                }
            }else{
                imgMobile.src = imagenesMobile[0];
                imgDesktop.src = imagenesDesktop[0];
                cont = 0;
                console.log(cont)
                if(cont == 0){
                    tres.style.display = 'none'
                    uno.style.display = 'block'
                }
            }
        }
    })
}


document.addEventListener('DOMContentLoaded', () => {
    let contenedor = document.querySelector('header');
    carrousel(contenedor)
})


cerrar.addEventListener('click', () => {
    let menu = document.querySelector('.main ul');
    let body = document.querySelector('body')
    if(menu.style.top = '0'){
        menu.style.top = '-100%'
        abrir.style.display = 'block';
        cerrar.style.display = 'none'
        body.classList.remove('fondo')
    }
})

abrir.addEventListener('click', () => {
    let menu = document.querySelector('.main ul');
    let body = document.querySelector('body')
    if(menu.style.top = '-100%'){
        menu.style.top = '0'
        abrir.style.display = 'none';
        cerrar.style.display = 'block'
        body.classList.add('fondo')
    }
})