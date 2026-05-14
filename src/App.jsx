import { useEffect, useState, useMemo } from "react"
import Papa from "papaparse"
import useConfig from "./hooks/useConfig"
import dividirEnPaginas from "./utils/dividirEnPaginas"
import agruparPorCategoria from "./utils/agruparPorCategoria"
import useProductos from "./hooks/useProductos"
import CoverPage from "./components/CoverPage"
import IndexPage from "./components/IndexPage"
import ProductPage from "./components/ProductPage"
import ClosingPage from "./components/ClosingPage"
import useScale from "./hooks/useScale"
import HTMLFlipBook from "react-pageflip"

export default function App() {
  const productos = useProductos()
  const config = useConfig()
  const scale = useScale()

  // =========================
  // PRODUCTOS
  // =========================
  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSa_QoaUBK5PIj6CZD7iJZewvpunrDxpVoaIzfaWiLJWoRM0Wn8vSiN6SmngaUgZbCJSsonlrStVD1J/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          const productosFormateados = results.data.map((p) => ({
            ...p,
            exclusivo: p.exclusivo === "TRUE",
            stock: p.stock === "TRUE",
          }))

          setProductos(productosFormateados)
        },
      }
    )
  }, [])

  // =========================
  // CONFIG
  // =========================
  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSa_QoaUBK5PIj6CZD7iJZewvpunrDxpVoaIzfaWiLJWoRM0Wn8vSiN6SmngaUgZbCJSsonlrStVD1J/pub?output=csv&gid=297156641",
      {
        download: true,
        header: true,
        complete: (results) => {
          const obj = {}

          results.data.forEach((row) => {
            if (row.clave) obj[row.clave] = row.valor
          })

          setConfig(obj)
        },
      }
    )
  }, [])

  // =========================
  // READY STATE (CLAVE)
  // =========================
  const ready = productos.length > 0 && Object.keys(config).length > 0

  // =========================
  // CATEGORÍAS → PÁGINAS (MEMOIZADO)
  // =========================
  const paginas = useMemo(() => {
    const categoriasAgrupadas = agruparPorCategoria(productos)

    return Object.entries(categoriasAgrupadas).flatMap(
      ([nombre, productosCategoria]) => {
        const pages = dividirEnPaginas(productosCategoria, 4)

        return pages.map((pagina) => ({
          categoria: nombre,
          productos: pagina,
        }))
      }
    )
  }, [productos])

  // =========================
  // LOADING SAFE
  // =========================
  if (!ready) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-zinc-300">
        <p className="text-zinc-600">Cargando catálogo...</p>
      </div>
    )
  }

  // =========================
  // RENDER
  // =========================
  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-300 py-10 overflow-hidden">

      <div className="relative">

        <div className="absolute w-[520px] h-[720px] bg-black/10 blur-3xl rounded-xl scale-110" />

        <div
          className="relative"
          style={{
            transform: `scale(${scale * 0.9})`,
            transformOrigin: "center",
          }}
        >

          <HTMLFlipBook
            key={productos.length}
            width={600}
            height={850}
            size="fixed"
            showCover={true}
            startPage={0}
            usePortrait={false}
            drawShadow={false}
            mobileScrollSupport={true}
          >

            {/* PORTADA */}
            <div className="w-full h-full">
              <CoverPage config={config} />
            </div>

            {/* ÍNDICE */}
            <div className="w-full h-full">
              <IndexPage
                categorias={Object.keys(agruparPorCategoria(productos))}
                config={config}
              />
            </div>

            {/* PRODUCTOS */}
            {paginas.map((p, i) => (
              <div key={i} className="w-full h-full">
                <ProductPage
                  productos={p.productos}
                  categoria={p.categoria}
                  pageNumber={i + 1}
                  config={config}
                />
              </div>
            ))}

            {/* BLANCA */}
            <div className="w-full h-full bg-white" />

            {/* CIERRE */}
            <div className="w-full h-full">
              <ClosingPage config={config} />
            </div>

          </HTMLFlipBook>

        </div>
      </div>

    </div>
  )
}