import { useEffect, useState } from "react"
import Papa from "papaparse"

export default function useConfig() {
  const [config, setConfig] = useState({})

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSa_QoaUBK5PIj6CZD7iJZewvpunrDxpVoaIzfaWiLJWoRM0Wn8vSiN6SmngaUgZbCJSsonlrStVD1J/pub?output=csv&gid=297156641",
      {
        download: true,
        header: true,
        complete: (results) => {
          const obj = {}

          results.data
            .filter(row => row.clave && row.valor)
            .forEach((row) => {
              obj[row.clave] = row.valor
            })

          setConfig(obj)
        },
      }
    )
  }, [])

  return config
}