import Card from "./card.png"
import CardData from "./card-data.png"

function ViewCard (){
    return(
        <div className="view-card">
            <img className="view-card--image" src={Card}/>
            <img className="view-card--data" src={CardData}/>
        </div>
    )
}

export default ViewCard