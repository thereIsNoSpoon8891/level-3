import data from "./data"

function Pets(props){
    const {petBreed, petName} = props
  
    return(
        <div className="pet-container">
           <h3>
             Current Pets: <br/> Name: {petName} <br/>Breed: {petBreed}
           </h3>
        </div>
    )
}

export default Pets