export default function IndexPage({ categorias }) {

  return (
    <div className="w-full h-full bg-white flex flex-col p-16">

      {/* TITULO */}
      <div className="mb-16">

        <p className="uppercase text-sm tracking-[6px] text-zinc-400">
          Navegación
        </p>

        <h1 className="text-7xl font-black mt-4">
          Índice
        </h1>

      </div>

      {/* LISTA */}
      <div className="flex flex-col gap-8 flex-1">

        {categorias.map((cat, index) => (

          <div
            key={cat}
            className="flex items-center text-3xl"
          >

            <span className="font-semibold">
              {cat}
            </span>

            <div className="flex-1 border-b border-dashed mx-4 mt-4" />

            <span className="font-black text-red-600">
              {index + 3}
            </span>

          </div>

        ))}

      </div>

    </div>
  )
}