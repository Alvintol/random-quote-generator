import './styling/sass/app.scss';
import { useEffect, useState } from 'react';
import { changeColors } from './helpers/help_functions';
import axios from 'axios';

const App = () => {

  const [state, setState] = useState({
    quoteList: [],
    quote: "That's what",
    author: 'She',
  });

  useEffect(() => {

    const options = {
      method: 'GET',
      url: 'https://theysaidso.p.rapidapi.com/quote/random',
      params: {language: 'en'},
      headers: {
        'X-RapidAPI-Host': 'theysaidso.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
      }
    };
    
    axios.request(options).then(response => {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  const getNewQuote = () => {
    console.log('NEW QUOTE BUTTON') 
    changeColors();
  }

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
            <i className='fa-brands fa-twitter'></i>
          </a>
          <button 
          id='new-quote'
          onClick={() => getNewQuote()}
          >New Quote</button>
        </div>
      </div>
    </div>
  );
};

export default App;
