const { createApp } = Vue;

createApp({
    data() {
        return {
            plantas: [],
            url: 'https://pyteam2024.pythonanywhere.com/plantas',
            error: false,
            cargando: true,
            /* Atributos para guardar los valores del formulario */
            id: 0,
            nombre: "",
            categoria: "",
            ubicacion: "",
            sustrato: "",
            riego: "",
            floracion: "",
            tamano: "",
            descripcion: "",
            imagen: "",
            /* Agregar atributo para el rol del usuario */
            userRole: ''
        };
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.plantas = data;
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
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        alert('Registro Eliminado');
                        this.fetchData(this.url); // actualizar la lista después de eliminar
                    });
            } else {
                alert('No tienes permiso para eliminar registros.');
            }
        },
        grabar() {
            // Validación de campos
            if (!this.nombre || !this.categoria || !this.ubicacion || !this.sustrato || !this.riego || !this.floracion || !this.tamano || !this.descripcion || !this.imagen) {
                alert('Por favor completa todos los campos.');
                return;
            }

            // Si todos los campos están completos, proceder con la solicitud POST
            let planta = {
                nombre: this.nombre,
                categoria: this.categoria,
                ubicacion: this.ubicacion,
                sustrato: this.sustrato,
                riego: this.riego,
                floracion: this.floracion,
                tamano: this.tamano,
                descripcion: this.descripcion,
                imagen: this.imagen,
            };

            var options = {
                body: JSON.stringify(planta),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow',
            };

            fetch(this.url, options)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al grabar la planta.');
                    }
                    alert('Planta grabada correctamente.');
                    this.fetchData(this.url); // actualizar la lista después de grabar
                    this.resetForm(); // limpiar el formulario después de grabar
                })
                .catch(err => {
                    console.error(err);
                    alert('Error al grabar la planta.'); // Mostrar mensaje de error si falla la solicitud
                });
        },
        resetForm() {
            this.nombre = '';
            this.categoria = '';
            this.ubicacion = '';
            this.sustrato = '';
            this.riego = '';
            this.floracion = '';
            this.tamano = '';
            this.descripcion = '';
            this.imagen = '';
        },
    },
    created() {
        this.userRole = sessionStorage.getItem('userRole');
        this.fetchData(this.url);
    },
}).mount('#app');
