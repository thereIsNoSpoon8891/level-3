
import hero from "./hero.png"


function MainBody () {
  return (
      <div className="hero--container">
        <img className="hero" src={hero}/>
        <span className="hero--h1">Online experiences</span>
        <span className="hero--p">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</span>
      </div>
    )  
}

export default MainBody