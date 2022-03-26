import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Valid } from './components/Valid';
import { AuthContext } from './Context/AuthContext';

function App() {
  const { isAuth } = React.useContext(AuthContext)
  return (
    <div className="App">
      {isAuth ? <Valid /> : <Navbar />}
    </div>
  );
}

export default App;
