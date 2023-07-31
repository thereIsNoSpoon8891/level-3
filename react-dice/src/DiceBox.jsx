import { useState } from 'react'
import "./style.css"

function DiceBox (){
    
    const [numbers, setNumbers] = useState([1, 2, 5, 6, 3])


    function roll (){
        
        setNumbers(oldNumbers => oldNumbers.map(number => number = Math.floor(Math.random() * 6) + 1))
        
        return numbers
    }
        let [a, b, c, d, e] = numbers
    return(
        <div className='dice-box'>
            <div>
                <button className='roll-dice' onClick={roll}>
                    ROLL DICE
                </button>
            </div>

            <div>
                <div>
                    {a}
                </div>
            </div>

            <div>
                <div>
                    {b}
                </div>
            </div>

            <div>
                <div>
                    {c}
                </div>
            </div>

            <div>
                <div>
                    {d}
                </div>
            </div>

            <div>
                <div>
                    {e}
                </div>
            </div>

        </div>
    )
}

export default DiceBox