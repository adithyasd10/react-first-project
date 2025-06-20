import {useState,useReducer,useEffect} from "react";
import './App.css';
import messi from "./images/messi.jpg";

function Header(props){
  console.log(props)
  return(
    <header>
      <h1>{props.name}'s APP</h1>
      <p>Copyrights {props.year}</p>
    </header>
  );
}

const items = [
  "Messi",
  "Neymar",
  "Suarez"
];

function Main({dishes,openStatus,onStatus}){
  return(
  <>
    <div>
       <button onClick={() => onStatus(true)}>
        i wish you would be free
        </button>
      <h2>Welcome to beautiful Restuarant!{" "}
        {openStatus ? "Free" : "Busy"}</h2>
    </div>
    <ul>
      {dishes.map((dish)=>(
        <li style={{listStyleType:"none"}}>{dish}</li>
      ))}react
    </ul>
  </>
    
  );
}

function App(){
  const [status,toggle] = useReducer(
    (status)=> !status,
    true
  )

  useEffect(()=>{console.log(
      `I am ${status ? "Free" : "Busy" }`
    );});
  
  return(
    <>
      <div>
        <button onClick={toggle}>
          {status ? "Busy" : "Free"} Me
        </button>
        <h1>Currently i am {" "}
          {status ? "Free" : "Busy"}!
        </h1>
      </div> 
        <Header name="Surya" year={2007}/>
        <img src={messi} height={200}/>
        <Main dishes={items}
          openStatus={status}
          onStatus={toggle}
        />
        <h2>This is my first app</h2>
    </>
  );
}

export default App
