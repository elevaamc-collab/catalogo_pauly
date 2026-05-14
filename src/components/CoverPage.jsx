export default function CoverPage({ config }) {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden">

      {/* fondo suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-zinc-50 to-red-50" />

      {/* decoraciones */}
      <div className="absolute top-0 left-0 w-full h-28 bg-red-600" />
      <div className="absolute w-[500px] h-[500px] bg-red-200 rounded-full -top-52 -right-52 opacity-60" />
      <div className="absolute w-[400px] h-[400px] bg-zinc-200 rounded-full -bottom-52 -left-52 opacity-40" />

      {/* contenido */}
      <div className="z-10 flex flex-col items-center text-center">

        {/* badge */}
        <div className="mb-6 bg-white text-red-600 px-4 py-1 rounded-full text-xs font-bold tracking-widest shadow-sm">
          DISTRIBUIDORA MAYORISTA
        </div>

        <h1 className="text-7xl font-black text-red-600 tracking-tight">
          PAULY
        </h1>

        <div className="w-24 h-[4px] bg-red-600 mt-6 mb-6 rounded-full" />

        {/* dinámico */}
        <p className="text-zinc-700 text-xl font-semibold">
          {config?.titulo}
        </p>

        <p className="text-zinc-500 text-sm mt-3">
          Precios especiales para compras por volumen
        </p>

        {/* vigencia */}
        <div className="mt-10 px-6 py-2 bg-zinc-900 text-white text-xs tracking-widest rounded-full">
          Vigencia: {config?.vigencia}
        </div>

        {/* edición */}
        <div className="mt-4 text-xs text-zinc-400">
          {config?.edicion}
        </div>

      </div>

    </div>
  )
}