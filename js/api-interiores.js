new Vue({
    el: '#app',
    data: {
        plantas: [],
        mostrarLista: true,
    },
    created() {
        this.fetchPlantas();
    },
    methods: {
        async fetchPlantas() {
            try {
                const response = await fetch('https://pyteam2024.pythonanywhere.com/plantas');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data); // Verificar si los datos se están recibiendo correctamente
                this.plantas = data
                    .filter(planta => planta.categoria.toLowerCase() === "interior")
                    .map(planta => ({ ...planta, showFullDesc: false }));
                console.log(this.plantas); // Verificar si el filtro está funcionando correctamente
            } catch (error) {
                console.error('Error fetching plantas:', error);
                this.mostrarLista = false;
            }
        },
        toggleDescription(planta) {
            planta.showFullDesc = !planta.showFullDesc;
        },
    },
});
