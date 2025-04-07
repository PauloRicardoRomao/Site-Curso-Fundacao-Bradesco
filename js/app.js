function verificaLargura(){
    const menuMobile = document.getElementById('navegacao');
    const textMenuMobile = menuMobile.querySelectorAll('ul li a');

    if (window.innerWidth <= 1024){
        menuMobile.style.display = 'none';
        textMenuMobile.forEach(textMenuMobile => {
            if (window.innerWidth <= 389) {
                textMenuMobile.style.fontSize = '2.0em';
            }
        });
    } else if(window.innerWidth > 1024){
        menuMobile.style.display = 'flex';
    } 
}

function abreMenuMobile(){
    const menu = document.getElementById('navegacao');

    const menuProp = getComputedStyle(menu).display;
    if(menuProp === 'none'){
        menu.style.display = 'flex';
        menu.style.zIndex = '30';
    }else if(menuProp === 'flex'){
        menu.style.display = 'none';
    }

}
