import data from "./data"
import Pets from "./Pets"

function Friends(props){
    
    const {pets, age, name} = props
  const petElements = pets.map((pet, index) => <Pets key={index} petName={pet.name} petBreed={pet.breed}/>) 

    return(
        <div className="friend-card">

            <h3>
                Friend Name: {name}
            </h3>

            <h3>
                Age: {age}
            </h3>
            <h3>
               {petElements}
            </h3>

            

        </div>
    )
}

export default Friends