document.addEventListener("DOMContentLoaded", function() {
    // Este bloque de código se ejecuta cuando el documento HTML ha sido completamente cargado
  
    const riesgosContainer = document.getElementById("riesgos-container");
    const nuevoRiesgoForm = document.getElementById("nuevo-riesgo-form");
  
    // Función para agregar un nuevo recuadro de riesgo
    function agregarRiesgo(titulo, nivel) {
      // Crea el HTML para un nuevo recuadro de riesgo con el título y nivel proporcionados
      const riesgoHTML = `
        <div class="border rounded p-3 mb-3">
          <h3>${titulo}</h3>
          <p><strong>Nivel de Riesgo:</strong> ${nivel}</p>
          <button class="btn btn-danger btn-sm" onclick="eliminarRiesgo(this)">Eliminar</button>
        </div>
      `;
      // Inserta el nuevo recuadro de riesgo dentro del contenedor de riesgos
      riesgosContainer.insertAdjacentHTML("beforeend", riesgoHTML);
    }
  
    // Función para manejar el envío del formulario de nuevo riesgo
    nuevoRiesgoForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const titulo = document.getElementById("titulo-riesgo").value;
      const nivel = document.getElementById("nivel-riesgo").value;
      agregarRiesgo(titulo, nivel);
      nuevoRiesgoForm.reset();
    });
  
    // Función para eliminar un recuadro de riesgo
    function eliminarRiesgo(elemento) {
      const riesgo = elemento.closest(".border");
      riesgo.remove();
    }
  });
  