import './styling/sass/app.scss';
import { useState } from 'react';
import { changeColors } from './helpers/help_functions';
import axios from 'axios';

const App = () => {
  const [state, setState] = useState({
    quote: "That's what?",
    author: 'She',
    color: '#16a085',
    visible: true,
    options: {
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/quotes',
      params: { language: 'en' },
      headers: {
        'X-Api-Key': process.env.REACT_APP_API_KEY,
      },
    },
  });

  const color = {
    backgroundColor: state.color,
    color: state.color,
  };

  const getData = async () => {
    const response = await axios.request(state.options);
    setState((prev) => ({
      ...prev,
      quote: response.data[0].quote,
      author: response.data[0].author,
    }));
  };

  const getNewQuote = () => {
    setState((prev) => ({
      ...prev,
      visible: false,
    }));
    setTimeout(() => {
      getData().then(() =>
        setState((prev) => ({
          ...prev,
          color: changeColors(),
          visible: true,
        }))
      );
    }, 500);
  };

  return (
    <div className='app' style={color}>
      <div id='quote-box'>
        <div id='box-top'>
          <div id='text'>
            <p className={state.visible ? 'fadeIn' : 'fadeOut'}>
              "{state.quote}"
            </p>
          </div>
          <div id='author'>
            <p className={state.visible ? 'fadeIn' : 'fadeOut'}>
              - {state.author}
            </p>
          </div>
        </div>
        <div id='button-container'>
          <a id='tweet-quote' href='https://twitter.com/intent/tweet'>
            <i className='fa-brands fa-twitter'></i>
          </a>
          <button
            id='new-quote'
            style={color}
            onClick={(e) => {
              e.preventDefault();
              getNewQuote();
            }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
