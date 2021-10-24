import { useState } from "react";
import "./App.css";

function App() {
  // const [name, setName] = useState("");
  // if (name === "Hola") {
  //   setName(name);
  // }
  return (
    <>
      <nav className="nav-bar">
        <button className="nav-bar__button1 btn btn-primary btn-lg btn-info">
          Patrás
        </button>
        <button className="nav-bar__button2 btn btn-primary btn-lg btn-info">
          Palante
        </button>
      </nav>

      {/* <form
        className="form-initial"
        autoComplete="off"
        // onSubmit={onCreateGentleman}
      ></form> */}

      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          ></input>
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
