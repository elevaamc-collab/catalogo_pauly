import { useEffect, useState } from "react"
import Papa from "papaparse"

export default function useProductos() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSa_QoaUBK5PIj6CZD7iJZewvpunrDxpVoaIzfaWiLJWoRM0Wn8vSiN6SmngaUgZbCJSsonlrStVD1J/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          const data = results.data.map((p) => ({
            ...p,
            exclusivo: p.exclusivo === "TRUE",
            stock: p.stock === "TRUE",
          }))

          setProductos(data)
        },
      }
    )
  }, [])

  return productos
}