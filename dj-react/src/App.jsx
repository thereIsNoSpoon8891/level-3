import { useState } from 'react'
import Square from './Square'
import "./style.css"

function App() {
  const [colors, setColors] = useState(["black", "white", "white", "white"]) 
  

console.log(colors)

  const square = colors.map(colors => <Square backgroundColor={colors}/>)
  //  1. set backround color based on the array...
  // 2. use ternary to flip the colors

  function toggleBlackWhite (){
    
    setColors(
      colors.map(color => (color === "black" ? "white" : "black"))
    ) 
  }

  function purple(){
    const purpleArray = [...colors]
    
    purpleArray[2] = "purple"
    purpleArray[3] = "purple"

    setColors(
          purpleArray
    )
  }
  function bottomLeft(){
    const bottomLeftSquare = [...colors]

    bottomLeftSquare[2] = "blue"

    setColors(
      bottomLeftSquare
    )
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
