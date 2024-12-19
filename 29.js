function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0 || numeros.length === 1) {
    return null;
  }
  numeros.sort((a, b) => a - b);
  const sumaActual = numeros.reduce((acc, num) => acc + num, 0);
  const primero = numeros[0];
  const ultimo = numeros[numeros.length - 1];
  const cantidadEsperada = ultimo - primero + 1;
  const sumaEsperada = (primero + ultimo) * cantidadEsperada / 2;
  const numeroFaltante = sumaEsperada - sumaActual;
  return numeroFaltante === 0 ? null : numeroFaltante;
}

module.exports = encontrarNumeroFaltante;