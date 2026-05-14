import ProductCard from "./ProductCard"

export default function ProductPage({
  productos,
  categoria,
  pageNumber,
  config
}) {
  return (
    <div className="w-full h-full bg-white flex flex-col">

      {/* CONTENEDOR */}
      <div className="flex flex-col flex-1 px-6">

        {/* HEADER */}
        <div className="h-[15%] flex items-center justify-between border-b">

          <div className="text-xl font-black text-red-600">
            PAULY
          </div>

          <div className="text-lg font-bold uppercase text-zinc-700">
            {categoria}
          </div>

        </div>

        {/* GRID */}
        <div className="h-[80%] grid grid-cols-2 grid-rows-2 gap-4 py-4">

          {productos.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}

        </div>

        {/* FOOTER */}
        <div className="h-[5%] flex items-center justify-center border-t text-xs text-zinc-500 relative">

          {/* VIGENCIA */}
          <span className="absolute left-2">
            Vigencia: {config?.vigencia}
          </span>

          {/* PÁGINA */}
          <span>
            Página {pageNumber}
          </span>

        </div>

      </div>

    </div>
  )
}