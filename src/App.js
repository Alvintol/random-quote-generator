const App = () => {
  return (
    <div className='app'>
      <div id='quote-box'>
        <div id='text'>Random quote</div>
        <div id='author'>-Author name</div>
        <button id='tweet-quote'>
          <i class='fa-brands fa-twitter'></i>
        </button>
        <button id='new-quote'>New Quote</button>
      </div>
    </div>
  );
};

export default App;
