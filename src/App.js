import { useState } from "react";
import "./App.css";
import FormAccess from "./components/FormAccess/FormAccess";
import FormData from "./components/FormData/FormData";
import FormLogin from "./components/FormLogIn/FormLogin";
import NavBar from "./components/NavBar/NavBar";

function App() {
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({
  //   id: 1,
  //   name: "",
  //   lastName: "",
  //   birthdate: "",
  //   age: "",
  //   mail: "",
  //   usersName: "",
  //   passWord: "",
  // });
  const [page, setPage] = useState(0);
  // const [disabled, setDisabled] = useState(false);
  const disabled = false;
  const nextPage = () => {
    if (page < 2) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  // useEffect(() => {
  //   setDisabled(
  //     wordData.text === "" ||
  //       wordData.maxOcurrences === "" ||
  //       wordData.text.includes(" ")
  //   );
  // }, [users]);

  // const addUser = (user, users) => {
  //   if (!users.find((userSearch) => userSearch.mail === user.mail)) {
  //     setUsers([...users, user]);
  //   }
  // };

  return (
    <>
      {/* <userContext.Provider value={{ addUser }}></WordsContext.Provider> */}
      <NavBar
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
        disabled={disabled}
      />
      {/* <form
        className="form-initial"
        autoComplete="off"
        // onSubmit={onCreateGentleman}
      ></form> */}

      {page === 0 ? (
        <FormData />
      ) : // <FormData addUser={addUser} />
      page === 1 ? (
        <FormAccess />
      ) : (
        <FormLogin />
      )}
    </>
  );
}

export default App;
