import './styles/styles.css'
import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/header';
import axios from 'axios'


function App() {

  const [quote, setQuote] = useState('')
    
    // useEffect(()=> {
      const getQuote = () => {

        
        const quote = axios.get('https://api.kanye.rest')
        
        Promise.all([quote])
        .then((response) => {
          const[quote] = response

          setQuote('')
          return quote.data.quote.length > 120 ? getQuote() : quote.data.quote
        }) 
        .then((quote) => {
            setQuote(quote)
        })
        
      }
      
    // },[])

    
    return (
    <div className="App">
     <Header greeting={'Click the button'} quote={quote} getQuote={getQuote}/>
    </div>
  );

 
 
}

export default App;
