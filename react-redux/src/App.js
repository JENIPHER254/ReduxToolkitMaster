
import './App.css';
import { useSelector } from 'react-redux';
function App() {
  const counter =useSelector((state)=>state.counter);
  const name =useSelector((state)=>state.name);
  const title =useSelector((state)=>state.title);
  return (
    <div>
       <div>
         <h1>{title}</h1>
         <h3>{name}</h3>
         <p>{counter}</p>
       </div>
    </div>
  );
}

export default App;
