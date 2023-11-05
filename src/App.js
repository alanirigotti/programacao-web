import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';
 
function Employeers(){
  const data = require("./services/exemploJSON.json")
  return(
    <div
    >
      {
  data.map((item)=>(
    <Card key={item.id} props={item}/>
  ))
}
    </div> 
  )
}

function App() {
  const [windows, setWindows] = useState(false)
  return (
    <div className="App">
      <header >
            <button onClick={()=> setWindows(false)}>HOME</button>
            <button onClick={()=> setWindows(true)}>FUNCIONÁRIOS</button>
      </header> 
      <main>
        {
          windows?
          <Employeers/>
          :
          <></>
        }
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
