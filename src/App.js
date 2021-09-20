import { useState } from "react";
import Form from "./components/Form/";
import "./App.css";

function App() {
  const [data, setData] = useState({ name: "", age: "", number: "" });

  return (
    <div className="container">
      <div className="form-section">
        <h2>Mostrar/esconder</h2>
        <Form submitAction={setData} />
      </div>
      <hr />
      <div className="show">
        <h2>Nome: {data.name}</h2>
        <h2>Idade: {data.age}</h2>
        <h2>Número: {data.number}</h2>
      </div>
    </div>
  );
}

export default App;
