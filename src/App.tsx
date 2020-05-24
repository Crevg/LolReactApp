import React, { useState } from 'react';
import './App.scss';
import MainContainer from './Shared/Container/MainContainer';
import Header from './Shared/Header/Header';

type MyState = {
  summonerName: string | null;
};

function App() {
  const [summonerName, summonerNameStateHandler] = useState('');

  function summonerNameHandler(newSummonerName: string) {
    summonerNameStateHandler(() => newSummonerName);
    
  }
 

  return (
    <React.Fragment>
      <Header searchHandler={summonerNameHandler} />
      <div className='MainContainer'>
        <MainContainer summonerName={summonerName} />
      </div>
    </React.Fragment>
  );
}

export default App;
