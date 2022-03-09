import "./App.css";
import {useState} from "react";
function App() {
  const [state, setState] = useState({
    count: 50,
    count2: 50,
  })
  
let {count, count2} = state;

const clickField1 = () => {
  setState({...state, count: count+1})
}

const clickField2 = () => {
  setState({...state, count2: count2+1})
}


const clickButton = () => {
  
}


let red = (count*100)/(count + count2);
let blue = (count2*100)/(count+count2);

  return (
    <div>
      <div className="header">
      <h1 className="score-1">  {count} </h1>
        <div className="reset"> <button onClick={clickButton}> reset </button> </div>
        <h1 className="score-2"> {count2} </h1>
      </div>
      <div className="main"> 
        <div className="red-team" onClick={clickField1} style={{width: `${red}%`}}></div>
        <div className="blue-team" onClick={clickField2} style={{width: `${blue}%`}}></div>
    </div>
      
    </div>
  );
}

export default App;
