import Friends from "./Friends"
import data from "./data"
import Pets from "./Pets"

function FriendList(){
    const friendElements = data.map(friend => <Friends name={friend.name} age={friend.age} pets={friend.pets}/>)
    
    
    return(
        <div>
            {friendElements}
            
        </div>
    )
}

export default FriendList