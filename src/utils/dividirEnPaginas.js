function dividirEnPaginas(array, cantidad) {
  const paginas = []

  for (let i = 0; i < array.length; i += cantidad) {
    paginas.push(array.slice(i, i + cantidad))
  }

  return paginas
}

export default dividirEnPaginas
