//import { useState } from "react";
//import "./FormCreate.css";

const FormAccess = () => {
  // const initialData = {
  //   name: "",
  //   picture: "",
  //   alternativeText: "",
  //   profession: "",
  //   status: "",
  //   twitter: "",

  return (
    <>
      <section className="form-container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInput" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInput"
              required
            ></input>
            <div id="emailHelp" className="form-text">
              Choose an userName
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
            ></input>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            ></input>
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember Password
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};
export default FormAccess;
