import Card from "./Card"
import data from "./data"
import "./style.css"
function App() {

  const cardElements = data.map(item => <Card place={item.place} price={item.price} timeToGo={item.timeToGo} />)
  return (
    <div>
      {cardElements}
    </div>
  )
}

export default App
