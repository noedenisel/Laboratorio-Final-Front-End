const cp_provincias = { 01: "Alava", 02: "Albacete" , 03: "Alicante", 04: "Almeria", 05: "Avila", 06: "Badajoz",
    07: "Islas Baleares", 08: "Barcelona", 09: "Burgos", 10: "Caceres", 11: "Cadiz", 12: "Castellon", 
    13: "Ciudad Real", 14: "Cordoba", 15: "La Coruña", 16: "Cuenca", 17: "Gerona", 18: "Granada", 
    19: "Guadalajara", 20: "Giupuzcoa", 21: "Huelva", 22: "Huesca", 23: "Jaen", 24:"Leon" , 25:  "Lerida", 
    26: "La Rioja", 27: "Lugo", 28: "Madrid", 29: "Malaga", 30: "Murcia", 31: "Navarra", 32: "Orense", 
    33: "Asturias", 34: "Palencia", 35:"Las Palmas", 36: "Pontevedra", 37: "Salamanca", 
    38:"Santa Cruz de Tenerife", 39: "Cantabria", 40: "Segovia", 41: "Sevilla", 42: "Soria", 43: "Tarragona", 
    44: "Teruel", 45: "Toledo", 46: "Valencia", 47: "Valladolid", 48:"Vizcaya", 49:"Zamora" , 50: "Zaragoza", 
    51: "Ceuta"};  
    function validacion(cpostal) {
        var codigopostal = document.getElementById("codigopostal").value;
        console.log(codigopostal);
        
        var provIngresada = document.getElementById("provincia").value;
        var campoProv = document.getElementById("provincia");
        var validoProv = document.getElementById("salidaprovincia");
        console.log(provIngresada);

        var formulario= document.getElementById("form");
        
        pattern = new RegExp ('^[0-9]+$');
        patternPROV= new RegExp('[A-Z]+$', 'i');
        

        if (codigopostal ==  "" || codigopostal == "  ") { 
            alert ("El campo Codigo postal no puede quedar vacio");
        } 
        else if(codigopostal.length < 5)  {
            alert ("El campo codigo postal debe tener 5 numeros");
        }
        else if (!pattern.test(codigopostal)) {
            alert ("Ingrese solo numeros en el campo Código Postal");
        } 
        else if (codigopostal == 00000 || codigopostal > 52999) {
             alert ("El Codigo Postal es inexistente");
        }
        else if (!patternPROV.test(provIngresada)) {
            alert ("Solo ingrese letras en el campo Provincia. Este campo no puede quedar vacio");
        } 
        else {

        var cpABuscar;
        if (codigopostal >= 1000 && codigopostal <= 52999) {
            cpABuscar = String(codigopostal).substring(0,2);
        }
        console.log(cpABuscar);

        var provABuscar = cp_provincias[parseInt(cpABuscar)];
        console.log(provABuscar);

        if (codigopostal.length ==5)
        { if  (provABuscar.toLowerCase() == provIngresada.toLowerCase() )
            {
            validoProv.innerHTML="El CP ingresado COINCIDE con la provincia ingresada  ";
            validoProv.style.color="green";
        } else       
            {
            validoProv.innerHTML=("El CP igresado NO coincide con la provincia ingresada. La provincia correspondiente al CP ingresado es "+provABuscar+" "); 
            validoProv.style.color="red";
        } 
    }
}
}
    
    rango= document.getElementById(rango).value
    function alertavaloracion () {
        alert ("Has valorado con "+rango.value+" puntos ");
    }
    
 
   iban= document.getElementById("iban").value
   entidad= document.getElementById("entidad").value
   sucursal= document.getElementById("sucursal").value
   dc= document.getElementById("dc").value
   cuenta= document.getElementById("cuenta").value
    
    function alertacuenta () {
         alert ("Le informamos que su cuenta bancaria es: ES "+iban.value+" - "+entidad.value+" - "+sucursal.value+" - "+dc.value+" - "+cuenta.value+ " ");
    }


    function alertaDiaDeSemana(){ 
    var d=new Date(document.getElementById("fecha").value);
        d.setDate(d.getDate() );
    var diadesemana=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
    var n= diadesemana[d.getDay()];
    document.getElementById("fecha").innerHTML=n;
        alert("La fecha seleccionada en el elemento de fecha es un "+ n);   
    } 