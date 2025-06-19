import './App.css'

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

function Main({dishes}){
  return(
    <ul>
      {dishes.map((dish)=>(
        <li style={{listStyleType:"none"}}>{dish}</li>
      ))}
    </ul>
  );
}

function App(){
  return(
    <div>
    <Header name="Surya" year={2007}/>
    <Main dishes={items} />
    <h2>This is my first app</h2>
  </div>
  );
}

export default App
