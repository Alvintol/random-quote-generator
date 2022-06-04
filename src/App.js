import './styling/sass/app.scss';
import { useEffect, useState } from 'react';
import { changeColors } from './helpers/help_functions';
import axios from 'axios';

const App = () => {
  const [state, setState] = useState({
    quote: "That's what?",
    author: 'She',
    color: '#16a085',
    visible: true,
  });

  const color = {
    backgroundColor: state.color,
    color: state.color,
  };

  const options = {
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes',
    params: { language: 'en' },
    headers: {
      'X-Api-Key': process.env.REACT_APP_API_KEY,
    },
  };

  const getData = async () => {
    const response = await axios.request(options);
    setState((prev) => ({
      ...prev,
      quote: response.data[0].quote,
      author: response.data[0].author,
    }));
  };

  const getNewQuote = () =>
    getData().then(() =>
      setState((prev) => ({
        ...prev,
        color: changeColors(),
        visible: true,
      }))
    );

  return (
    <div className='app' style={color}>
      <div id='quote-box'>
        <div id='box-top'>
          <div id='text'>
            <p className={state.visible ? 'fadeIn' : 'fadeOut'}>
              " {state.quote} "
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
