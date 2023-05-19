import './App.css';
import { useState } from 'react';
import Form from './Components/Form';
import Title from './Components/Title';
import UpdatedData from './Components/UpdatedData';


function App() {
  const [display, setDisplay] = useState("Updated Data displays here.")
  return (
     <div className="App">
      <Title/>
      <Form func={setDisplay}/>
      <UpdatedData display={display} />
   </div>
  );
}

export default App;
