document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){
    const xhttp =new XMLHttpRequest();


    xhttp.open('GET', 'ejercicio.json', true);
    xhttp.send();

    xhttp.onreadystatechange =function(){
        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            let  datos = JSON.parse(this.responseText);
            let res =document.querySelector('#res');
            res.innerHTML = '';

            for(let item of datos){
                res.innerHTML += `
                <tr>
                    <td>${item.apellido}</td>
                    <td>${item.nombre}</td>
                    <td>${item.semestre}</td>
                    <td>${item.paralelo}</td>
                    <td>${item.direccion}</td>
                    <td>${item.telefono}</td>
                    <td>${item.correo}</td>
                <tr>
                `
            }
        }
    }
}