import { useState, useEffect } from 'react'
import axios from "axios"
import "./style.css"

function App() {
  const [color, setColor] = useState("")
  const [changeColor, setChangeColor] = useState(0)

   useEffect(()=>{
   console.log("effect render")
     axios.get("https://www.colr.org/json/colors/random/7")
     .then(res => setColor(res.data.colors))
     .catch(err => console.log(err))

}, [changeColor])
console.log("App rerender")

function toggleColor(){
    const pickColor = color.map(obj => obj.hex)
    const randomIndex = Math.floor(Math.random() * pickColor.length)
   setChangeColor(
    pickColor[randomIndex]
   )
   
  }


const currentColor ={
  backgroundColor: `#${changeColor}`
}

  return (
    <>
      <div style={currentColor}>
        Color changes here
      </div>

      <button onClick={toggleColor}>
        Next Color 
      </button>
    </>
  )
}

export default App
