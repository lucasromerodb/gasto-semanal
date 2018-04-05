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

class Interfaz {
  insertarPresupuesto(cantidad) {
    const presupuestoAlert = document.querySelector('span#total');
    const restanteAlert = document.querySelector('span#restante');

    presupuestoAlert.innerHTML = `${cantidad}`;
    restanteAlert.innerHTML = `${cantidad}`;
  }

  imprimirMensaje(mensaje, tipo) {
    const div = document.createElement('div');
    div.classList.add('text-center', 'alert');
    if (tipo === 'error') {
      div.classList.add('alert-danger');
    } else {
      div.classList.add('alert-success');
    }

    div.appendChild(document.createTextNode(mensaje));
    document.querySelector('.primario').insertBefore(div, form);

    setTimeout(function () {
      document.querySelector('.primario .alert').remove();
    }, 2000);
  }

  agregarGastoListado(nombre, cantidad) {
    const gastoListado = document.querySelector('#gastos ul');

    const item = document.createElement('li');
    item.className = 'list-group-item d-flex justify-content-between align-items-center';
    item.innerHTML = `${nombre}: <span class="badge badge-primary badge-pill">$ ${cantidad}</span>`;

    gastoListado.appendChild(item);
  }

  presupuestoRestante(cantidad) {
    const restante = document.getElementById('restante');
    const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);
    restante.innerHTML = presupuestoRestanteUsuario;
    console.log(presupuestoRestanteUsuario);
  }
}


document.addEventListener('DOMContentLoaded', function() {
  if (presupuestoUsuario === null || presupuestoUsuario === '') {
    window.location.reload();
  } else {
    cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
    const ui = new Interfaz();
    ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
  }
})

form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('Form funciona');

  const nombreGasto = document.getElementById('gasto').value;
  const cantidadGasto = document.getElementById('cantidad').value;

  const ui = new Interfaz();

  if (nombreGasto === '' || cantidadGasto === '') {
    ui.imprimirMensaje('Llene los campos', 'error')
  } else {
    ui.imprimirMensaje('Agregado', 'correcto')
    ui.agregarGastoListado(nombreGasto, cantidadGasto);
    ui.presupuestoRestante(cantidadGasto);
  }

})
