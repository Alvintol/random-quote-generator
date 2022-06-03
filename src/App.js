import './styling/sass/app.scss';
import { useEffect, useState } from 'react';

const App = () => {

  const [state, setState] = useState({
    quoteList: [],
    quote: "That's what",
    author: 'She',
  });

  useEffect(() => {

    
  }, []);

  const 
  const getNewQuote = () => console.log('NEW QUOTE BUTTON') 

  return (
    <div className='app'>
      <div id='quote-box'>
        <div id='box-top'>
          <div id='text'>
            <p>" {state.quote} "</p>
          </div>
          <div id='author'>
            <p>- {state.author}</p>
          </div>
        </div>
        <div id='button-container'>
          <a id='tweet-quote' href='https://twitter.com/intent/tweet'>
            <i class='fa-brands fa-twitter'></i>
          </a>
          <button 
          id='new-quote'
          onClick={() => getNewQuote}
          >New Quote</button>
        </div>
      </div>
    </div>
  );
};

export default App;
