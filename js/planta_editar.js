console.log(location.search)     // lee los argumentos pasados a este formulario
var id = location.search.substr(4)  // producto_update.html?id=1
console.log(id)
const { createApp } = Vue
createApp({
    data() {
        return {
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
            url: 'https://pyteam2024.pythonanywhere.com/plantas/' + id,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id = data.id
                    this.nombre = data.nombre;
                    this.categoria = data.categoria,
                        this.ubicacion = data.ubicacion,
                        this.sustrato = data.sustrato,
                        this.riego = data.riego,
                        this.floracion = data.floracion,
                        this.tamano = data.tamano,
                        this.descripcion = data.descripcion,
                        this.imagen = data.imagen
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        modificar() {
            // Validación de campos
            if (!this.nombre || !this.categoria || !this.ubicacion || !this.sustrato || !this.riego || !this.floracion || !this.tamano || !this.descripcion || !this.imagen) {
                alert('Por favor completa todos los campos.');
                return;
            }

            // Si todos los campos están completos, proceder con la solicitud PUT            
            let planta = {
                nombre: this.nombre,
                categoria: this.categoria,
                ubicacion: this.ubicacion,
                sustrato: this.sustrato,
                riego: this.riego,
                floracion: this.floracion,
                tamano: this.tamano,
                descripcion: this.descripcion,
                imagen: this.imagen
            }
            var options = {
                body: JSON.stringify(planta),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./plantas.html"; // navega a productos.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')