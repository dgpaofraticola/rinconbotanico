console.log(location.search); // Lee los argumentos pasados a este formulario
var id = location.search.substr(4); // producto_update.html?id=1
console.log(id);

const { createApp } = Vue;

createApp({
    data() {
        return {
            id: 0,
            usuario: "",
            clave: "",
            rol: "",
            url: 'https://pyteam2024.pythonanywhere.com/usuarios/' + id,
        };
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.id = data.id;
                    this.usuario = data.usuario;
                    this.clave = data.clave;
                    this.rol = data.rol;
                })
                .catch(err => {
                    console.error(err);
                    this.error = true;
                });
        },
        modificar() {
            // Validación de campos
            if (!this.usuario || !this.clave || !this.rol) {
                alert('Por favor completa todos los campos.');
                return;
            }

            // Si todos los campos están completos, proceder con la solicitud PUT
            let usuario = {
                usuario: this.usuario,
                clave: this.clave,
                rol: this.rol,
            };

            var options = {
                body: JSON.stringify(usuario),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow',
            };

            fetch(this.url, options)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al modificar el usuario.');
                    }
                    alert('Usuario modificado correctamente.');
                    window.location.href = "./usuarios.html"; // Redirigir a la página de usuarios
                })
                .catch(err => {
                    console.error(err);
                    alert('Error al modificar el usuario.'); // Mostrar mensaje de error si falla la solicitud
                });
        },
    },
    created() {
        this.fetchData(this.url);
    },
}).mount('#app');
