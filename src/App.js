import { useState } from "react";
import "./App.css";
import FormAccess from "./components/FormAccess/FormAccess";
import FormData from "./components/FormData/FormData";
import FormLogin from "./components/FormLogIn/FormLogin";
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
  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page < 2) {
      setPage(page + 1);
      console.log(page);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
      console.log(page);
    }
  };
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
      <NavBar page={page} nextPage={nextPage} prevPage={prevPage} />
      {/* <form
        className="form-initial"
        autoComplete="off"
        // onSubmit={onCreateGentleman}
      ></form> */}

      {page === 0 ? <FormData /> : page === 1 ? <FormAccess /> : <FormLogin />}
    </>
  );
}

export default App;
