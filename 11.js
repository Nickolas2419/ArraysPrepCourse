function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let duplicado = [];
  array.forEach(elemento => {
    duplicado.push(elemento * 2);  
  });
  return duplicado;
}
module.exports = duplicarElementos;
