//  Cada vez que se recarga la página debe añadir una visita más
// Debe persistir el número aunque se cierre el navegador
// i deseas reiniciar el contador, haz clic en el botón 
// "Reestablecer Contador" y se pondrá a cero y comenzará 
// de nuevo en 1 en la siguiente visita.

const contadorCero = document.getElementById('btnReestablecer');
const contadorVisitas = document.getElementById('contadorVisitas')

contadorCero.addEventListener( 'click', () => {
    localStorage.setItem('visitas', 0);
    contadorVisitas.textContent = 0 ;
})


/*
let visitas = parseFloat(localStorage.getItem('visitas')) || 0;

visitas += 1;

localStorage.setItem('visitas', visitas);
contadorVisitas.textContent = visitas;
*/

let visitaWeb;

if(localStorage.visitas) {
    visitaWeb = parseFloat(localStorage.visitas)+1;
}
localStorage.visitas = visitaWeb
contadorVisitas.textContent = visitaWeb;

