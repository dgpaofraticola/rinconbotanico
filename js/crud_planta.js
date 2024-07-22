url = "https://pyteam2024.pythonanywhere.com/plantas"
fetch(url)
    .then(response => response.json())
    .then(
        data => {
            console.log(data)
            cad = ``
            for (item of data) {
                cad = cad + `
                <tr class="">
                    <td scope="row">${item.id}</td>
                    <td>${item.nombre}</td>
                    <td>${item.categoria}</td>
                    <td>${item.ubicacion}</td>
                    <td>${item.sustrato}</td>
                    <td>${item.riego}</td>
                    <td>${item.floracion}</td>
                    <td>${item.tamano}</td>
                    <td>${item.descripcion}</td>
                    <td>
                        <img width="100"  src=${item.imagen}  alt=${item.nombre}>
                    </td>
                    <td>
                        <a href="" class="btn btn-primary">Editar</a>
                        <a href="" class="btn btn-primary">Borrar</a>
                    </td>        
                
                </tr>
           `
            }

            console.log(cad)
            document.querySelector("tbody").innerHTML=cad
        }
    )
    .catch(error => {
        console.log("Error:" + error)
        this.error = true
    });
//Faltan acciones y eliminar
