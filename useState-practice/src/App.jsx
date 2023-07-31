import { useState } from 'react'


function App() {
 ///////////////////////////////////////////////////////////////////////////////////////////////
  // 1. Pass in a new color of your choosing in place of the old one. 
   // Hint: we don’t care what the previous color was.

   // Toggle between the colors pink and blue. If the current color is pink, 
   // we want to set it to blue. If it’s currently blue, set it back to pink.
  //  const [color, setColor] = useState("pink")
   
  //  function change (){
  //   setColor(prevState => {
  //     if (prevState === "pink"){
  //       setColor("blue")
  //     } else if(prevState === "blue"){
  //       setColor("pink")
  //     }
  //   })
  //  }
  // ternary: setColor(prevState => prevState === "pink" ? "blue" : "pink")

////////////////////////////////////////////////////////////////////////////////////////////

// 3. Add a new person object to the following people array in state. 
// You can hard-code a new object but it must be a person object with firstName and lastName properties.
// success, then mapped the array of objects and rendered them in an h1 ;-)
// const [people, setPeople] = useState([
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}
// ])

// function change(){
//   setPeople(prev => [...prev, {firstName: "snake", lastName:"cobra"}])
// }
//   const elements = people.map(person => (<h1>{person.firstName} {person.lastName}</h1>))
  //  <button onClick={change}>click me</button>
 // {elements}
 ///////////////////////////////////////////////////////////////////////////////////////////////////
 // .4 Change the following state-setting functions to use an implicit return
 
//  const [colors, setColors] = useState(["pink", "blue"])

//  function change (){
// setColors(prevColors => [...prevColors, "green"])
//  }

// const elements = colors.map(color=> (<h1> {color}</h1>))

//  const [countObject, setCountObject] = setState({
// 	count: 0
// })

// setCountObject(prevState=> ({count: prevState.count + 1}))

////////////////////////////////////////////////////////////////////////////
// 5. Update the following state to add an additional property age and set the value to 30,
// ensuring that the other properties are not overwritten.

const [person, setPerson] = useState({
  firstName: "John",
  lastName: "Smith"
})
function change(){

  setPerson(obj => ({...obj, age: 30}))
}
////////////////////////////////////////
// 6. What’s wrong with the following state update?
const [colors, setColors] = useState(["pink", "blue"])

setColors("green")
// it is overwriting the original state with a string.
// to make this work: 
setColors(colors => [...colors, "green"])

return (
   <div>
    <button onClick= {change}>click me</button>
    {elements}
   </div>
  )
}

export default App
