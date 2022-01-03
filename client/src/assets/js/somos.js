const formulario = document.getElementById('formulario');
const inputs=document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		
}
const campos = {
	nombre: false,
	email: false,
    descripcion:false,
}

function descripcions(){
	if(document.getElementById("comentarios").value==0){
		return false;
        
	}else{
		return true;
        
	}
}
const ValidarFormulario =(e)=>{
 
    switch(e.target.name) {
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo');
                document.getElementById('name').classList.remove('controls-error');
                document.getElementById('name').classList.add('controls');
                campos['nombre'] = true;
                console.log(campos['nombre']);
            }else{
                document.getElementById('name').classList.remove('controls');
                document.getElementById('name').classList.add('controls-error');
                document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo');
                campos['nombre'] = false;
                console.log(campos['nombre']);
            }
            break;
        case "email":
            if(expresiones.correo.test(e.target.value)){
                document.querySelector('#grupo__correo .formulario__input-error').classList.remove('formulario__input-error-activo');
                document.getElementById('email').classList.remove('controls-error');
                document.getElementById('email').classList.add('controls');
                campos['email'] = true;
            }else{
                document.getElementById('email').classList.remove('controls');
                document.getElementById('email').classList.add('controls-error');
                document.querySelector('#grupo__correo .formulario__input-error').classList.add('formulario__input-error-activo');
                campos['email'] = false;
            }
        }
    }

    function enviar(){
        var nombre =campos['nombre'];
        var email =campos['email'];
        var descripcion=descripcions();
        console.log(descripcion);
        if(nombre!=false&&email!=false &&descripcion!=false){
          alert('Gracias por rellenar el formulario!! ');
           
          window.location.reload();
   
        }
    }


    inputs.forEach((input) => {
        input.addEventListener('keyup',ValidarFormulario);
        input.addEventListener('blur', ValidarFormulario);
    });
    
    formulario.addEventListener('submit',(e) =>{
    e.preventDefault();
    });

    document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}








                            //Buscador de contenido


//Ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//Declarando variables
bars_search =       document.getElementById("ctn-bars-search");
cover_ctn_search =  document.getElementById("cover-ctn-search");
inputSearch =       document.getElementById("inputSearch");
box_search =        document.getElementById("box-search");


//Funcion para mostrar el buscador
function mostrar_buscador(){

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();

    if (inputSearch.value === ""){
        box_search.style.display = "none";
    }

}

//Funcion para ocultar el buscador
function ocultar_buscador(){

    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none";

}


//Creando filtrado de busqueda

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){


    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"
    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }

    }



}

