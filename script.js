function calcularEdad() {
  var fechaNacimiento = document.getElementById('fechaNacimiento').value;
  var horaNacimiento = document.getElementById('horaNacimiento').value;

  var fechaNac = new Date(fechaNacimiento + 'T' + horaNacimiento);
  var ahora = new Date();
  
  var edad = ahora.getFullYear() - fechaNac.getFullYear();
  var mes = ahora.getMonth() - fechaNac.getMonth();
  
  if (mes < 0 || (mes === 0 && ahora.getDate() < fechaNac.getDate())) {
    edad--;
  }
  
  // Cálculo de días y horas vividas
  var diff = ahora - fechaNac;
  var diasVividos = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  var horasVividas = Math.floor(diff / (1000 * 60 * 60) % 24);

var resultado = "Tienes " + edad + " años, " + mes + " meses, " + diasVividos + " días y " + horasVividas + " horas vividas.";

document.getElementById('resultado').innerText = resultado;
}
 calcularEdad