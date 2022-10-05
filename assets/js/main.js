console.log("Entro al main.js");
const base_url_api = "http://ucamp.alumnos.dev4humans.com.mx";
const tblUsuarios = document.getElementById("tblUsuarios");

function cargarUsuarios() {
    fetch(base_url_api + "/Main/alumnos",
        { method: "GET" })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            tblUsuarios.innerHTML = "";
            for (const usuario of result.data) {
                let tr = `<tr>
                <td>${usuario.id}</td>
                <td>${usuario.nombre}</td>
                <td>${usuario.paterno}</td>
                <td>${usuario.materno}</td>
                <td>${usuario.nombre}</td>
                </tr>`;
                tblUsuarios.innerHTML += tr;
            }

        })
        .catch(error => {
            console.log("Error detectado!");
        })
}


function agregarUsuario() {
    console.log("Entro a agregarUsuario");
}


cargarUsuarios();