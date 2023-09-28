import React,{ useState } from "react";
import './App.css';

function App() {
  //let counter = 5;
 let [counter,setCounter] = useState(15);

  const add = () =>{
    console.log("value added" , counter)
    counter = counter+1;
    setCounter(counter)
  }
  const remove = () =>{
    console.log("value removed" , counter)
    counter = counter-1;
    setCounter(counter)
  }

  
  return (
   <>
     <h1>Chai and code</h1>
     <h2>Counter value:{counter}</h2>
     <button onClick={add}>Add value</button>
     <br/>
     <button onClick={remove}>remove value</button>
   </>
    
  );
}

export default App;
