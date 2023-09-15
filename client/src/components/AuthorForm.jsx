import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AuthorForm = () => {
  const [author, setAuthor] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/authors", {
        name: author,
      })
      .then((res) => {
        console.log(res);
        navigate("/authors");
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  return (
    <>
      <Link to={"/authors"}>Home</Link>
      <p>Add a new author:</p>
      <form onSubmit={onSubmitHandler}>
        {errors.map((err, index) => (
          <p key={index}>{err}</p>
        ))}
        <p>
          <label>Name:</label>
          <input type="text" onChange={(e) => setAuthor(e.target.value)} />
        </p>
        <div>
          <button type="button" onClick={() => navigate("/authors")}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};
export default AuthorForm;
