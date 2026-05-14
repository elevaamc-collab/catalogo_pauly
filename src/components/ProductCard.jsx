export default function ProductCard({ p }) {
  const sinStock = !p.stock
  const exclusivo = p.exclusivo

  return (
    <div
      className={`border rounded overflow-hidden h-full flex flex-col relative
        ${sinStock ? "bg-zinc-200" : "bg-white"}
      `}
    >

      {/* SIN STOCK OVERLAY */}
      {sinStock && (
        <>
          <div className="absolute inset-0 bg-zinc-500/40 z-10" />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <span className="bg-red-600 text-white text-sm font-black px-3 py-2 rounded">
              SIN STOCK
            </span>
          </div>
        </>
      )}

      {/* IMAGEN */}
      <div className="h-[60%] flex items-center justify-center overflow-hidden relative bg-zinc-100">

        {exclusivo && (
          <span className="absolute top-1 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] px-2 py-[2px] rounded z-10">
            EXCLUSIVO EN SALÓN
          </span>
        )}

        {p.imagen ? (
          <img
            src={p.imagen}
            alt={p.producto}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-xs text-zinc-400">
            Sin imagen
          </span>
        )}
      </div>

      {/* INFO */}
      <div className="h-[40%] px-2 pt-2 pb-1 flex flex-col">

        {/* PRODUCTO */}
        <p className="font-bold text-base leading-snug line-clamp-2">
          {p.producto}
        </p>

        {/* MARCA */}
        <p className="text-sm text-zinc-500 mt-[2px]">
          {p.marca}
        </p>

        {/* 🔥 ESPACIADOR FLEX (ESTO ES LA CLAVE REAL) */}
        <div className="flex-1" />

        {/* PRECIOS (AHORA PEGADOS ABAJO) */}
        <div className="flex flex-col gap-[3px]">

          {/* MAYORISTA */}
          <div className="flex items-center justify-between bg-red-600 text-white px-2 py-[4px] rounded">
            <span className="text-sm font-bold leading-none">
              Llevando 5 o más
            </span>
            <span className="text-xl font-black leading-none">
              {p.precioMayorista}
            </span>
          </div>

          {/* MINORISTA */}
          <div className="flex items-center justify-between bg-blue-600 text-white px-2 py-[4px] rounded">
            <span className="text-sm font-bold leading-none">
              Precio por unidad
            </span>
            <span className="text-lg font-semibold leading-none">
              {p.precioMinorista}
            </span>
          </div>

        </div>

      </div>

    </div>
  )
}