var nombre=document.getElementsByClassName("nombre");
var edad=document.getElementsByClassName("edad");
var mail=document.getElementsByClassName("mail");
var mail=document.getElementsByClassName("mail");
var vivienda=document.getElementsByClassName("vivienda");
var error=document.getElementById("error");
error.style.color="red";

function enviarformulario(){
    console.log("enviando formulario...");
    var mensajeserror=[];
    if(nombre.value === null || nombre.value === ""){
        mensajeserror.push("Ingresa tu nombre");
    }
    if(edad.value === null || edad.value === ""){
        mensajeserror.push("Ingresa tu edad");
    }
    if(mail.value === null || mail.value === ""){
        mensajeserror.push("Ingresa tu mail");
    }
    if(vivienda.value === null || vivienda.value === ""){
        mensajeserror.push("Ingresa tu vivienda");
    }
    error.innerHTML=mensajeserror.join(",");
return false;
}