let abrir = document.querySelector('.abrir');
let cerrar = document.querySelector('.cerrar');
let body = document.querySelector('body')

abrir.addEventListener('click', abrirMenu);
cerrar.addEventListener('click', cerrarMenu);

function abrirMenu(){
    let menu = document.querySelector('.main ul');
    if(menu.style.top = '-100px'){
        menu.style.top = '0px'
        abrir.style.display = 'none'
        cerrar.style.display = 'block'
        body.classList.add('fondo')
        body.style.overflow = 'hidden'
    }
}

function cerrarMenu(){
    let menu = document.querySelector('.main ul');
    if(menu.style.top = '0'){
        menu.style.top = '-100%'
        cerrar.style.display = 'none'
        abrir.style.display = 'block'
        body.classList.remove('fondo')
        body.style.overflow = 'visible'
    }
}

function adelante(a){
    document.getElementById('header').style.backgroundImage = 'url("images/mobile-image-hero-2.jpg")';
    let titulo = document.querySelector('.info-hero h2').textContent = 'We are available all across the globe'
    let texto = document.querySelector('.info-hero p').textContent = 'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.'
}

function atras(){
    document.getElementById('header').style.backgroundImage = 'url("images/mobile-image-hero-1.jpg")';
    let titulo = document.querySelector('.info-hero h2').textContent = 'Discover innovative ways to decorate'
    let texto = document.querySelector('.info-hero p').textContent = 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
}