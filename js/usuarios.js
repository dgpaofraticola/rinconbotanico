const { createApp } = Vue;

createApp({
    data() {
        return {
            usuarios: [],
            url: 'https://pyteam2024.pythonanywhere.com/usuarios',
            error: false,
            cargando: true,
            id: 0,
            usuario: "",
            clave: "",
            rol: "",
        };
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    this.cargando = false;
                })
                .catch(err => {
                    console.error(err);
                    this.error = true;
                });
        },
        eliminar(id) {
            if (this.userRole !== 'readonly') {
                const url = this.url + '/' + id;
                var options = {
                    method: 'DELETE',
                };
                fetch(url, options)
                    .then(res => res.text())
                    .then(res => {
                        alert('Registro Eliminado');
                        location.reload();
                    });
            } else {
                alert('No tienes permiso para eliminar registros.');
            }
        },
        grabar() {
            // Validación de campos
            if (!this.usuario || !this.clave || !this.rol) {
                alert('Por favor debes completar todos los campos.');
                return;
            }

            // Si todos los campos están completos, proceder con la solicitud POST
            let usuario = {
                usuario: this.usuario,
                clave: this.clave,
                rol: this.rol,
            };

            var options = {
                body: JSON.stringify(usuario),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow',
            };

            fetch(this.url, options)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al grabar el usuario.');
                    }
                    alert('Usuario grabado correctamente.');
                    window.location.href = "./usuarios.html"; // Redirigir a la página de usuarios
                })
                .catch(err => {
                    console.error(err);
                    alert('Error al grabar el usuario.'); // Mostrar mensaje de error si falla la solicitud
                });
        },



        //Enmascaramiento del campo 'clave' en el CRUD de usuarios:
        hidePassword(password) {
            // Retorna una cadena de asteriscos o puntos de la misma longitud que la clave real
            return '*'.repeat(password.length); // Puedes ajustar esto según tu necesidad (puntos, asteriscos, etc.)
        },

    },

    created() {
        this.userRole = sessionStorage.getItem('userRole');
        this.fetchData(this.url);
    },
}).mount('#app');

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
