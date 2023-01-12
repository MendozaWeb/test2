//const formulario = document.querySelector("#formulario");

//crear el evento
//formulario.addEventListener( "submit", validarFormulario )


//mis funciones
/*function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const edad = document.querySelector("#edad").value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `Hola ${nombre} tienes la edad de ${edad}`
    formulario.reset();
}*/

//========INIDEEPLINk===========o

// A function that gets the value of the first input and assigns it to the second


formDeep.addEventListener( "submit",  validarformdeep) 

function validarformdeep(d) {
    d.preventDefault();
    const reg1 =(/\s+/g, '')
    let proces



    
    let cadena3;

    const cadenaF = document.querySelector('#cadena').value;
    var cadenax = cadenaF.slice(71, -8);


    const idDeep = document.querySelector("#idDeep").value
    const namedeep = document.querySelector("#nameDeep").value
    proces = namedeep.split(" ").join("")
   // const namespa = namedeep.replace(reg1);
    const tipodeep = document.querySelector("#tipoDeep").value
    const idhijo = document.querySelector("#idHijo").value
    const idpadre = document.querySelector("#idPadre").value

    const respuestadeep = document.getElementById("respuestadeep");
    const idcadena = document.getElementById("idcadena");
   /* var cade = namedeep;
    cade = namedeep.replace(/./g);*/

    


    idcadena.textContent = `${cadenax}`;
    respuestadeep.textContent = `\nCategory name: ${namedeep} \nID: ${idDeep} \nDL: https://${tipodeep}/categories?name=${proces}&id=${idhijo}&landingtonewPLP=true&defaultSelectParentId=${idpadre}&defaultSortBy=Recomendados`
    idcadena.reset();
}
//========END DEEPLINk===========o

//numero entre 1 y 6
let dado = Number((Math.random() * 6).toFixed(0));
console.log(dado)



//========STRAR NOMENCLATURE===========o
/*
const formNome = document.querySelector("#formNome");
formDeep.addEventListener( "submit",  validarformNome) 

function validarformNome(n) {
    n.preventDefault();
    let proceNome

    proceNome = namenome.split(" ").join("_")
    const tipoBanner = document.querySelector('#tipoBanner').value
    const tipoMod = document.querySelector('#tipoMod').value
    const tipoSema = document.querySelector('#tipoSema').value
    const namenome = document.querySelector('').value
    const namenome = document.querySelector('').value
    const namenome = document.querySelector('').value
    const namenome = document.querySelector('').value


}*/
