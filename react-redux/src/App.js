import "./App.css";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const counter = useSelector((state) => state.counter);
  const name = useSelector((state) => state.name);
  const title = useSelector((state) => state.title);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const addBy10 = () => {
    dispatch({ type: "ADD",payload:10 });
  };

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <h3>{name}</h3>
        <p>{counter}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={addBy10}>Add by 10</button>
      </div>
    </div>
  );
}

export default App;
