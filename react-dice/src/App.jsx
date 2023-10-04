import DiceBox from "./DiceBox"
import { useState } from 'react'

function App() {
  
  const [rolls, setRolls] = useState(1)

  const dice = [
    {
      num: 0,
      hold: false,
      id: 1
    }, {
      num: 0,
      hold: false,
      id: 2
    },{ 
      num: 0,
      hold: false,
      id: 3
    }, {
      num: 0,
      hold: false,
      id: 4
    }, {
      num: 0,
      hold: false,
      id: 5
    }]

  const [numbers, setNumbers] = useState(dice)



  function roll () {


    if(rolls <= 3){
      setRolls(prevRolls => prevRolls + 1)


    setNumbers(prevNums => {

      const numbers =[];

      prevNums.map(obj => {

        if(!obj.hold){
          const randoNum = Math.floor(Math.random() * 6) + 1;
            numbers.push({
              ...obj,
              num: randoNum
            })
        } else if (obj.hold) {
          numbers.push({
            ...obj,
           num: obj.num
          })
        }
      })
      return numbers
    })
  } else if (rolls >= 3) {
    setNumbers(dice)
    setRolls(1)
  }
}

  const holdDie = (id) => {
    setNumbers(prevNums => {
      const newNums = [];
        for(let i = 0; i < prevNums.length; i++){
          const currentNum = prevNums[i]
            if(currentNum.id === id) {
              const updatedNum = {
                ...currentNum,
                hold: !currentNum.hold
              }
              newNums.push(updatedNum)
            } else {
              newNums.push(currentNum)
            }
        }
        return newNums
    })
  }
//console.log(numbers);
  return (
    <div>
      <DiceBox 
      roll = {roll}
      numbers = {numbers}
      holdDie = {holdDie}
      />
    </div>
  )
}

export default App
