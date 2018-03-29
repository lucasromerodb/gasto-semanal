const presupuestoUsuario = prompt('¿Cual es tu presupuesto?'),
      gasto = document.getElementById('gasto'),
      cantidad = document.getElementById('cantidad'),
      form = document.getElementById('agregar-gasto');

let cantidadPresupuesto;

class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
  }

  presupuestoRestante(cantidad = 0) {
    return this.restante -= Number(cantidad);
  }
}


document.addEventListener('DOMContentLoaded', function() {
  if (presupuestoUsuario === null || presupuestoUsuario === '') {
    window.location.reload();
  } else {
    cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
    console.log(cantidadPresupuesto);
  }
})
