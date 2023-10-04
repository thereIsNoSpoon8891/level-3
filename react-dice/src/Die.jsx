





const Die = props => {
 
const {number, holdDie, id, hold} = props;


// console.log(number);
return (

<div 
className={ hold ? "selected-die" : "die"}
onClick={()=>holdDie(id)}
>
    {number}
</div>



)
}

export default Die