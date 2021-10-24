import { useState } from "react";
import "./App.css";
import FormData from "./components/FormData/FormData";
import NavBar from "./components/NavBar/NavBar";

function App() {
  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     name: "",
  //     lastName: "",
  //     birthdate: "",
  //     age: "",
  //     mail: "",
  //     usersName: "",
  //     passWord: "",
  //   },
  // ]);
  // const [page, setPage] = useState(0);

  // const addUser = (user, users) => {
  //   if (!users.find((userSearch) => userSearch.mail === user.mail)) {
  //     setUsers([...users, user]);
  //   }
  // };

  // if (name === "Hola") {
  //   setName(name);
  // }
  return (
    <>
      {/* <userContext.Provider value={{ addUser }}></WordsContext.Provider> */}
      <NavBar />
      {/* <form
        className="form-initial"
        autoComplete="off"
        // onSubmit={onCreateGentleman}
      ></form> */}
      {<FormData />}
      {/* {page === 0 ? <FormData /> : page === 1 ? <FormAcces /> : <FormLogin />} */}
      {/* <form>
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
      </WordsContext.Provider> */}
    </>
  );
}

export default App;
