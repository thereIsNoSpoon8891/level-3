import Die from './Die'
import "./style.css"

function DiceBox (props) {// review unified state lesson!
    
const {roll, numbers, holdDie} = props;


const dice = numbers.map(obj => {

return <Die 
holdDie = {holdDie} 
number = {obj.num} 
hold = {obj.hold}
key = {obj.id}
id = {obj.id}
/>
})

    return(
        <div className='dice-box'>
            <div>
                <button className='roll-dice' onClick={roll}>
                    ROLL DICE
                </button>

            </div>
        {dice}
        </div>
    )
}

export default DiceBox