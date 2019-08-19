import React from "react";
import List from "./js/components/List.jsx";
import Form from "./js/components/Form.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Articles</h2>
      <hr />
      <List />
      <h2>Add a new Article</h2>
      <Form />
    </div>
  );
}

export default App;
