import { useState } from 'react'
import "./style.css"

function App() {
  
const [myForm, setMyForm] = useState({
  firstName: "",
  lastName: ""
})

const [names, setNames] = useState([])
  
function printName(e){

    setMyForm(
      prevData => {
      return  {
        ...prevData,
        [e.target.name]: e.target.value
      }
    })
}


function handleSubmit(e){
  e.preventDefault()
  setNames(
    prev => [...prev, myForm] 
  )

}
  const liElements = names.map( item => <li>{item.firstName} {item.lastName}</li>)
console.log(names)
  return (
<>
<form onSubmit={handleSubmit}>
    <input 
    type="text" 
    placeholder='First Name' 
    name='firstName'
    onChange={printName}
    
    />

    <input 
    type="text"
    placeholder='Last Name'
    name='lastName'
    onChange={printName}
      
      />
    <button>Submit</button>
</form>

    <h1>
      {myForm.firstName} {myForm.lastName}
    </h1>

    <ol>
      {liElements}
    </ol>
</>
  )
}

export default App
