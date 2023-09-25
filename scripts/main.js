const enlace = document.getElementById('mostrarFormulario');
const formulario = document.getElementById('formulario-container');
const botonCancelar = document.getElementById('cancelar');
let avatarImg = document.getElementById("avatar-img");
let mostrarPopUpLink = document.getElementById("mostrarPopUp");
let popup = document.getElementById("popup");
let tarjetasGeneradas = false;
const tecnologias = [
  { nombre: 'HTML', logo: src="./assets/html5.svg" },
  { nombre: 'CSS', logo: src="./assets/css3.svg" },
  { nombre: 'JavaScript', logo: src="./assets/js.svg" },
  { nombre: 'MySql', logo: src="./assets/mysql.svg" },
  { nombre: 'JAVA', logo: src="./assets/java.svg" },
  { nombre: 'PostMan', logo: src="./assets/postman.svg" },
];
const tarjetasContainer = document.getElementById('tarjetasContainer');
const generarTarjetaBtn = document.getElementById('generarTarjeta');

// Función para mostrar el formulario
function mostrarFormulario() {
    formulario.style.display = 'block'; // Muestra la sección del formulario
}

// Agrega un evento click al enlace
enlace.addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    mostrarFormulario(); // Llama a la función para mostrar el formulario
});

// Agregar un evento click al botón "Cancelar" para cerrar el formulario
botonCancelar.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    // Ocultar el formulario
    formulario.style.display = 'none';
});

// Función para mostrar el popup
function mostrarPopup() {
    popup.style.display = "flex";
    document.body.classList.add("popup-opened");
}

// Función para cerrar el popup
function cerrarPopup() {
    popup.style.display = "none";
    document.body.classList.remove("popup-opened");
}

// Agregar un event listener al hacer clic en la imagen
avatarImg.addEventListener("click", mostrarPopup);

// Agregar un event listener al hacer clic en el enlace del encabezado
mostrarPopUpLink.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el enlace redireccione
    mostrarPopup();
});

// Event listener para cerrar el popup si se hace clic fuera de él
document.addEventListener("click", function (event) {
    if (event.target !== popup && !popup.contains(event.target) && event.target !== avatarImg && event.target !== mostrarPopUpLink) {
        cerrarPopup();
    }
});

generarTarjetaBtn.addEventListener('click', () => {
  if (tarjetasGeneradas) {
    // Si las tarjetas ya se han generado, deshacer (borrar) las tarjetas
    tarjetasContainer.innerHTML = '';
    generarTarjetaBtn.textContent = 'MOSTRAR TECNOLOGÍAS';
    tarjetasGeneradas = false;
} else {
  tecnologias.forEach(tecnologia => {
     console.log("CANTIDAD TARJETAS");
      const card = document.createElement('div');
      card.className = 'card';
      const img = document.createElement('img');
      img.src = tecnologia.logo;
      img.alt = tecnologia.nombre;
      const h2 = document.createElement("h2");
      h2.textContent = tecnologia.nombre;
      card.appendChild(img);
      card.appendChild(h2);
      tarjetasContainer.appendChild(card);
  });
  generarTarjetaBtn.textContent = 'OCULTAR TECNOLOGIAS';
  tarjetasGeneradas= true;
  }
});






