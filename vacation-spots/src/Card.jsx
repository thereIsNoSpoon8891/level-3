
function Card (props) {
    
    let moneyBadge;
    let season;

    if(props.price < 500){
        moneyBadge = "$"
    }else if(props.price > 500 && props.price < 1000){
        moneyBadge = "$$"
    }else if(props.price > 1000){
        moneyBadge = "$$$"
    }
    
    if (props.timeToGo === "Fall"){
        season = "fall"
    } else if(props.timeToGo === "Summer"){
        season = "summer"
    } else if (props.timeToGo === "Winter"){
        season = "winter"
    } else if (props.timeToGo === "Spring"){
        season = "spring"
    }
    
    return(
        <div className="card">
            <div className={season}>

            <h1>
                Location: {props.place}
            </h1>
            <h3>
                Price: ${props.price}
            </h3>
            <p>
                When to visit: {props.timeToGo}
            </p>

            <div className="money">
                {moneyBadge}
            </div>

            </div>
        </div>
    )
}

export default Card