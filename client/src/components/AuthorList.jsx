import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import EditAuthor from "./EditAuthor";

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/authors")
      .then((res) => {
        console.log(res.data);
        setAuthors(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteAuthor = (id) => {
    axios
      .delete(`http://localhost:8000/authors/${id}`)
      .then((res) => {
        console.log(res.data);
        setAuthors((prevAuthors) =>
          prevAuthors.filter((author) => author._id !== id)
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Link to={"/authors/new"}>Add an author</Link>
      <p>We have quotes by:</p>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions Available</th>
          </tr>
        </thead>
        {authors.length > 0 &&
          authors.map((author, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{author.name}</td>
                  <td>
                    <button
                      onClick={() => navigate(`/authors/${author._id}/edit`)}
                    >
                      Edit
                    </button>
                    <button onClick={() => deleteAuthor(author._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </>
  );
};

export default AuthorList;
