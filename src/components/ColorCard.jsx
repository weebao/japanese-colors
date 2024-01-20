import { useState } from 'react'

export const ColorCard = ({ colorData }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(colorData.color.toUpperCase())
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div title={`${colorData.eng} - ${colorData.kanji}`} className="color" onClick={handleCopy}>
      <div className="color-background" style={{ backgroundColor: colorData.color }}></div>
      <span className="kanji">{colorData.kanji}</span>
      <span className="romaji">{colorData.romaji}</span>
      <span className="eng">{colorData.eng}</span>
      <span className="hex">{colorData.color}</span>
      <span className="copy">
        {copied ? "Copied to clipboard ✓" : "Click to copy"}
      </span>
    </div>
  )
}