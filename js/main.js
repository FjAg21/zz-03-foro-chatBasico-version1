
let d = document,
  fecha = new Date(),
  li = d.getElementById("id1")
arrayUno = [],
  dia = fecha.toLocaleString();


function datos() {



  arrayUno = [ // creo un array multidimensional.

    ["Ana", "Estamos de vacaciones, llegaremos para Navidad", dia],
    ["Juan", "El tren salió tarde.", dia],
    ["Eva", "La lluvia llego al mar.", dia],
  ] ;

  li.innerHTML = "<ul>";

  for (let i = 0; i < 3; i++ ) {

    li.innerHTML += "<li> Autor:   " +arrayUno[i][0]+ "</li>";
    li.innerHTML += "<li> Texto:   " +arrayUno[i][1]+ "</li>";
    li.innerHTML += "<li> Fecha:   " +arrayUno[i][2]+ "</li>";
    li.innerHTML += "<li> --------------------- <br></li>";


  }

  li.innerHTML += "</ul>";

}


datos() ;
