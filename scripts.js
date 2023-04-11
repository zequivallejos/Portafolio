//Funcion que me aplica el stilo a la opcion seleccionada en el menu y quita la previamente seleccionado
function seleccionar(link){
    let opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //hacemos desaparecer el menu una vez que se gfa seleccionado una opcion en el modo responsive
    let x = document.getElementById("nav");
    x.className = "";
}
//funcion que muestra el menu responsive
function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className === ""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animacion de las bnarras de habilidades
window.onscroll = function(){
    efectoHabilidades()
};

//funcion que aplica la animacion de la barra de habilidades
function efectoHabilidades(){
    let skill = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skiils.getBoundingLientRect().top;
    if (distancia_skills >=300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}