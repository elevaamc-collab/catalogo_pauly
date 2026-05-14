const productos = Array.from({ length: 30 }).map((_, i) => ({
  id: i + 1,
  producto: `Producto ${i + 1}`,
  marca: "Marca Ejemplo",
  categoria: i < 15 ? "Snacks" : "Bebidas",
  precioMayorista: `$${(1000 + i * 100).toLocaleString()}`,
  precioMinorista: `$${(1500 + i * 120).toLocaleString()}`,
  exclusivo: i % 3 === 0,
  stock: i % 5 !== 0,
}))

export default productos
