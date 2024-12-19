function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  if (array.length === 0 || array.length === 1){
    return true;
  }
  const PrimerElemento = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== PrimerElemento) {
      return false;
    }
  }
  return true;
}

module.exports = todosIguales;
