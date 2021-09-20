import { useState } from "react";
import Form from "./components/Form/";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState();

  return (
    <div className="container">
      <div className="form-section">
        <p
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? "▲" : "▼"} Mostrar/esconder
        </p>
        {isOpen && <Form submitAction={setData} />}
      </div>

      {data && (
        <div className="show">
          <h3>Nome: {data.name}</h3>
          <h3>Idade: {data.age}</h3>
          <h3>Número: {data.number}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
