import { useEffect, useState } from "react"

export default function useScale() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      const w = window.innerWidth

      if (w < 500) setScale(0.6)
      else if (w < 800) setScale(0.75)
      else if (w < 1200) setScale(0.9)
      else if (w < 1600) setScale(1)
      else setScale(1.1)
    }

    updateScale()
    window.addEventListener("resize", updateScale)

    return () => window.removeEventListener("resize", updateScale)
  }, [])

  return scale
}