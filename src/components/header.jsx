import React, {useState} from "react";
import Button from "./buttons";
import '../styles/styles.css';

const Header = (props) => {
  const {greeting,quote, getQuote} = props



const [buttonName, setButtonName] = useState('Click Me')
// const [value, setValue] = useState('')
  
// const changeHandler = (e) =>{
//  setValue(e.target.value)
// }

const clickHandler = () => {
  //  setButtonName(value)
  //  setValue('')
  const text = ['Whats going on here?','Click me Again!','Stop it!','I demand a recount!']
   getQuote()

  setButtonName(text[Math.floor(Math.random() * 4)]) 


}
const randomText = () => {
 
}
console.log(randomText())
  return(
    <>
      <div className="main-div">
        <h1 className="greeting">{greeting}</h1>
        <form onSubmit={(e)=> e.preventDefault()}>
          {/* <input value={value} onChange={changeHandler}/> */}
          <Button buttonName={buttonName} clickHandler={clickHandler} />
          
        </form>
        {quote &&<h2 className="kanye">{quote}</h2>}
      </div>
    </>
  )
}

export default Header;