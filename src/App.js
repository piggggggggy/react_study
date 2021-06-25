import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const styles = {
    border: '1px solid #eee',
    padding: '20px',
    display: 'flex',
    width: '100vw',
    maxwidth: '400px',
    margin: '30px auto',
    flexdirection: 'column',

  };
  return (
    <div className="App">
      <div style={styles}>
        <h1>안녕하세요!</h1>
        <hr/>
        <p>이름을 입력해주세요.</p>
        <input type='text'/>
      </div>
    </div>
  );
}

export default App;
