import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch({type: 'minus'})}>-</button>
      {count}
      <button onClick={() => dispatch({type: 'plus'})}>+</button>
    </div>
  );
}

export default App;