import React from 'react';
import './App.scss';

import photo1 from './paintings/photo1.jpg';

function App() {
  return (
    <div>
      <div className={'App'}>
      </div>
      <h1 className={'Heading'}>PAINT</h1>
      <h2 className={'SubHeading'}>trying to become bob ross</h2>
      <div className={'Gallery'}>
        <div className={'Gallery-item'}>
          <img src={photo1} className={'photo'} alt={'1'}/>
          <p className={'Gallery-item-text'}>Island in the Wilderness</p>
          <p className={'Gallery-item-text Gallery-item-info'}>me, 2020</p>
        </div>
      </div>
    </div>
  );

}

export default App;
