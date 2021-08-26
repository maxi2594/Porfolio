
export const onViewport = ( elem, height ) => {
    // var anchoViewport = window.innerWidth || document.documentElement.clientWidth;
    // var alturaViewport = window.innerHeight || document.documentElement.clientHeight;
    //Posición de la caja del elemento
    var caja = elem.getBoundingClientRect();
    return  (!caja.bottom <= 0);
}

//caja.top <= height