export default function IntroPage() {
  return (
    <div className="w-[900px] h-[1200px] bg-white shadow-2xl p-16 flex flex-col justify-between">

      {/* TOP */}
      <div>

        <p className="uppercase text-sm tracking-[6px] text-zinc-400">
          Bienvenidos
        </p>

        <h1 className="text-6xl font-black mt-4 leading-none">
          Todo lo que necesitás,
          <br />
          en un solo lugar.
        </h1>

        <p className="text-zinc-500 text-xl mt-8 max-w-[650px] leading-relaxed">
          En Pauly trabajamos para ofrecer productos seleccionados,
          atención cercana y precios competitivos tanto para clientes
          mayoristas como minoristas.
        </p>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-8 my-10">

        {/* BLOQUE */}
        <div className="border rounded-3xl p-8">

          <p className="text-sm uppercase text-red-600 font-bold">
            Mayorista
          </p>

          <h2 className="text-3xl font-black mt-3">
            Comprá más,
            pagá menos.
          </h2>

          <p className="text-zinc-500 mt-4 leading-relaxed">
            Accedé a precios especiales llevando 5 unidades o más
            por producto.
          </p>

        </div>

        {/* BLOQUE */}
        <div className="border rounded-3xl p-8">

          <p className="text-sm uppercase text-red-600 font-bold">
            Minorista
          </p>

          <h2 className="text-3xl font-black mt-3">
            Compras simples
            y rápidas.
          </h2>

          <p className="text-zinc-500 mt-4 leading-relaxed">
            También podés comprar productos por unidad
            directamente desde nuestro local.
          </p>

        </div>

      </div>

      {/* FOOTER */}
      <div className="flex justify-between items-end border-t pt-8">

        <div>

          <p className="text-zinc-400 text-sm uppercase">
            Contacto
          </p>

          <p className="font-semibold mt-2">
            WhatsApp: +54 9 380 XXX XXXX
          </p>

          <p className="text-zinc-500 mt-1">
            Instagram: @paulydistribuidora
          </p>

        </div>

        <div className="text-right">

          <p className="text-zinc-400 text-sm uppercase">
            Categorías
          </p>

          <p className="font-semibold mt-2">
            Snacks · Bebidas · Limpieza
          </p>

        </div>

      </div>

    </div>
  )
}
