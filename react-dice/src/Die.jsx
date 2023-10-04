





const Die = props => {
 
const {number, holdDie, id} = props;


// console.log(number);
return (

<div 
className="die"
onClick={()=>holdDie(id)}
>

{number}

</div>
)
}

export default Die