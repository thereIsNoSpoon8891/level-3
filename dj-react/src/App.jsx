import { useState, useEffect } from 'react'
import Square from './Square'
import "./style.css"
import bang from './sounds/9mm.mp3'
import blaster from './sounds/blaster.mp3'
import explode from './sounds/explosion.mp3'

function App() {

  const [colors, setColors] = useState(["black", "white", "white", "white"]) 
  const [playBang, setPlayBang] = useState(false)

// console.log(colors)
useEffect(() => {// one of the greats... with useEffect() hook
  if(playBang){
    const audio = new Audio(bang)
    audio.play()

    setTimeout(() => {
      setPlayBang(false)
    }, 1000)
  }
}, [playBang])

const playSound = () => {
  setPlayBang(true)
}

const playBlaster = () => {// one of the greats without useEffect
  const audio = new Audio(blaster)
  audio.play()
}

const boom = () => {
  const audio = new Audio(explode)
  audio.play()
}

  const square = colors.map(colors => <Square backgroundColor={colors}/>)
  //  1. set backround color based on the array...
  // 2. use ternary to flip the colors

  function toggleBlackWhite (){
    
    setColors(
      colors.map(color => (color === "black" ? "white" : "black"))
    ) 
    playSound()
  }

  function purple(){
    const purpleArray = [...colors]
    
    purpleArray[2] = "purple"
    purpleArray[3] = "purple"

    setColors(
          purpleArray
    )
    playBlaster()
  }
  function bottomLeft(){
    const bottomLeftSquare = [...colors]

    bottomLeftSquare[2] = "blue"

    setColors(
      bottomLeftSquare
    )
    boom()
  }

  function bottomRight(){
    const bottomRightSquare = [...colors]

    bottomRightSquare[3] = "Blue"

    setColors(
      bottomRightSquare
    )
  }

  function tL (){
    const topLeft = [...colors]

    topLeft[0] = "red"

    setColors(
      topLeft
    )
  }

  function tR (){
    const topRight = [...colors]

    topRight[1] = "red"

    setColors(
      topRight
    )
  }

  function bL (){
    const bottomLeft = [...colors]

    bottomLeft[2] = "red"

    setColors(
      bottomLeft
    )
  }

  function bR (){
    const bottomRight = [...colors]

    bottomRight[3] = "red"

    setColors(
     bottomRight
    )
  }

  return (
   <div>
   <div  className="square-container">
      {square}
    </div>
      <div className='button-container'>

        <button onClick={toggleBlackWhite} className='button-1'>
            Small Time DJ
        </button>

        <button onClick={purple} >
            Party DJ
        </button>

        <button onClick={bottomLeft}>
            Left Blue
        </button>

        <button onClick={bottomRight}>
          Right Blue
        </button>

        <button onClick={tL}>
            Top Left
        </button>

        <button onClick={tR}>
            Top right
        </button>
          
        <button onClick={bL}>
            Bottom Left
        </button>

        <button onClick={bR}>
            Bottom Right
        </button>
      </div>
    </div>
  )
}

export default App
