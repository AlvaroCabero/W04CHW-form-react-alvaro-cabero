import { useState } from "react";
//import "./FormCreate.css";

const FormData = () => {
  const [userData, setUserData] = useState({
    id: 1,
    name: "",
    lastName: "",
    birthdate: "",
    age: "",
    mail: "",
    usersName: "",
    passWord: "",
  });

  // const onAddUser = (event) => {
  //   event.preventDefault();
  //   addUser(userData, users);
  // };

  return (
    <section className="form-container">
      <form className="row g-3" autoComplete="off">
        {/* <form className="row g-3" autoComplete="off" onSubmit={onAddUser}> */}
        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefault02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault02"
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="validationDefault03" className="form-label">
            Birthday
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault03"
            required
          />
        </div>
        <div className="col-md-8 mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            {/* <button className="btn btn-primary" type="submit" onClick={addUser}> */}
            Register Your Data
          </button>
        </div>
      </form>
    </section>
  );
};
export default FormData;
