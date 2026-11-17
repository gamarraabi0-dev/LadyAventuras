// Mensaje de bienvenida e interactividad de Lady Aventura
document.addEventListener('DOMContentLoaded', () => {
  const count = document.getElementById('visitCount');
  if (count) {
    // Contador de demostración: aumenta cada vez que se carga Inicio.
    let visits = Number(sessionStorage.getItem('ladyAventuraVisits') || 0);
    visits += 1;
    sessionStorage.setItem('ladyAventuraVisits', visits);
    count.textContent = visits.toLocaleString('es-AR');
  }

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('nombre').value.trim();
      document.getElementById('formMensaje').textContent =
        `¡Gracias, ${name}! Tu mensaje quedó registrado en esta demostración.`;
      form.reset();
    });
  }
});

// Operación matemática simple para practicar JavaScript.
function calcularPresupuesto() {
  const daysInput = document.getElementById('dias');
  const result = document.getElementById('resultado');
  if (!daysInput || !result) return;
  const days = Number(daysInput.value);
  if (!Number.isInteger(days) || days < 1 || days > 60) {
    result.textContent = 'Ingresá una cantidad de días entre 1 y 60.';
    return;
  }
  const estimated = days * 120000;
  result.textContent = `Para ${days} días, el presupuesto de ejemplo sería $${estimated.toLocaleString('es-AR')} pesos. Es un cálculo ilustrativo.`;
}
