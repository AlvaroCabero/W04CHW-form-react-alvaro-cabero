import { useState } from "react";
import "./App.css";


function App() {
  const [name, setName] = useState("");

 return (
   
      <nav className="nav-bar">
        <button className="nav-bar__button1">< - - </button>
        <button className="nav-bar__button2"> - - ></button>
      </nav>

        <form
      className="form-initial"
      autoComplete="off"
      onSubmit={onCreateGentleman}
      >
        </form>
          
      

  );
}

export default App;
