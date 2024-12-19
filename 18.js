function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  
  const suma = resultadosTest.reduce(function(acumulador, elemento){
    return acumulador + elemento;
  },0)
  return resultadosTest.length > 0 ? suma / resultadosTest.length : 0;
}

module.exports = promedioResultadosTest;
