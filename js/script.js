document.addEventListener('DOMContentLoaded', function () {
    // Insertar el contenido del encabezado
    document.querySelector('header').innerHTML += `
        <div class="logo">
            <a href="index.html"><img src="./img/Logo.png" alt="Logo"></a>
        </div>
        
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        
        <div class="topnav" id="myTopnav">

            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
            </a>

            <div class="menu-list">
                <a href="index.html"></a>
                <a href="somos.html">Quiénes Somos</a>
                <a href="especies.html">Agregar Especie</a>
                <a href="contacto.html">Contacto</a>   
            </div>

        </div>

        `;

    // Insertar el contenido del pie de página
    document.querySelector('footer').innerHTML += `
        <div class="mapa-sitio">
            <h5>Mapa de Sitio:</h5>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="somos.html">Quiénes Somos</a></li>
                <li><a href="especies.html" title="Próximamente en línea">Agregar Especie</a></li>
                <li><a href="exteriores.html">Plantas de exterior</a></li>
                <li><a href="interiores.html">Plantas de interior</a></li>
                <li><a href="acuaticas.html">Plantas Acuáticas</a></li>
                <li><a href="contacto.html">Contacto</a></li>
                <li><a href="login_usuarios.html" target="_blank">Panel de Control Usuarios</a></li>
                <li><a href="login_plantas.html" target="_blank">Panel de Control de Plantas</a></li>
            </ul>
        </div>
        <div class="redes-sociales">
            <h5>Redes Sociales:</h5>
            <div class="redes">
                <a href="https://www.facebook.com"><img src="img/iconos/face.png" alt="Facebook" width="50px"></a>
                <a href="https://www.instagram.com"><img src="img/iconos/instagram.png" alt="Instagram" width="50px"></a>
                <a href="https://wa.me/1125277424" target="_blank"><img src="img/iconos/whatsapp.png" alt="WhatsApp" width="50px"></a>
            </div>
        </div>
    `;

    
            // Toggle responsive class for menu
            window.myFunction = function () {
                var x = document.getElementById('myTopnav');
                if (x.className === 'topnav') {
                    x.className += ' responsive';
                } else {
                    x.className = 'topnav';
                }
            };
     
//CAROUSEL// Para que las imágenes pasen una a continuación de la otra

document.addEventListener("DOMContentLoaded", function() {
    var prevBtn = document.getElementById("prevBtn");
    var nextBtn = document.getElementById("nextBtn");

    prevBtn.addEventListener("mousedown", function() {
      var carousel = document.getElementById("carouselExampleIndicators");
      var carouselObj = new bootstrap.Carousel(carousel);
      carouselObj.prev();
    });

    nextBtn.addEventListener("mousedown", function() {
      var carousel = document.getElementById("carouselExampleIndicators");
      var carouselObj = new bootstrap.Carousel(carousel);
      carouselObj.next();
    });
  });

    


});



// Form Validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        alert('Formulario enviado con éxito!');
        this.submit();
    }
});

function validateForm() {
    const inputs = ['nombre', 'direccion', 'area', 'mensaje'];
    for (const inputId of inputs) {
        const value = document.getElementById(inputId).value.trim();
        if (value === '') {
            alert('Por favor, complete todos los campos obligatorios.');
            return false;
        }
    }
    // Obtiene el valor del campo de email
    const email = document.getElementById('email').value.trim();

    // Verifica que el email sea válido utilizando una expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingrese un email válido.');
        return false;
    }

    // Validar el teléfono
    const telefono = document.getElementById('telefono').value.trim();

    // Verifica que el teléfono tenga al menos 9 dígitos
    if (telefono.length < 9 || isNaN(telefono)) {
        alert('Por favor, ingrese un teléfono válido con el código de área (al menos 9 dígitos).');
        return false;
    }

    // Si todo es válido, permite el envío del formulario
    return true;
}

// Enable/Disable Submit Button
const termsCheckbox = document.getElementById('politica_privacidad');
const submitBtn = document.getElementById('submitBtn');

termsCheckbox.addEventListener('change', () => {
    if (termsCheckbox.checked) {
        submitBtn.disabled = false;
        submitBtn.classList.add('enabled');
    } else {
        submitBtn.disabled = true;
        submitBtn.classList.remove('enabled');
    }
});



  