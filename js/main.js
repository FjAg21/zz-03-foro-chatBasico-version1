

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

  for (let i = 0; i < 3; i++ ) {

    mensasje = d.getElementById("th1").innerHTML += arrayUno[i][0]+ "<br><br>";

    mensasje = d.getElementById("th2").innerHTML += arrayUno[i][1]+ "<br><br>";

    mensasje = d.getElementById("th3").innerHTML += arrayUno[i][2]+ "<br><br>";
  }

}



function addPost() {

  let user = document.getElementById("user").value,
    texto = document.getElementById("text").value,
    dia = fecha.toLocaleString();

  arrayUno.push( [user, texto, dia] ); // incorporo al array un unevo post.

  d.getElementById("th1").innerHTML += user+ "<br><br>";
  d.getElementById("th2").innerHTML += texto+ "<br><br>";
  d.getElementById("th3").innerHTML += dia+ "<br><br>";


  document.getElementById("user").value = "";
  document.getElementById("text").value = "";

  console.log(arrayUno);

}


datos() ;
d.getElementById("post").addEventListener("click", addPost);
