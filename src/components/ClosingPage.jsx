export default function ClosingPage({ config }) {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-center items-center p-16 text-center">

      <h2 className="text-6xl font-black text-red-600">
        PAULY
      </h2>

      <p className="text-xl text-zinc-600 mt-6">
        Distribuidora mayorista y minorista
      </p>

      <div className="mt-10 text-sm text-zinc-500 max-w-md">
        {config?.descripcion || "Gracias por confiar en nosotros. Trabajamos para ofrecerte los mejores precios en productos de consumo masivo."}
      </div>

      <div className="mt-10 text-xs text-zinc-400">
        Vigencia: {config?.vigencia}
      </div>

    </div>
  )
}