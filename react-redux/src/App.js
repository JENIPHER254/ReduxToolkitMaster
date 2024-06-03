import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store";
import { addBy } from "./store";
function App() {
  //useSelector requires a callback function e.g. (state) => state.counter
  const counter = useSelector((state) => state.counter.counter);
  const counter1 = useSelector((state) => state.counter1.counter);
  const name = useSelector((state) => state.name);
  const title = useSelector((state) => state.title);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const addBy10 = () => {
   dispatch(addBy(10));
   
  };

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <h3>{name}</h3>
        <p>{counter}</p>
        <p>{counter1}</p>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
        <button onClick={addBy10}>Add by 10</button>
      </div>
    </div>
  );
}

export default App;
