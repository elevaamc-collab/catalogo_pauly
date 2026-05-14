function agruparPorCategoria(productos) {

  const categorias = {}

  productos.forEach((producto) => {

    if (!categorias[producto.categoria]) {
      categorias[producto.categoria] = []
    }

    categorias[producto.categoria].push(producto)

  })

  return categorias
}

export default agruparPorCategoria
