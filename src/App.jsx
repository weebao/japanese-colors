import { useState } from 'react'
import colorList from './assets/colors.json'
import { ColorCard } from './components/ColorCard'
import './App.css'

function App() {
  const [textQuery, setTextQuery] = useState("")
  const [hexQuery, setHexQuery] = useState("")
  const colorFilter = (data) => {
    if (textQuery.length > 0) {
      let greyMatched = false
      if (textQuery.toLowerCase().includes("grey")) {
        greyMatched = data.eng.toLowerCase().includes("gray")
      }
      const textMatched = greyMatched || data.eng.toLowerCase().includes(textQuery.toLowerCase()) || data.romaji.toLowerCase().includes(textQuery.toLowerCase()) || data.kanji.toLowerCase().includes(textQuery.toLowerCase())
      const hexMatched = data.color.toLowerCase().includes(hexQuery.toLowerCase())
      return hexQuery.length > 0 ? textMatched && hexMatched : textMatched
    } else if (hexQuery.length > 0) {
      return data.color.toLowerCase().includes(hexQuery.toLowerCase())
    } else {
      return true
    }
  }

  return (
    <>
      <h1 className="title">
        Japanese colors
      </h1>
      <p className="description">
        Below are 456 known traditional Japanese colors. In Japanese, the word "Nezu (鼠)" meaning "mouse" is used in some color names to indicate gray. There is also the term "Hai-iro (灰色)" that directly translates to "gray color", but it is not commonly used since the word "hai" also means "ash" which reminds people of death.
      </p>
      <div className="search">
        <input type="search" className="name-search" placeholder="Search for a color by name" onChange={(e) => setTextQuery(e.target.value.trim())} />
        <input type="search" className="hex-search" placeholder="Hex code" onChange={(e) => setHexQuery(e.target.value.trim())} />
      </div>
      <div className="color-grid">
        {colorList.filter(colorFilter).map((data) => (
          <ColorCard colorData={data} />
        ))}
      </div>
    </>
  )
}

export default App
