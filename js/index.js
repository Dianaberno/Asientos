var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}
var numAsientos;
var N = 32; 
   var asientos = [];
   for (var i = 0; i < N; i++) {
      asientos[i] = undefined;
   }
function redirect(event){
  nroAsientos = event.target.textContent;
    document.getElementById("mostrar").innerHTML=(event.target.textContent);
     (event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';
}
function reservar (){
  var asiento = parseInt(nroAsientos);
var name=document.getElementById("Nombre").value;
var last_name=document.getElementById("Apellido").value;
var dni=document.getElementById("DNI").value;
var res=document.getElementById("mostrar").innerHTML=name + "<br>"+last_name+"<br>"+dni;
 asientos[nroAsientos - 1] = {
               nombre : name,
               dni: dni,
               apellido:last_name
            };

}

function cancelar(){
  var asiento=parseInt(nroAsientos);
  if (nroAsientos >0 && nroAsientos<= N) {
            asientos[nroAsientos - 1] = undefined;
         }


}



