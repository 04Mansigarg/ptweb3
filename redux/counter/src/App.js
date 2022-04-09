
import { useSelector } from 'react-redux';
import './App.css';
import { Counter } from './components/Counter';

function App() {
  const counter = useSelector((state) => state.counter)
  return (
    <div className="App">
      <Counter />
      <h1>count :{counter}</h1>
    </div>
  );
}

export default App;
