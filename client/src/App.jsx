import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AuthorForm from "./components/AuthorForm";
import AuthorList from "./components/AuthorList";
import "./App.css";
import EditAuthor from "./components/EditAuthor";

function App() {
  return (
    <BrowserRouter>
      <h1>Favorite Authors</h1>
      <>
        <Routes>
          <Route exact path="/authors" element={<AuthorList />}></Route>
          <Route exact path="/authors/new" element={<AuthorForm />}></Route>
          <Route
            exact
            path="/authors/:id/edit"
            element={<EditAuthor />}
          ></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
