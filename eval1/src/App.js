
import './App.css';
import React from 'react';
import { Vegetable } from './components/vegetable';
import { Wishlist } from './components/wishlist';

function App() {
  const [show, setShow] = React.useState(true)
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Wishlist</button>
      <button onClick={() => setShow(!show)}>Vegetable</button>
      <div>{show ? <Wishlist /> : <Vegetable />}</div>

    </div>
  );
}

export default App;
